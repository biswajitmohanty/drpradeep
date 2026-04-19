# Post-launch follow-ups

Items that are not blockers for launch but should be addressed once real
content, decisions, and accounts are in place.

## Content

- [ ] Replace placeholder SVGs in `public/images/doctor/` with real photography
  (portrait + operating theatre / clinic candids).
- [ ] Replace placeholder SVG in `public/images/treatments/robotic-surgery.svg`
  with either a real OT photo or a branded anatomical illustration.
- [ ] Add hospital and institution logos to `public/images/credentials/`
  (UTKAL Hospital, Elite Ortho Care, Apollo, NHS, MKCG Medical College, DNB,
  AO Foundation).
- [ ] Replace placeholder patient testimonials in
  `content/testimonials/testimonials.json` with real, consented stories.
- [ ] Verify real surgery counts, patient rating, and any other stats in
  `lib/constants.ts` (`STATS`) and update the `AggregateRating` schema in
  `lib/schema.ts`.

## Contact details

- [x] Real phone / WhatsApp (`+91-9855100122`) and email
  (`eliteorthocareandrehab@gmail.com`) wired in `lib/constants.ts`.
- [x] Elite Ortho Care address + OPD timings wired with Google Maps place URL.
- [ ] Confirm whether Dr. Sahoo still consults at UTKAL Hospital. If yes,
  provide exact OPD timings and maps URL; if no, remove the UTKAL entry from
  `CLINICS` in `lib/constants.ts` and from the About page affiliations.

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
  page, booking, and a blog article. Target mobile 95+.
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
- [ ] Same for the 5 starter blog articles.
- [ ] Establish a publishing workflow (who writes, who reviews, who
  publishes) before adding new blog articles.

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
