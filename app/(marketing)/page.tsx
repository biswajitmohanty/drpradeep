import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CredentialsStrip } from "@/components/sections/credentials-strip";
import { StatsBand } from "@/components/sections/stats-band";
import { AboutPreview } from "@/components/sections/about-preview";
import { RoboticShowcase } from "@/components/sections/robotic-showcase";
import { TreatmentsGrid } from "@/components/sections/treatments-grid";
import { KneePricing } from "@/components/sections/knee-pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChoose } from "@/components/sections/why-choose";
import { CtaSection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { buildAggregateRatingSchema } from "@/lib/schema";
import { DOCTOR, SITE } from "@/lib/constants";
import { getGoogleReviewSummary } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: `${DOCTOR.name} — ${SITE.tagline}`,
  description: SITE.defaultDescription,
  alternates: { canonical: SITE.url },
};

export default async function HomePage() {
  const reviews = await getGoogleReviewSummary();
  const aggregateRating = reviews
    ? buildAggregateRatingSchema({
        ratingValue: reviews.rating,
        reviewCount: reviews.userRatingsTotal,
      })
    : null;

  return (
    <>
      <Hero />
      <CredentialsStrip />
      <StatsBand />
      <AboutPreview />
      <RoboticShowcase />
      <TreatmentsGrid />
      <KneePricing />
      <Testimonials />
      <WhyChoose />
      <CtaSection />
      <FAQ />

      {aggregateRating ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
        />
      ) : null}
    </>
  );
}
