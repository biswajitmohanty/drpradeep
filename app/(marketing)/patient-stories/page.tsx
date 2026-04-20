import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { PatientStoriesList } from "@/components/sections/patient-stories-list";
import { getTestimonials } from "@/lib/testimonials";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Stories — Real Recoveries",
  description:
    "Real patient stories of knee replacement, hip replacement, sports injury recovery, and orthopaedic trauma care at Dr. Pradeep Kumar Sahoo's clinics in Bhubaneswar.",
  alternates: { canonical: `${SITE.url}/patient-stories` },
};

export default function PatientStoriesPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <Section size="lg" aria-labelledby="stories-heading">
        <div className="max-w-3xl">
          <span className="eyebrow">Patient stories</span>
          <h1
            id="stories-heading"
            className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
          >
            Real recoveries. Real patients.
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            Every story below is from a patient who chose to share their
            journey. Filter by condition to see outcomes most relevant to
            yours. Individual outcomes vary — these are honest accounts of
            what recovery looked like in their case.
          </p>
        </div>
      </Section>

      <Section variant="elevated">
        <PatientStoriesList testimonials={testimonials} />
      </Section>

      <Section>
        <div className="rounded-xl border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-h2 font-medium text-text-primary text-balance">
              Your story could help someone else.
            </h2>
            <p className="mt-3 text-body text-text-secondary text-pretty">
              If you&apos;d like to share your recovery with future patients,
              get in touch. Stories are only published with written consent.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
