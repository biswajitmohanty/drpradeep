import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildFAQSchema, buildMedicalProcedureSchema } from "@/lib/schema";
import { DOCTOR, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Robotic Knee & Hip Replacement in Bhubaneswar",
  description:
    "Sub-millimeter implant placement, smaller incisions, faster recovery. Dr. Pradeep Kumar Sahoo — NHS-fellowship trained in robotic-assisted joint replacement, Bhubaneswar.",
  alternates: { canonical: `${SITE.url}/robotic-surgery` },
};

const comparisons = [
  {
    attribute: "Implant placement accuracy",
    traditional: "Manual jigs — 2–3 mm typical error",
    robotic: "Sub-millimeter, image-guided",
  },
  {
    attribute: "Incision size",
    traditional: "12–18 cm",
    robotic: "8–12 cm",
  },
  {
    attribute: "Blood loss",
    traditional: "200–400 ml typical",
    robotic: "Often under 100 ml",
  },
  {
    attribute: "Hospital stay",
    traditional: "4–6 days",
    robotic: "2–4 days",
  },
  {
    attribute: "Return to walking unaided",
    traditional: "6–8 weeks",
    robotic: "3–6 weeks (varies)",
  },
  {
    attribute: "Implant longevity (evidence)",
    traditional: "15–20 years for well-placed implants",
    robotic: "Emerging 20+ year data; better placement linked to longer life",
  },
  {
    attribute: "Suitability",
    traditional: "Standard anatomy, routine cases",
    robotic: "Complex anatomy, younger patients, revision cases",
  },
];

const procedureSteps = [
  {
    step: "01",
    title: "3D Pre-operative planning",
    body: "A CT scan of your joint is used to build a 3D model. The implant size, angle, and position are planned millimeter by millimeter before you even enter the operating room.",
  },
  {
    step: "02",
    title: "Registration in theatre",
    body: "Once you are under anaesthesia, the surgical system registers your joint's real-time position and matches it to the pre-op plan. Any small anatomical variation is accounted for.",
  },
  {
    step: "03",
    title: "Robotic-guided bone preparation",
    body: "Dr. Sahoo makes every cut holding the robotic arm. The system prevents deviation from the plan — if the arm moves outside the planned boundary, it halts. The surgeon remains in control of every movement.",
  },
  {
    step: "04",
    title: "Trial and balance",
    body: "Trial implants are placed, and soft-tissue balance is checked dynamically. Adjustments — if any — are made before the final implant goes in.",
  },
  {
    step: "05",
    title: "Final implant and closure",
    body: "The final implant is secured in the precisely prepared bone. The incision is closed, often with absorbable sutures and skin glue for a neat scar.",
  },
];

const roboticFaqs = [
  {
    question: "Is robotic surgery safer than traditional surgery?",
    answer:
      "Large studies suggest robotic-assisted joint replacement has similar overall complication rates to well-done traditional surgery, with better implant positioning. Better positioning is linked to longer implant life and fewer revision surgeries over decades.",
  },
  {
    question: "Does the robot do the surgery by itself?",
    answer:
      "No. The robot is a precision tool controlled by the surgeon at every moment. It prevents movement outside the planned boundary but cannot cut, retract, or decide anything on its own. Every action is the surgeon's.",
  },
  {
    question: "How much more does robotic surgery cost?",
    answer:
      "Robotic-assisted joint replacement typically costs 20–40 percent more than traditional surgery in India, depending on the centre and implant. Most major health insurance policies cover it. The clinic team verifies your coverage and obtains pre-authorisation before scheduling.",
  },
  {
    question: "Am I a candidate for robotic knee or hip replacement?",
    answer:
      "Most patients who need a knee or hip replacement are candidates. Robotic technique is especially beneficial in younger patients, complex anatomy, severe deformity, or revision surgery. A consultation and a CT scan answer this clearly.",
  },
  {
    question: "How long does a robotic procedure take in theatre?",
    answer:
      "Robotic knee replacement typically takes 60–90 minutes — slightly longer than traditional surgery because of the setup and registration steps. The extra minutes are spent achieving greater precision.",
  },
  {
    question: "Where can I have robotic surgery in Bhubaneswar?",
    answer:
      "Consultations happen at Elite Ortho Care in Chandrasekharpur, Bhubaneswar. The procedure itself is performed at a partner hospital equipped with the surgical robotic platform — the clinic team walks you through logistics, cost, and insurance before scheduling.",
  },
];

