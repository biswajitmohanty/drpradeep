import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/shared/section";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { getAllTreatments } from "@/lib/content";
import { SITE, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Orthopaedic Treatments in Bhubaneswar",
  description:
    "Knee replacement, hip replacement, sports injury repair, arthroscopy, trauma care, and spine & joint pain — evidence-based orthopaedic treatments in Bhubaneswar.",
  alternates: { canonical: `${SITE.url}/treatments` },
};

export default function TreatmentsPage() {
  const treatments = getAllTreatments();

  return (
    <>
      <Section size="lg" aria-labelledby="treatments-heading">
        <div className="max-w-3xl">
          <span className="eyebrow">Treatments</span>
          <h1
            id="treatments-heading"
            className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
          >
            Orthopaedic care, from first consultation to full recovery.
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            Every patient gets a clear diagnosis and a plan built around their
            life. Conservative options come first — surgery only when
            it&apos;s the right answer. Explore the specific conditions and procedures below,
            or book a consultation if you aren&apos;t sure where to start.
          </p>
        </div>
      </Section>

      <Section variant="elevated">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {treatments.map((t) => (
            <TreatmentCard
              key={t.frontmatter.slug}
              slug={t.frontmatter.slug}
              title={t.frontmatter.title}
              description={t.frontmatter.summary}
              icon={t.frontmatter.icon}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-h2 font-medium text-text-primary text-balance">
              Not sure what you need?
            </h2>
            <p className="mt-3 text-body text-text-secondary text-pretty">
              Most patients don&apos;t arrive with a diagnosis — they arrive
              with pain. A consultation is the fastest way to get a clear
              answer and a plan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/book" className="btn-primary">
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
