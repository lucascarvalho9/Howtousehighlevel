// Salutty Digital — shared site behavior

// Paste your GoHighLevel "Inbound Webhook" URL here to send lead form
// submissions into a GHL workflow (see setup instructions in the build kit).
var LEAD_FORM_WEBHOOK_URL = "PASTE_YOUR_GHL_WEBHOOK_URL_HERE";

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Mobile dropdown toggle (Services submenu)
  document.querySelectorAll(".has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var wasOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove("open");
      });
      item.classList.toggle("open", !wasOpen);
    });
  });

  // Multi-step lead form(s)
  document.querySelectorAll(".lead-form-card").forEach(initLeadForm);

  // Vertical client videos: nothing downloads until a video scrolls into
  // view (preload="none" + poster). Visible videos play muted on loop;
  // tapping a video or its button turns sound on for that one only.
  initReels();

  function initReels() {
    var reels = Array.prototype.slice.call(document.querySelectorAll(".reel"));
    if (!reels.length) return;

    var conn = navigator.connection;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var autoplay = !reducedMotion && !(conn && conn.saveData) && "IntersectionObserver" in window;

    function setSound(reel, on) {
      var video = reel.querySelector("video");
      var btn = reel.querySelector(".reel-sound");
      video.muted = !on;
      reel.classList.toggle("has-sound", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.setAttribute("aria-label", on ? "Turn sound off" : "Turn sound on");
    }

    function toggleSound(reel) {
      var video = reel.querySelector("video");
      var turnOn = video.muted || video.paused;
      reels.forEach(function (r) { if (r !== reel) setSound(r, false); });
      setSound(reel, turnOn);
      if (turnOn && video.paused) video.play().catch(function () {});
    }

    reels.forEach(function (reel) {
      reel.querySelector("video").addEventListener("click", function () { toggleSound(reel); });
      reel.querySelector(".reel-sound").addEventListener("click", function () { toggleSound(reel); });
    });

    if (!autoplay) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var reel = entry.target;
        var video = reel.querySelector("video");
        if (entry.isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
          if (!video.muted) setSound(reel, false);
        }
      });
    }, { threshold: 0.6 });

    reels.forEach(function (reel) { observer.observe(reel); });
  }

  function initLeadForm(form) {
    var panels = Array.prototype.slice.call(form.querySelectorAll(".form-step-panel"));
    var total = panels.length;
    var current = 1;
    var fill = form.querySelector("[data-progress-fill]");
    var stepLabel = form.querySelector("[data-step-label]");
    var percentLabel = form.querySelector("[data-step-percent]");
    var successPanel = document.getElementById(form.getAttribute("data-success-target"));

    function render() {
      panels.forEach(function (p) {
        p.classList.toggle("active", parseInt(p.dataset.step, 10) === current);
      });
      var pct = Math.round((current / total) * 100);
      if (fill) fill.style.width = pct + "%";
      if (stepLabel) stepLabel.textContent = "Step " + current + " of " + total;
      if (percentLabel) percentLabel.textContent = pct + "%";
    }

    function isValidPhone(value) {
      var digits = value.replace(/\D/g, "");
      if (digits.length < 10) return false;
      if (/^(\d)\1{9,}$/.test(digits)) return false;
      return true;
    }

    function firstInvalidInCurrentStep() {
      var panel = panels[current - 1];
      var fields = Array.prototype.slice.call(panel.querySelectorAll("[required]"));
      var seenRadioGroups = {};
      for (var i = 0; i < fields.length; i++) {
        var f = fields[i];
        if (f.type === "radio") {
          if (seenRadioGroups[f.name]) continue;
          seenRadioGroups[f.name] = true;
          var group = panel.querySelectorAll('input[name="' + f.name + '"]');
          var checked = Array.prototype.some.call(group, function (g) {
            return g.checked;
          });
          if (!checked) return f;
          continue;
        }
        var val = f.value ? f.value.trim() : "";
        if (f.setCustomValidity) f.setCustomValidity("");
        if (!val) return f;
        if (f.type === "tel" && !isValidPhone(val)) {
          if (f.setCustomValidity) f.setCustomValidity("Enter a valid 10-digit phone number.");
          return f;
        }
        if (f.checkValidity && !f.checkValidity()) return f;
      }
      return null;
    }

    function collectFormData() {
      var fd = new FormData(form);
      var prefix = form.id + "-";
      var data = {};
      fd.forEach(function (value, key) {
        var cleanKey = key.indexOf(prefix) === 0 ? key.slice(prefix.length) : key;
        data[cleanKey] = value;
      });
      return data;
    }

    function submitToWebhook() {
      if (!LEAD_FORM_WEBHOOK_URL || LEAD_FORM_WEBHOOK_URL.indexOf("PASTE_YOUR") === 0) return;
      fetch(LEAD_FORM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(collectFormData())
      }).catch(function () {});
    }

    function advance() {
      var invalid = firstInvalidInCurrentStep();
      if (invalid) {
        if (invalid.type === "radio") {
          invalid.focus();
        } else if (invalid.reportValidity) {
          invalid.reportValidity();
        } else {
          invalid.focus();
        }
        return;
      }
      if (current < total) {
        current++;
        render();
      } else {
        submitToWebhook();
        form.style.display = "none";
        if (successPanel) successPanel.classList.add("show");
      }
    }

    form.querySelectorAll('[data-action="next"]').forEach(function (btn) {
      btn.addEventListener("click", advance);
    });

    form.querySelectorAll('[data-action="back"]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (current > 1) {
          current--;
          render();
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      advance();
    });

    render();
  }
});
