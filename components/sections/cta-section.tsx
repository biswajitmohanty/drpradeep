import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { DOCTOR, whatsappLink, telLink } from "@/lib/constants";

export function CtaSection() {
  return (
    <Section aria-labelledby="cta-heading">
      <Reveal className="relative overflow-hidden rounded-xl bg-primary text-white">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(250,204,21,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.18), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-14 items-center">
          <div>
            <h2
              id="cta-heading"
              className="font-display text-h2 md:text-h1 font-medium text-white text-balance"
            >
              Ready to move without pain?
            </h2>
            <p className="mt-4 text-body-lg text-white/80 text-pretty max-w-lg">
              Book a consultation at Elite Ortho Care in Chandrasekharpur,
              Bhubaneswar. Most patients are seen within a week — urgent cases
              sooner.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-text-primary px-7 py-4 font-semibold shadow-lg transition-all duration-300 ease-smooth hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-7 py-4 font-semibold border border-white/30 transition-all duration-300 ease-smooth"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center justify-center gap-2 rounded-md text-white/90 hover:text-white px-6 py-3 text-body-sm transition-colors"
            >
              <Phone size={16} />
              Or call the clinic — {DOCTOR.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
