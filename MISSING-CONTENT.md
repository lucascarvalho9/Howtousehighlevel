# Salutty Digital — Site Build Notes & Open Items

The site is built and structured per the brief. Everything marked 🔴 in the
original brief is still open and has been left as a clearly marked
placeholder on the live pages (dashed "pending" badges) rather than invented.
This file is the punch list to close those out.

## Where placeholders live

Search the codebase for `class="pending"` to find every on-page placeholder
marker, or grep for `pending` across the repo.

## Open items from the brief

### Business basics
- [ ] Confirm tagline: "We shoot it. We strategize it. We run it." (used as-is per Overrides #4, but brief also flagged it for confirmation)
- [ ] Year founded
- [ ] Owner name — or keep the site company-only (currently company-only, no owner named anywhere)
- [ ] Origin story — 2-3 sentences, company-level only (About page has a placeholder block)

### Contact
- [ ] Business email address
- [ ] Hours (Mon–Fri / Sat / Sun)
- [ ] Social links: Instagram, YouTube, TikTok, LinkedIn, Facebook, Google Business — all icons currently link to `#`
- [ ] Booking flow: Calendly (or similar) vs. plain form. The `/contact/` page currently has a client-side-only form (no backend wired) — see `assets/js/main.js`.

### Trust signals
- [ ] ROI stat — must be a multiple or percentage, never a dollar figure (Home page trust bar has a placeholder slot)
- [ ] Google rating + review count, or leave omitted (currently omitted entirely, per the brief's own fallback option)

### Testimonials (need 3)
Per the brief: pull real quotes from **Giadora Painting**, **ST Renovation**,
and the realtor client. Format: quote, first name, business name, service.
Three placeholder testimonial cards exist on the Home and Our Work pages —
drop the real quotes in once sourced. Nothing was invented for these.

### Case studies / Our Work
Three placeholder case study cards exist on `/work/`. For each, still needed:
client name, one-line problem, one-line solution, and result expressed as a
**multiple or percentage only** — never a dollar amount or client revenue figure.

### Brand & design
- [ ] Logo (SVG/PNG, transparent) — site currently uses a text wordmark ("Salutty.")
- [ ] Brand hex codes — site currently uses a placeholder dark/red-orange
      palette defined as CSS variables in `assets/css/style.css` (`:root`).
      Swap those values once real brand colors land; nothing else needs to change.
- [ ] Reference sites you like, if any, to sanity-check direction

### Extras
- [ ] Language: English only vs. EN/PT toggle — built English-only for now
- [ ] Booking tool decision (see Contact above)

### Video reel
The hero requires a muted autoplay background video. No footage exists yet,
so the hero currently uses a looping marquee of the four service names plus
an animated gradient as the motion element, with an empty `<video>` tag
already wired up (see `<!-- <source src="/assets/video/reel.mp4" ... -->`
in `index.html`) — drop the file in and uncomment the source line once the
reel is cut.

## Structure delivered

```
/                                  Home
/about/                            About
/services/                         Services overview
/services/content-production/
/services/social-media-management/
/services/paid-traffic/
/services/websites/
/work/                             Our Work (case studies)
/contact/                          Tell Us About Your Business
/privacy-policy/                   Legal (template — needs legal review)
/terms-conditions/                 Legal (template — needs legal review)
```

No area pages, no industry pages, no pricing anywhere, no WhatsApp — per
the overrides.
