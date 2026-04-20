import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import {
  CLINICS,
  DOCTOR,
  SITE,
  telLink,
  whatsappLink,
} from "@/lib/constants";
import { getGoogleReviewSummary } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Contact — Clinic Locations & Timings",
  description:
    "Contact Dr. Pradeep Kumar Sahoo at Elite Ortho Care, Chandrasekharpur, Bhubaneswar. Clinic address, OPD timings, phone, WhatsApp, and directions.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default async function ContactPage() {
  const reviews = await getGoogleReviewSummary();

  return (
    <>
      <Section size="lg" aria-labelledby="contact-heading">
        <div className="max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1
            id="contact-heading"
            className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
          >
            Visit us in Chandrasekharpur.
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            The fastest way to reach us is WhatsApp — replies are usually
            within an hour during working days. For appointment booking, use
            the form on the Book page. For orthopaedic emergencies, please
            call the clinic immediately or head to your nearest multi-specialty
            hospital&apos;s emergency department.
          </p>
        </div>
      </Section>

      <Section variant="elevated">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {CLINICS.map((c) => {
            const googleProfileUrl =
              "googleProfileUrl" in c ? c.googleProfileUrl : undefined;
            const mapsUrl =
              googleProfileUrl ??
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                c.mapQuery
              )}`;
            return (
              <div
                key={c.id}
                className="rounded-xl bg-surface border border-border p-6 md:p-8 flex flex-col"
              >
                <p className="eyebrow">Clinic</p>
                <h2 className="mt-2 font-display text-h3 font-medium text-text-primary">
                  {c.name}
                </h2>
                <p className="mt-2 text-body text-text-secondary">{c.role}</p>

                <ul className="mt-6 space-y-3 text-body-sm">
                  <li className="flex items-start gap-2 text-text-secondary">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span>{c.address}</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary">
                    <Clock size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span>{c.hours}</span>
                  </li>
                </ul>

                <div className="mt-6 aspect-video rounded-md overflow-hidden border border-border bg-surface-elevated">
                  {/* Lazy-loaded Google Maps embed — no API key needed for place search */}
                  <iframe
                    title={`Map of ${c.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      c.mapQuery
                    )}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-5">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-body-sm"
                  >
                    Get directions
                    <ArrowRight size={14} />
                  </a>
                  {googleProfileUrl ? (
                    <a
                      href={googleProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary hover:underline"
                    >
                      <Star size={14} className="fill-accent text-accent" />
                      {reviews
                        ? `${reviews.rating.toFixed(1)} (${reviews.userRatingsTotal} Google reviews)`
                        : "Read Google reviews"}
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section aria-labelledby="contact-methods">
        <h2
          id="contact-methods"
          className="sr-only"
        >
          Contact methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-surface border border-border p-6 hover:border-primary hover:shadow-md transition-all duration-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#25D366] text-white">
              <MessageCircle size={22} />
            </span>
            <h3 className="mt-4 font-display text-h4 font-medium text-text-primary">
              WhatsApp
            </h3>
            <p className="mt-2 text-body-sm text-text-secondary">
              Fastest response — usually within an hour on working days.
            </p>
            <p className="mt-3 text-body-sm text-primary font-medium">
              Send a message →
            </p>
          </a>

          <a
            href={telLink()}
            className="rounded-lg bg-surface border border-border p-6 hover:border-primary hover:shadow-md transition-all duration-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Phone size={22} />
            </span>
            <h3 className="mt-4 font-display text-h4 font-medium text-text-primary">
              Call the clinic
            </h3>
            <p className="mt-2 text-body-sm text-text-secondary">
              Speak with the reception team during OPD hours.
            </p>
            <p className="mt-3 text-body-sm text-primary font-medium">
              {DOCTOR.phone}
            </p>
          </a>

          <a
            href={`mailto:${DOCTOR.email}`}
            className="rounded-lg bg-surface border border-border p-6 hover:border-primary hover:shadow-md transition-all duration-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Mail size={22} />
            </span>
            <h3 className="mt-4 font-display text-h4 font-medium text-text-primary">
              Email
            </h3>
            <p className="mt-2 text-body-sm text-text-secondary">
              For non-urgent questions, imaging, or admin.
            </p>
            <p className="mt-3 text-body-sm text-primary font-medium">
              {DOCTOR.email}
            </p>
          </a>
        </div>
      </Section>

      <Section variant="elevated" aria-labelledby="emergency-heading">
        <div className="rounded-xl border border-warning/30 bg-warning/5 p-6 md:p-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div className="flex gap-4">
            <AlertTriangle
              size={28}
              className="text-warning flex-shrink-0 mt-1"
            />
            <div>
              <h2
                id="emergency-heading"
                className="font-display text-h3 font-medium text-text-primary"
              >
                Orthopaedic emergency?
              </h2>
              <p className="mt-2 text-body text-text-secondary text-pretty max-w-xl">
                For fractures, dislocations, and major injuries outside OPD
                hours, go directly to the nearest multi-specialty hospital
                with 24×7 orthopaedic emergency cover. For life-threatening
                emergencies, call the national emergency number.
              </p>
            </div>
          </div>
          <Link href="/treatments/trauma-care" className="btn-secondary flex-shrink-0">
            Trauma care details
          </Link>
        </div>
      </Section>
    </>
  );
}
