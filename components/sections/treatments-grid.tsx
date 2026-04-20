import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { Reveal } from "@/components/shared/reveal";
import { TREATMENTS } from "@/lib/constants";

export function TreatmentsGrid() {
  return (
    <Section variant="elevated" aria-labelledby="treatments-heading">
      <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
        <div className="max-w-2xl">
          <span className="eyebrow">Treatments</span>
          <h2
            id="treatments-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            Comprehensive orthopaedic care, delivered with precision.
          </h2>
        </div>
        <Link href="/treatments" className="link-arrow text-body-lg shrink-0">
          View all treatments
          <ArrowRight size={18} />
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {TREATMENTS.map((t, i) => (
          <Reveal key={t.slug} delay={i * 0.08}>
            <TreatmentCard {...t} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
