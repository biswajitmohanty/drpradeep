import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Section } from "@/components/shared/section";
import { DOCTOR, STATS } from "@/lib/constants";

export function AboutPreview() {
  const experience = STATS.find((s) => s.label === "Years of experience");
  const surgeries = STATS.find((s) => s.label === "Successful surgeries");

  return (
    <Section variant="default" aria-labelledby="about-preview-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative mx-auto max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-yellow-soft">
            <div
              aria-hidden="true"
              className="absolute inset-6 bg-brand-yellow"
              style={{
                borderRadius: "48% 52% 50% 50% / 60% 50% 50% 40%",
              }}
            />
            <Image
              src="/images/doctor/robotic-velys.jpg"
              alt={`${DOCTOR.name}`}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="relative z-10 object-cover object-top"
            />
          </div>

          <div className="absolute top-6 -left-2 md:-left-6 z-20 rounded-2xl bg-surface px-4 py-3 shadow-[0_12px_32px_rgba(17,24,39,0.1)] border border-border">
            <div className="flex items-center gap-1 text-brand-yellow">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-brand-yellow text-brand-yellow"
                  strokeWidth={0}
                />
              ))}
            </div>
            <div className="mt-1 text-caption text-text-muted">
              Trusted by patients
            </div>
          </div>

          <div className="absolute bottom-6 -right-2 md:-right-6 z-20 flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-[0_12px_32px_rgba(17,24,39,0.1)] border border-border">
            <div className="font-display text-[2rem] leading-none font-semibold text-brand-purple">
              {experience?.value ?? `${DOCTOR.experienceYears}+`}
            </div>
            <div className="text-caption text-text-muted leading-tight">
              Years of
              <br />
              experience
            </div>
          </div>

          <div className="absolute -bottom-4 left-10 z-20 hidden md:flex items-center gap-2 rounded-full bg-surface px-4 py-2 shadow-[0_12px_32px_rgba(17,24,39,0.1)] border border-border">
            <span className="text-caption font-semibold text-brand-purple">
              {surgeries?.value ?? "1500+"}
            </span>
            <span className="text-caption text-text-muted">
              {surgeries?.label ?? "surgeries"}
            </span>
          </div>
        </div>

        <div>
          <h2
            id="about-preview-heading"
            className="flex items-center gap-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            {DOCTOR.name}
            <span aria-hidden="true" className="text-[1.5em] leading-none">
              👋
            </span>
          </h2>
          <p className="mt-2 font-script text-[1.75rem] leading-tight text-brand-purple">
            restoring movement, one patient at a time.
          </p>

          <div className="mt-6 space-y-5 text-body-lg text-text-secondary text-pretty leading-relaxed">
            <p>
              Dr. Sahoo is an orthopaedic surgeon specialising in robotic knee
              and hip replacement. Over {DOCTOR.experienceYears} years of
              practice have taken him from Apollo Chennai to an NHS fellowship
              in the UK — and home to Odisha, where his patients now see him at
              Elite Ortho Care in Chandrasekharpur, Bhubaneswar.
            </p>
            <p>
              Every patient gets a treatment plan built around their life, not
              a textbook. Conservative options come first — surgery only when
              it&apos;s the right answer.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-purple px-7 py-3.5 text-body-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition-all duration-300 ease-smooth hover:bg-brand-purple-dark hover:-translate-y-0.5"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
