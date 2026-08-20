# Salutty Digital — Site Build Notes & Open Items

The site is built and structured per the brief plus the round-two feedback
call. Everything still open is left as a clearly marked placeholder on the
live pages (dashed "pending" badges) rather than invented. This file is the
punch list to close those out.

## Where placeholders live

Search the codebase for `class="pending"` to find every on-page placeholder
marker, or grep for `pending` across the repo.

## What changed in round two

- **Services restructured.** Dropped the "four pillars" framing. Content
  Production and Paid Ads (renamed from Paid Traffic) are now the two
  marketed "Core Service" offerings, front and center on Home and Services.
  Social Media Management, Branding, SEO, Landing Pages, Websites, CRM, and
  AI Automation are listed as "Also Available," each with its own page for
  SEO (`/services/<slug>/`, 9 pages total).
- **Multi-step lead form.** Replaced the single-step contact form with a
  3-step progressive form (progress bar, Back/Next, chip-style selects) on
  both the Home page (`#lead-form`) and `/contact/`. Fields: name/phone/email,
  business name + what they need help with, budget range + optional note.
- **Real stat added.** The trust bar and one Our Work case now use a real,
  anonymized result you provided: one client account grew from under 300 to
  7,000+ followers (~23x) with 5M+ views, in a few months. Client name
  withheld per your request. Nothing else was fabricated — see "Trust
  signals" below for what's still a placeholder.
- **Testimonials removed** (Home and Our Work) since there are none yet.
- **Copy pass:** removed every em dash sitewide (replaced with commas/periods),
  removed "no pressure" / "zero pressure" language, reworded the "How We're
  Different" headline to "We Do It All" (was too close to a friend's
  business copy), reworded process step 1 so it doesn't presume every
  engagement starts with an introductory call, renamed Paid Traffic → Paid Ads
  everywhere.
- **Location removed.** No more "Orlando, FL" or "Central Florida" anywhere
  on the site (footer, About, Contact, Content Production), per your request.
- **Social platforms trimmed** to Instagram + Facebook only (removed
  YouTube, TikTok, LinkedIn placeholders) — still linking to `#` pending URLs.
- **Hero visual:** kept the existing marquee/gradient placeholder as-is (your
  call) — no stock or AI-generated image was added. See "Video reel" below.

## Open items

### Business basics
- [ ] Confirm tagline: "We shoot it. We strategize it. We run it."
- [ ] Year founded
- [ ] Owner name — or keep the site company-only (currently company-only)
- [ ] Origin story — 2-3 sentences, company-level only (About page has a placeholder block)

### Contact
- [x] Business email address: stdigital.us@gmail.com (footer, Contact page, Privacy Policy, Terms)
- [x] Hours: Monday to Friday, 8am to 5pm (Contact page)
- [x] Instagram (instagram.com/stdigital.us) and Facebook (facebook.com/profile.php?id=61568142107789) linked everywhere the icons appear
- [ ] Booking flow: the multi-step form is client-side only right now (no
      backend, no Calendly) — see `assets/js/main.js`. Decide where
      submissions should actually go (CRM, email, Calendly embed, etc.)
      before this goes live.

### Trust signals
- [ ] The 200M+ organic views figure and the 23x / 5M+ case stat are real
      per what you told me — double-check the exact numbers before launch,
      since "23x" and "5M+" were rounded down conservatively from what you
      described.

### Testimonials
Removed for now (none available). Brief originally pointed at Giadora
Painting, ST Renovation, and a realtor client as sources — worth
revisiting once you have quotes to add back.

### Case studies / Our Work
One real (anonymized) case is live. Two placeholder case study cards remain
on `/work/` and the Home page teaser, left as-is for now at your request —
no rush, drop client name, one-line problem, one-line solution, and result
as a **multiple or percentage only** whenever you have them.

### Brand & design
- [ ] Logo (SVG/PNG, transparent) — site currently uses a text wordmark ("Salutty.")
- [ ] Brand hex codes — placeholder dark/red-orange palette in
      `assets/css/style.css` (`:root`). Swap those values once real brand
      colors land; nothing else needs to change.

### Hero visual
No image or video was added — decided to keep the current marquee/gradient
placeholder until real footage or photography is ready. The `<video>` tag is
already wired up (see the commented `<source>` line in `index.html`); drop
the file in and uncomment it once the reel is cut. I don't have an
image-generation tool in this environment, so a literal "AI generated
picture" isn't something I can produce directly — if you want a placeholder
photo before real footage is ready, generate/source one and send it over and
I'll wire it in.

### Extras
- [ ] Language: English only vs. EN/PT toggle — built English-only for now
- [ ] Booking tool decision (see Contact above)

## Structure delivered

```
/                                        Home
/about/                                  About
/services/                               Services overview
/services/content-production/            Core service
/services/paid-ads/                      Core service
/services/social-media-management/
/services/branding/
/services/seo/
/services/landing-pages/
/services/websites/
/services/crm/
/services/ai-automation/
/work/                                   Our Work (case studies)
/contact/                                Tell Us About Your Business
/privacy-policy/                         Legal (template — needs legal review)
/terms-conditions/                       Legal (template — needs legal review)
```

No area pages, no industry pages, no pricing anywhere, no WhatsApp — per
the original overrides. No location mentioned anywhere — per round-two
feedback.
