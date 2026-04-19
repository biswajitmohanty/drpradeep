import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  ClipboardList,
  Clock,
  IndianRupee,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { TreatmentCard } from "@/components/shared/treatment-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAllTreatments, getTreatment } from "@/lib/content";
import {
  buildFAQSchema,
  buildMedicalProcedureSchema,
} from "@/lib/schema";
import { KNEE_REPLACEMENT_PRICING, SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllTreatments().map((t) => ({ slug: t.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const t = getTreatment(slug);
    return {
      title: `${t.frontmatter.title} in Bhubaneswar`,
      description: t.frontmatter.description,
      alternates: { canonical: `${SITE.url}/treatments/${slug}` },
      openGraph: {
        title: `${t.frontmatter.title} — Dr. Pradeep Kumar Sahoo`,
        description: t.frontmatter.description,
        url: `${SITE.url}/treatments/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;

  let t;
  try {
    t = getTreatment(slug);
  } catch {
    notFound();
  }

  const allTreatments = getAllTreatments();
  const related = t.related
    .map((s) => allTreatments.find((x) => x.frontmatter.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const procedureSchema = buildMedicalProcedureSchema({
    name: t.frontmatter.title,
    description: t.frontmatter.description,
    url: `${SITE.url}/treatments/${slug}`,
  });
  const faqSchema = buildFAQSchema(t.faqs);

  return (
    <>
      <Section size="lg" aria-labelledby="treatment-heading">
        <div className="max-w-3xl">
          <Link
            href="/treatments"
            className="text-caption text-text-muted hover:text-primary uppercase tracking-[0.12em] mb-6 inline-block"
          >
            ← All treatments
          </Link>
          <span className="eyebrow block">{t.frontmatter.title}</span>
          <h1
            id="treatment-heading"
            className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
          >
            {t.frontmatter.heroHeadline}
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            {t.frontmatter.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Clinic timings &amp; locations
            </Link>
          </div>
        </div>
      </Section>

      <Section variant="elevated" aria-labelledby="symptoms-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow inline-flex items-center gap-2">
              <AlertTriangle size={14} /> Symptoms
            </span>
            <h2
              id="symptoms-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              When should you consult?
            </h2>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {t.symptoms.map((s, i) => (
              <li key={i} className="flex gap-3 text-body text-text-primary">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary mt-0.5">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-pretty">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="options-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow inline-flex items-center gap-2">
              <ClipboardList size={14} /> Treatment options
            </span>
            <h2
              id="options-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              Conservative first. Surgical when right.
            </h2>
          </div>
          <ol className="lg:col-span-8 space-y-5">
            {t.options.map((o, i) => (
              <li
                key={i}
                className="rounded-lg border border-border bg-surface p-5 md:p-6"
              >
                <h3 className="font-display text-h4 font-medium text-text-primary">
                  {o.label}
                </h3>
                <p className="mt-2 text-body text-text-secondary text-pretty">
                  {o.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section variant="elevated" aria-labelledby="expect-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow inline-flex items-center gap-2">
              <Activity size={14} /> What to expect
            </span>
            <h2
              id="expect-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              A clear picture of the procedure.
            </h2>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {t.whatToExpect.map((s, i) => (
              <li key={i} className="flex gap-3 text-body text-text-primary">
                <span className="font-mono text-body-sm text-primary flex-shrink-0 w-7 pt-0.5">
                  0{i + 1}
                </span>
                <span className="text-pretty">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="recovery-heading">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow inline-flex items-center gap-2">
            <Clock size={14} /> Recovery
          </span>
          <h2
            id="recovery-heading"
            className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
          >
            A realistic recovery timeline.
          </h2>
        </div>
        <ol className="relative border-l-2 border-primary/20 pl-6 space-y-8">
          {t.recovery.map((r, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-surface"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <p className="font-display text-h4 font-medium text-text-primary">
                {r.phase}
              </p>
              <p className="mt-1 text-body text-text-secondary text-pretty">
                {r.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {slug === "knee-replacement" ? (
        <Section aria-labelledby="pricing-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="eyebrow inline-flex items-center gap-2">
                <IndianRupee size={14} /> Treatment cost
              </span>
              <h2
                id="pricing-heading"
                className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
              >
                Transparent pricing, no surprises.
              </h2>
              <p className="mt-4 text-body-sm text-text-secondary text-pretty">
                {KNEE_REPLACEMENT_PRICING.note}
              </p>
              <p className="mt-4 text-caption text-text-muted">
                Costs vary based on:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-caption text-text-muted">
                {KNEE_REPLACEMENT_PRICING.factors.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-xl border border-border bg-surface overflow-hidden">
                <div className="grid grid-cols-[1.6fr_1fr] bg-surface-elevated border-b border-border">
                  <div className="p-4 md:p-5 text-caption uppercase tracking-[0.1em] text-text-muted font-medium">
                    Procedure
                  </div>
                  <div className="p-4 md:p-5 text-caption uppercase tracking-[0.1em] text-text-muted font-medium text-right">
                    Cost range (INR)
                  </div>
                </div>
                {KNEE_REPLACEMENT_PRICING.rows.map((r, i) => (
                  <div
                    key={r.procedure}
                    className={`grid grid-cols-[1.6fr_1fr] border-b border-border last:border-b-0 ${
                      i % 2 === 1 ? "bg-surface-elevated/40" : "bg-surface"
                    }`}
                  >
                    <div className="p-4 md:p-5 text-body-sm text-text-primary font-medium">
                      {r.procedure}
                    </div>
                    <div className="p-4 md:p-5 text-body-sm font-mono text-text-primary text-right">
                      {r.range}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-caption text-text-muted">
                A Partial Knee Replacement (PKR) typically costs 10–20% less
                than a Total Knee Replacement (TKR).
              </p>
            </div>
          </div>
        </Section>
      ) : null}

      <Section variant="elevated" aria-labelledby="risks-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">Risks &amp; considerations</span>
            <h2
              id="risks-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              An honest view of what can go wrong.
            </h2>
            <p className="mt-4 text-body-sm text-text-secondary text-pretty">
              Risks are low in most cases but they exist. We discuss each in
              detail during consultation so you can make an informed choice.
            </p>
          </div>
          <ul className="lg:col-span-8 space-y-3">
            {t.risks.map((r, i) => (
              <li
                key={i}
                className="flex gap-3 text-body text-text-primary rounded-md bg-surface border border-border p-4"
              >
                <AlertTriangle
                  size={18}
                  className="text-warning flex-shrink-0 mt-0.5"
                />
                <span className="text-pretty">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="faq-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              Questions patients ask about this procedure.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {t.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section variant="elevated" aria-labelledby="related-heading">
          <div className="mb-10">
            <span className="eyebrow">Related treatments</span>
            <h2
              id="related-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              Conditions we often treat alongside this.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {related.map((r) => (
              <TreatmentCard
                key={r.frontmatter.slug}
                slug={r.frontmatter.slug}
                title={r.frontmatter.title}
                description={r.frontmatter.summary}
                icon={r.frontmatter.icon}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="rounded-xl bg-primary text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-h2 font-medium text-balance">
              Ready to discuss {t.frontmatter.title.toLowerCase()}?
            </h2>
            <p className="mt-3 text-white/80 text-pretty">
              Book a consultation at UTKAL Hospital or Elite Ortho Care in
              Bhubaneswar.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-md bg-accent hover:bg-accent-hover text-white px-6 py-4 font-medium shadow-lg transition-all duration-300 ease-smooth hover:-translate-y-0.5 flex-shrink-0"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
