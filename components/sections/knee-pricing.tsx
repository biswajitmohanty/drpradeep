import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { KNEE_REPLACEMENT_PRICING } from "@/lib/constants";

export function KneePricing() {
  return (
    <Section variant="elevated" aria-labelledby="knee-pricing-heading">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2
            id="knee-pricing-heading"
            className="text-center font-display text-h2 md:text-h1 font-semibold uppercase text-primary text-balance"
          >
            What is the cost of knee replacement surgery ?
          </h2>
          <p className="mt-4 text-center text-body text-text-secondary text-pretty">
            The average cost for a Total Knee Replacement (TKR) surgery in
            Odisha, India ranges from{" "}
            <strong className="text-text-primary">
              {KNEE_REPLACEMENT_PRICING.averageRangeLow} to{" "}
              {KNEE_REPLACEMENT_PRICING.averageRangeHigh}
            </strong>
            .
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-lg border border-border bg-surface overflow-hidden">
          <div className="grid grid-cols-2 bg-primary-soft border-b border-border">
            <div className="p-4 md:p-5 text-body-sm font-semibold text-primary">
              Procedure
            </div>
            <div className="p-4 md:p-5 text-body-sm font-semibold text-primary">
              Cost
            </div>
          </div>
          {KNEE_REPLACEMENT_PRICING.rows.map((r) => (
            <div
              key={r.procedure}
              className="grid grid-cols-2 border-b border-border last:border-b-0 transition-colors duration-300 hover:bg-primary-soft/30"
            >
              <div className="p-4 md:p-5 text-body-sm font-semibold text-text-primary">
                {r.procedure}
              </div>
              <div className="p-4 md:p-5 text-body-sm text-text-secondary">
                {r.range}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-body-sm text-text-muted">
            A partial knee replacement (PKR) typically costs about 10–20% less
            than a TKR.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <h3 className="text-center font-display text-h3 font-medium text-primary text-balance">
            The Cost of Knee Replacement May Vary Based On
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {KNEE_REPLACEMENT_PRICING.factors.map((f, i) => (
              <Reveal key={f} delay={0.25 + i * 0.06} as="li">
                <span className="inline-block rounded-full border border-border bg-surface px-5 py-2 text-body-sm text-text-secondary transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5">
                  {f}
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
