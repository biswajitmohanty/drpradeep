import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Activity, Clock3 } from "lucide-react";
import { Section } from "@/components/shared/section";

const highlights = [
  {
    icon: <Target size={18} />,
    label: "Sub-millimeter implant accuracy",
  },
  {
    icon: <Activity size={18} />,
    label: "Smaller incisions, less blood loss",
  },
  {
    icon: <Clock3 size={18} />,
    label: "Faster recovery, longer-lasting implants",
  },
];

export function RoboticShowcase() {
  return (
    <Section aria-labelledby="robotic-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">Robotic surgery</span>
          <h2
            id="robotic-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            Why robotic-assisted surgery changes the outcome.
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            Robotic-assisted joint replacement uses real-time imaging and
            surgical guidance to place implants with sub-millimeter accuracy.
            The result: smaller incisions, less blood loss, faster recovery,
            and implants that last longer because they fit better. Dr. Sahoo is
            among a small number of surgeons in Odisha trained specifically in
            this technique through the NHS in the UK.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-start gap-3 text-body text-text-primary"
              >
                <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-primary flex-shrink-0">
                  {h.icon}
                </span>
                {h.label}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/robotic-surgery" className="link-arrow text-body-lg">
              Learn how robotic surgery works
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-primary/10 to-primary-soft/40">
            <Image
              src="/images/treatments/robotic-surgery.svg"
              alt="Illustration of robotic-assisted joint replacement surgery"
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-caption text-text-muted text-center">
            Illustrative. Dr. Sahoo performs robotic-assisted procedures at
            equipped partner hospitals in Bhubaneswar.
          </p>
        </div>
      </div>
    </Section>
  );
}
