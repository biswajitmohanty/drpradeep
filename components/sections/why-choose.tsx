import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { GraduationCap, Stethoscope, MapPinned, HeartHandshake } from "lucide-react";

const differentiators = [
  {
    icon: GraduationCap,
    title: "NHS-trained in robotic surgery",
    body: "One of few surgeons in Odisha with a formal fellowship in robotic joint replacement from the NHS, UK.",
  },
  {
    icon: Stethoscope,
    title: "Apollo-trained orthopaedic specialist",
    body: "DNB Orthopaedics from Apollo Main Hospital, Chennai — rigorous training in complex cases.",
  },
  {
    icon: MapPinned,
    title: "Accessible, flexible clinic hours",
    body: "Elite Ortho Care in Chandrasekharpur, Bhubaneswar — open Mon through Sat, 9 AM to 10 PM.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-first approach",
    body: "Honest conversations about whether surgery is needed. Conservative options always explored first.",
  },
];

export function WhyChoose() {
  return (
    <Section variant="primary-soft" aria-labelledby="why-heading">
      <Reveal className="max-w-2xl mb-10 md:mb-14">
        <span className="eyebrow">Why Dr. Sahoo</span>
        <h2
          id="why-heading"
          className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
        >
          Experience you can verify, judgment you can trust.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {differentiators.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal
              key={d.title}
              delay={i * 0.08}
              className="flex h-full gap-5 rounded-lg bg-surface border border-border p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary text-white">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-h4 font-medium text-text-primary">
                  {d.title}
                </h3>
                <p className="mt-2 text-body-sm text-text-secondary text-pretty">
                  {d.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
