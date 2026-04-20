# Post-launch follow-ups

Items that are not blockers for launch but should be addressed once real
content, decisions, and accounts are in place.

## Content

- [x] Real photography wired: `public/images/brand/logo.png`,
  `public/images/doctor/robotic-smith-nephew.jpg`,
  `public/images/doctor/robotic-velys.jpg`,
  `public/images/doctor/ot-team.jpg`.
- [ ] Source hospital / institution **logo files** (Apollo, NHS, MKCG,
  AO Foundation, FIFA Sports Medicine). Until then the credentials trust
  strip renders as text chips.
- [ ] Optional: short explainer video for `/robotic-surgery` (currently a
  still frame of the Smith+Nephew platform).
- [ ] Replace placeholder patient testimonials in
  `content/testimonials/testimonials.json` with real, consented stories.
- [ ] Verify real surgery counts, patient rating, and any other stats in
  `lib/constants.ts` (`STATS`) and update the `AggregateRating` schema in
  `lib/schema.ts`.

## Contact details

- [x] Real phone / WhatsApp (`+91-9855100122`) and email
  (`eliteorthocareandrehab@gmail.com`) wired in `lib/constants.ts`.
- [x] Elite Ortho Care address + OPD timings wired with Google Maps place URL.
- [x] UTKAL Hospital removed from clinics, nav copy, and schema.

## Production integrations (Phase 5 wiring is in place)

- [ ] Create a Supabase project and run `supabase/migrations/0001_bookings.sql`.
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in Vercel.
- [ ] Create a Resend account, verify the sending domain, and add
  `RESEND_API_KEY` + `CLINIC_NOTIFICATION_EMAIL` + `CLINIC_FROM_EMAIL`.
- [ ] Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` once the Plausible site is set up.
- [ ] Add `NEXT_PUBLIC_CLARITY_ID` once the Clarity project is set up.
- [ ] Add `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` to show the live Google
  rating on the homepage stats band and emit a real `AggregateRating` schema.
  Place ID can be looked up at
  https://developers.google.com/maps/documentation/places/web-service/place-id.

## SEO hardening (Phase 4)

- [ ] Run Google Rich Results test against each page and fix any warnings.
- [ ] Run Lighthouse on homepage, about, treatments overview, one treatment
  page, and booking. Target mobile 95+.
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Replace the open-graph `portrait.jpg` reference in
  `lib/schema.ts` once the real portrait is uploaded.

## Performance

- [ ] Reduce homepage First Load JS toward 100KB target. Candidate actions:
  selective import from `framer-motion/dom`, replace motion on non-critical
  sections with CSS transitions, or lazy-load motion-heavy sections.

## Medical content review

- [ ] Peer review all treatment MDX files with a second orthopaedic
  surgeon to confirm clinical accuracy.
- [ ] If the blog is reinstated, repeat the review for each article and
  establish a publishing workflow (who writes, who reviews, who publishes)
  before new articles go live.

## Accessibility audit

- [ ] Run axe-core or Lighthouse a11y audit on every route. Fix any
  failures.
- [ ] Verify colour contrast across all surface / accent combinations.
- [ ] Verify keyboard navigation end-to-end including mobile menu and
  treatments dropdown.

## Domain + hosting

- [ ] Point `drpradeepsahoo.com` DNS to Vercel.
- [ ] Confirm Cloudflare is in front of Vercel (per SPEC §2, Phase 3
  note) — optional but recommended for India edge performance.
