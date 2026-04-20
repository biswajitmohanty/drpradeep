import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Hospital, Languages, Award } from "lucide-react";
import { Section } from "@/components/shared/section";
import {
  CLINICS,
  DOCTOR,
  EDUCATION,
  PAST_AFFILIATIONS,
  SITE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dr. Pradeep Kumar Sahoo",
  description:
    "Orthopaedic surgeon in Bhubaneswar. DNB from Apollo Chennai, NHS Fellowship in Robotic Joint Replacement, 11+ years of experience. Practicing at Elite Ortho Care, Chandrasekharpur.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Section size="lg" aria-labelledby="about-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">About Dr. Sahoo</span>
            <h1
              id="about-heading"
              className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
            >
              Restoring movement, restoring life.
            </h1>
            <p className="mt-6 text-body-lg text-text-secondary text-pretty">
              {DOCTOR.name} is an orthopaedic surgeon specialising in robotic
              knee and hip replacement in Bhubaneswar. Over{" "}
              {DOCTOR.experienceYears} years of practice have taken him from
              Apollo Chennai to an NHS fellowship in the UK — and home to
              Odisha, where his patients now see him at Elite Ortho Care in
              Chandrasekharpur, Bhubaneswar.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent-soft/40 border border-border shadow-lg">
              <Image
                src="/images/doctor/robotic-smith-nephew.jpg"
                alt={`${DOCTOR.name} with the Smith+Nephew robotic surgery platform`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="elevated" aria-labelledby="philosophy-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">Philosophy</span>
            <h2
              id="philosophy-heading"
              className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
            >
              Surgery is one tool. It should rarely be the first.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-body-lg text-text-secondary text-pretty">
            <p>
              Most orthopaedic problems — even many that look severe on an
              X-ray — respond to focused non-surgical care: physiotherapy that
              is specific to your diagnosis, sensible pain control, small
              changes in how you move and load your joints. Patients who come
              looking for surgery often leave with a plan that doesn&apos;t
              include it.
            </p>
            <p>
              When surgery is the right answer, it deserves to be done with
              precision. Robotic-assisted joint replacement, when the implant
              is placed to sub-millimeter accuracy, wears better and lasts
              longer — backed by a growing body of evidence. That precision
              matters most when the patient is young and expecting decades of
              use from the implant.
            </p>
            <p>
              Ultimately, this is a relationship. Orthopaedic care runs from
              the first consultation to months of recovery. I try to spend
              enough time on the first visit that you understand what&apos;s
              wrong, what the options are, and what you should expect. The rest
              of the journey is easier when you start with clarity.
            </p>
            <p className="text-body-sm text-text-muted">— {DOCTOR.name}</p>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="team-heading" size="sm">
        <div className="max-w-2xl mb-8">
          <span className="eyebrow">The team</span>
          <h2
            id="team-heading"
            className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
          >
            Expert hands. One team. One goal — your recovery.
          </h2>
        </div>
        <div className="relative w-full aspect-[2400/637] rounded-xl overflow-hidden border border-border shadow-md bg-surface-elevated">
          <Image
            src="/images/doctor/ot-team.jpg"
            alt={`${DOCTOR.name} with the operating-theatre team in Bhubaneswar`}
            fill
            sizes="(min-width: 1024px) 100vw, 100vw"
            className="object-contain"
          />
        </div>
        <p className="mt-3 text-caption text-text-muted text-center">
          A joint replacement is never one surgeon&apos;s work. Dr. Sahoo
          operates with a consistent team — anaesthetists, OT technicians,
          and scrub nurses — trained specifically in robotic-assisted
          protocols.
        </p>
      </Section>

      <Section aria-labelledby="education-heading">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow inline-flex items-center gap-2">
            <GraduationCap size={14} />
            Education
          </span>
          <h2
            id="education-heading"
            className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
          >
            Training from Apollo Chennai to the NHS, UK.
          </h2>
        </div>
        <ol className="relative border-l-2 border-primary/20 pl-6 space-y-8 max-w-3xl">
          {EDUCATION.map((e, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-surface"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <p className="font-display text-h4 font-medium text-text-primary">
                {e.degree}
              </p>
              <p className="mt-1 text-body text-text-secondary">
                {e.institution}
                {"location" in e && e.location ? ` · ${e.location}` : ""}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="elevated" aria-labelledby="affiliations-heading">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow inline-flex items-center gap-2">
            <Hospital size={14} />
            Hospital affiliations
          </span>
          <h2
            id="affiliations-heading"
            className="mt-3 font-display text-h2 font-medium text-text-primary text-balance"
          >
            Where Dr. Sahoo practices.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {CLINICS.map((c) => (
            <div
              key={c.id}
              className="rounded-lg bg-surface border border-border p-6 md:p-7"
            >
              <p className="eyebrow">Current</p>
              <h3 className="mt-2 font-display text-h3 font-medium text-text-primary">
                {c.name}
              </h3>
              <p className="mt-2 text-body text-text-secondary">{c.role}</p>
              <p className="mt-4 text-body-sm text-text-muted">
                {c.city}, {c.state} · {c.hours}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="eyebrow">Previously at</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {PAST_AFFILIATIONS.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-surface px-4 py-2 text-body-sm text-text-secondary"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="memberships-heading">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Award size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 font-display text-h4 font-medium text-text-primary">
              Certifications
            </h3>
            <ul className="mt-3 space-y-1.5 text-body-sm text-text-secondary">
              <li>AO Foundation Trauma (Basic)</li>
              <li>FIFA Diploma in Sports Medicine</li>
              <li>Robotic Joint Replacement Fellowship (NHS, UK)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Hospital size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 font-display text-h4 font-medium text-text-primary">
              Memberships
            </h3>
            <ul className="mt-3 space-y-1.5 text-body-sm text-text-secondary">
              <li>Indian Orthopaedic Association</li>
              <li>Odisha Orthopaedic Association</li>
              <li>National Board of Examinations (DNB)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Languages size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 font-display text-h4 font-medium text-text-primary">
              Languages
            </h3>
            <ul className="mt-3 space-y-1.5 text-body-sm text-text-secondary">
              {DOCTOR.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-xl bg-primary text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-h2 font-medium text-balance">
              Book a consultation with {DOCTOR.shortName}.
            </h2>
            <p className="mt-3 text-white/80 text-pretty">
              Honest assessment, conservative options first, surgery only when
              it&apos;s the right answer.
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
    </>
  );
}