const roboticTestimonials = [
  // PLACEHOLDER — to be replaced with real, consented patient stories
  {
    name: "Sanjay",
    age: 62,
    condition: "Severe bilateral knee arthritis",
    quote:
      "Six weeks after my robotic knee replacement, I walked to the temple with my grandchildren. The precision of the robot made a real difference to my recovery.",
  },
  {
    name: "Lalita",
    age: 67,
    condition: "Complex hip arthritis with leg length discrepancy",
    quote:
      "I was told my case was complicated because of a previous fracture. The robotic planning let Dr. Sahoo correct my leg length and restore hip motion. I no longer walk with a limp.",
  },
];

export default function RoboticSurgeryPage() {
  const procedureSchema = buildMedicalProcedureSchema({
    name: "Robotic-Assisted Knee & Hip Replacement",
    description:
      "Robotic-assisted joint replacement with sub-millimeter implant placement, performed by Dr. Pradeep Kumar Sahoo in Bhubaneswar.",
    url: `${SITE.url}/robotic-surgery`,
  });
  const faqSchema = buildFAQSchema(roboticFaqs);

  return (
    <>
      <section className="relative overflow-hidden bg-bg">
        <div
          className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary-soft/50 via-primary-soft/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-page relative pt-10 md:pt-16 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-2">
              <Sparkles size={14} />
              Robotic-assisted joint replacement
            </span>
            <h1 className="mt-4 font-display text-h1 md:text-display font-medium text-text-primary text-balance">
              Precision that traditional surgery can&apos;t match.
            </h1>
            <p className="mt-6 text-body-lg text-text-secondary text-pretty">
              Robotic-assisted joint replacement combines 3D imaging,
              patient-specific planning, and robotic guidance to place implants
              with sub-millimeter accuracy. Dr. Sahoo is among a small number
              of surgeons in Odisha formally trained in this technique through
              the NHS in the UK.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">
                Book a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link href="#compare" className="btn-secondary">
                Compare with traditional surgery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section variant="elevated" aria-labelledby="what-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">What is it?</span>
            <h2
              id="what-heading"
              className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
            >
              A precision tool — in the surgeon&apos;s hands.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary text-pretty">
              In robotic-assisted joint replacement, a CT scan is used to build
              a 3D model of your knee or hip before surgery. The implant size,
              angle, and position are planned in software, down to the
              millimeter. In theatre, a robotic arm guides Dr. Sahoo&apos;s
              cuts — preventing any movement outside the pre-planned boundary.
            </p>
            <p className="mt-4 text-body text-text-secondary text-pretty">
              The robot does not operate by itself. The surgeon is in complete
              control of every movement; the robot simply ensures the execution
              matches the plan. The result: implants placed more accurately
              than is possible by human eye or manual jig alone.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-primary/10 to-primary-soft/40">
              <Image
                src="/images/doctor/robotic-smith-nephew.jpg"
                alt={`${DOCTOR.name} with the Smith+Nephew CORI surgical robotics platform`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-3 text-caption text-text-muted text-center">
              {/* TODO: replace with a short explainer video */}
              Smith+Nephew CORI — one of the robotic platforms Dr. Sahoo uses
              at partner hospitals in Bhubaneswar.
            </p>
          </div>
        </div>
      </Section>

      <Section id="compare" aria-labelledby="compare-heading">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Comparison</span>
          <h2
            id="compare-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            Traditional vs robotic — side by side.
          </h2>
          <p className="mt-4 text-body text-text-secondary text-pretty">
            Evidence-based ranges for modern, well-performed procedures.
            Individual results vary with patient anatomy and adherence to
            recovery.
          </p>
        </div>

        <div className="rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-surface-elevated border-b border-border">
            <div className="p-4 md:p-5 text-caption uppercase tracking-[0.1em] text-text-muted font-medium">
              Attribute
            </div>
            <div className="p-4 md:p-5 text-caption uppercase tracking-[0.1em] text-text-muted font-medium">
              Traditional
            </div>
            <div className="p-4 md:p-5 text-caption uppercase tracking-[0.1em] text-primary font-medium bg-primary-soft/30">
              Robotic-assisted
            </div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.attribute}
              className={`grid grid-cols-3 border-b border-border last:border-b-0 ${
                i % 2 === 1 ? "bg-surface-elevated/40" : "bg-surface"
              }`}
            >
              <div className="p-4 md:p-5 text-body-sm font-medium text-text-primary">
                {row.attribute}
              </div>
              <div className="p-4 md:p-5 text-body-sm text-text-secondary flex gap-2 items-start">
                <X size={16} className="text-warning mt-0.5 flex-shrink-0" />
                <span>{row.traditional}</span>
              </div>
              <div className="p-4 md:p-5 text-body-sm text-text-primary bg-primary-soft/20 flex gap-2 items-start">
                <Check
                  size={16}
                  className="text-primary mt-0.5 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span>{row.robotic}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="elevated" aria-labelledby="procedure-heading">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">The procedure</span>
          <h2
            id="procedure-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            What happens, step by step.
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {procedureSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08} as="li">
              <div className="h-full rounded-lg bg-surface border border-border p-5 md:p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30">
                <span className="font-mono text-caption tracking-[0.15em] text-primary">
                  {s.step}
                </span>
                <h3 className="font-display text-h4 font-medium text-text-primary text-balance">
                  {s.title}
                </h3>
                <p className="text-body-sm text-text-secondary text-pretty">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section aria-labelledby="training-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Dr. Sahoo&apos;s training</span>
            <h2
              id="training-heading"
              className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
            >
              An NHS Fellowship in robotic joint replacement.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-body-lg text-text-secondary text-pretty">
            <p>
              After DNB Orthopaedics at Apollo Main Hospital, Chennai,{" "}
              {DOCTOR.shortName} completed a dedicated fellowship in robotic
              joint replacement surgery at the NHS, UK. This wasn&apos;t a
              weekend course — it was a structured programme of cadaveric
              training, mentored cases, and outcomes review.
            </p>
            <p>
              Combined with AO Foundation trauma training and an FIFA diploma
              in sports medicine, the breadth of his training covers the full
              spectrum of orthopaedic care — joint preservation when possible,
              precise joint replacement when needed.
            </p>
            <Link href="/about" className="link-arrow text-body-lg pt-2">
              Read full background
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      <Section variant="elevated" aria-labelledby="stories-heading">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Robotic surgery outcomes</span>
          <h2
            id="stories-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            Patients who chose precision.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {roboticTestimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-lg bg-surface border border-border p-6 md:p-8 shadow-sm"
            >
              <blockquote>
                <p className="font-display italic text-body-lg text-text-primary text-pretty leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-divider">
                <p className="text-body-sm font-medium text-text-primary">
                  {t.name}, {t.age}
                </p>
                <p className="text-caption uppercase tracking-[0.08em] text-text-muted mt-1">
                  {t.condition}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-caption text-text-muted italic">
          Testimonials reflect individual experiences. Outcomes vary.
        </p>
      </Section>

      <Section aria-labelledby="faq-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              Common questions about robotic surgery.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {roboticFaqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-xl bg-primary text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-h2 font-medium text-balance">
              Considering robotic knee or hip surgery?
            </h2>
            <p className="mt-3 text-white/80 text-pretty">
              A consultation and a CT scan will tell you whether robotic
              technique is the right choice for your specific joint.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-text-primary px-7 py-4 font-semibold shadow-lg transition-all duration-300 ease-smooth hover:-translate-y-0.5 flex-shrink-0"
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
