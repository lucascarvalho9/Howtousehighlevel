# Salutty Digital — Site Build Notes & Open Items

The site is built and structured per the brief plus the round-two feedback
call. Everything still open is left as a clearly marked placeholder on the
live pages (dashed "pending" badges) rather than invented. This file is the
punch list to close those out.

## Where placeholders live

Search the codebase for `class="pending"` to find every on-page placeholder
marker, or grep for `pending` across the repo.

## What changed in round seven

The middle trust-bar stat (23x follower growth) was scoped to one client,
and you wanted the trust bar to feel company-wide, not "a client of mine."
You floated an AI-savings dollar figure but weren't sure of the number,
same fabrication issue as before. Replaced it with a capability stat
instead of an outcome stat: "24/7 — AI-powered client response, day and
night." It's honest (true by design, not a claim needing evidence), fits
the same clean format as the other two, and backs up the exact point you
cared about (fast enough replies that you don't lose the lead). The
staffing/scaling argument you also mentioned lives better as supporting
copy on the AI Automation page than as a headline number, worth adding
there if you want it spelled out.

The 23x follower-growth result still lives on the Our Work page and the
Home page teaser, correctly scoped to that one client's case, just no
longer doubling as the company-wide trust-bar claim.

## What changed in round six

Reverted the middle stat from "2,200%+" back to "23x" (your preference on
reflection), and corrected "in a few months" to "in three months" for
accuracy, since that's the real timeframe. Updated everywhere this stat
appears: trust bar, the Our Work case, and the Home page teaser.

## What changed in round five

Both stats got a wording pass for tone: "6-Figures+" read too casual, and
"23x for one client account" was clunky. Trust bar and the matching case
copy on `/work/` and the Home teaser now read:
- 200M+ — Organic social media views generated
- 2,200%+ — Follower growth in a few months (converted from the 23x
  multiple to a percentage, same underlying real result, cleaner format)
- $100K+ — Closed from a single video for one local business (converted
  from "6-Figures+" to a real number, same conservative approach: not the
  exact total, which you weren't sure of, but a number you can stand behind)

All three stats now use the same clean numeric format (a number + "+"),
consistent across the trust bar and both places the follower-growth case
appears.

## What changed in round four

Swapped the third trust-bar stat: "5M+ views on a single account" was
replaced with "6-Figures+ generated from a single video for one local
business" — a real result from a video you made, deliberately kept
industry-agnostic (no "pool contractor" mention) so the site doesn't read
as niched to one type of business. This is a magnitude claim ("six figures
and up"), not a precise dollar total, since you weren't certain of the
exact number, this trades the strongest possible number for one you can
fully stand behind. Also dropped the "plus 5M+ views" clause from the
follower-growth case description on `/work/`, since you flagged that
metric as not compelling. If you later want this pool-contractor result
as its own full case study (with a real number, if you land on one you're
sure of), it's easy to add as a third `/work/` card.

## What changed in round three

You were worried the two featured services (Content Production, Paid Ads)
would read as "all we offer" and confuse prospects, especially since AI
Automation matters for your business-plan pitch. Fixed by reframing, not by
adding more "pillars":
- Both Home and Services now explicitly say "full-service" and "where we
  lead, not where we stop" around the two featured cards.
- Renamed the secondary services strip from "Also Available" to "Full-Service
  Support" so it reads as a real offering, not an afterthought.
- Added a dedicated AI Automation spotlight section on the Home page (separate
  from its listing in Full-Service Support) with pitch-ready language: faster
  client response, no lost leads, less internal busywork. Use this section's
  copy directly if it's useful for your business plan.
- Strengthened the AI Automation service page copy the same way.
- The word "pillar" was never used anywhere in the visible copy, only in
  our conversation, so no on-page wording needed to change there.

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
