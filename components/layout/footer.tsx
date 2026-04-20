import Image from "next/image";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  CLINICS,
  DOCTOR,
  whatsappLink,
  telLink,
} from "@/lib/constants";

export async function Footer() {
  const year = new Date().getFullYear();
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");

  const EXPLORE: { href: string; label: string }[] = [
    { href: "/about", label: tn("about") },
    { href: "/treatments", label: tn("treatments") },
    { href: "/robotic-surgery", label: tn("roboticSurgery") },
    { href: "/patient-stories", label: tn("patientStories") },
    { href: "/contact", label: tn("contact") },
    { href: "/book", label: tn("bookAppointment") },
  ];

  return (
    <footer className="bg-surface-elevated border-t border-border mt-16 md:mt-24">
      <div className="container-page py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Image
              src="/images/brand/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 mb-4"
            />
            <h3 className="font-display text-h3 text-text-primary leading-tight">
              {DOCTOR.name}
            </h3>
            <p className="mt-2 text-body-sm text-text-secondary">
              {DOCTOR.specialty}
              <br />
              {DOCTOR.subSpecialty}
            </p>
            <p className="mt-4 text-body-sm text-text-muted">
              {DOCTOR.experienceYears}+ years · Apollo Chennai & NHS UK trained
            </p>
          </div>

          <div>
            <h4 className="text-caption uppercase tracking-[0.12em] text-text-muted font-medium mb-4">
              {t("explore")}
            </h4>
            <ul className="space-y-3">
              {EXPLORE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-caption uppercase tracking-[0.12em] text-text-muted font-medium mb-4">
              {t("clinic")}
            </h4>
            <ul className="space-y-4">
              {CLINICS.map((c) => (
                <li key={c.id}>
                  <p className="text-body-sm font-medium text-text-primary">
                    {c.name}
                  </p>
                  <p className="text-body-sm text-text-muted flex items-start gap-1.5 mt-1">
                    <MapPin size={14} className="mt-1 flex-shrink-0" />
                    <span>
                      {c.city}, {c.state}
                    </span>
                  </p>
                  <p className="text-caption text-text-muted mt-1 pl-5">
                    {c.hours}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-caption uppercase tracking-[0.12em] text-text-muted font-medium mb-4">
              {t("getInTouch")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={telLink()}
                  className="flex items-center gap-2 text-body-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  {DOCTOR.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-body-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DOCTOR.email}`}
                  className="flex items-center gap-2 text-body-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  {DOCTOR.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-caption text-text-muted">
            {t("copyright", { year, name: DOCTOR.name })}
          </p>
          <p className="text-caption text-text-muted max-w-xl md:text-right">
            {t("disclaimer", { shortName: DOCTOR.shortName })}
          </p>
        </div>
      </div>
    </footer>
  );
}
