import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { DOCTOR } from "@/lib/constants";

export function AboutPreview() {
  return (
    <Section aria-labelledby="about-preview-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="eyebrow">About</span>
          <h2
            id="about-preview-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            A decade of restoring movement in Bhubaneswar.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <blockquote className="space-y-5">
            <p className="font-display italic text-body-lg text-text-secondary text-pretty leading-relaxed">
              Knee or hip pain doesn&apos;t just slow you down — it changes how
              you live. For over a decade, I&apos;ve helped patients in
              Bhubaneswar return to walking, working, and playing without pain.
              My approach combines the precision of robotic-assisted surgery
              with the human judgment that only comes from years at Apollo
              Chennai and an NHS fellowship in the UK. Every patient gets a
              treatment plan built around their life, not a textbook.
            </p>
            <footer className="text-body-sm text-text-muted">
              — {DOCTOR.name}
            </footer>
          </blockquote>
          <Link href="/about" className="link-arrow mt-8">
            Read the full story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
