import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/shared/section";
import { BookingForm } from "@/components/sections/booking-form";
import { CLINICS, DOCTOR, SITE, telLink, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book an appointment with Dr. Pradeep Kumar Sahoo at UTKAL Hospital or Elite Ortho Care in Bhubaneswar. Orthopaedic consultation for knee, hip, sports injury, and trauma care.",
  alternates: { canonical: `${SITE.url}/book` },
};

export default function BookPage() {
  return (
    <>
      <Section size="lg" aria-labelledby="book-heading">
        <div className="max-w-3xl">
          <span className="eyebrow">Book appointment</span>
          <h1
            id="book-heading"
            className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
          >
            Request a consultation.
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            Share a few details and the clinic team will call or message you
            within one working day to confirm your appointment. For urgent
            trauma cases, please call or send a WhatsApp message directly.
          </p>
        </div>
      </Section>

      <Section variant="elevated">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-surface border border-border p-6 md:p-8 shadow-sm">
              <BookingForm />
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6" aria-label="Clinic information">
            <div className="rounded-xl bg-surface border border-border p-6 md:p-8">
              <h2 className="font-display text-h3 font-medium text-text-primary">
                Reach us directly
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-body text-text-primary group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <MessageCircle size={18} />
                    </span>
                    <span>
                      <span className="block font-medium">WhatsApp</span>
                      <span className="block text-body-sm text-text-secondary">
                        Fastest way to reach the clinic
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={telLink()}
                    className="flex items-start gap-3 text-body text-text-primary group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </span>
                    <span>
                      <span className="block font-medium">{DOCTOR.phone}</span>
                      <span className="block text-body-sm text-text-secondary">
                        Clinic reception
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-surface border border-border p-6 md:p-8">
              <h2 className="font-display text-h3 font-medium text-text-primary">
                Clinic locations
              </h2>
              <ul className="mt-5 space-y-6">
                {CLINICS.map((c) => (
                  <li key={c.id}>
                    <p className="font-display text-h4 font-medium text-text-primary">
                      {c.name}
                    </p>
                    <p className="mt-1 text-body-sm text-text-secondary">
                      {c.role}
                    </p>
                    <p className="mt-3 flex items-start gap-2 text-body-sm text-text-muted">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{c.address}</span>
                    </p>
                    <p className="mt-2 flex items-start gap-2 text-body-sm text-text-muted">
                      <Clock size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{c.hours}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
