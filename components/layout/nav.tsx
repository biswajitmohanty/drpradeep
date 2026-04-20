"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { DOCTOR, TREATMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("nav");

  const NAV: { href: string; label: string }[] = [
    { href: "/about", label: t("about") },
    { href: "/treatments", label: t("treatments") },
    { href: "/robotic-surgery", label: t("roboticSurgery") },
    { href: "/patient-stories", label: t("patientStories") },
    { href: "/contact", label: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setTreatmentsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setTreatmentsOpen(false);
      }
    };
    if (treatmentsOpen) {
      document.addEventListener("mousedown", onClick);
      return () => document.removeEventListener("mousedown", onClick);
    }
  }, [treatmentsOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 ease-smooth",
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-bg border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 leading-tight"
          aria-label={`${DOCTOR.name} — ${t("home")}`}
        >
          <Image
            src="/images/brand/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9 md:h-10 md:w-10 flex-shrink-0"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.05rem] md:text-lg font-semibold text-text-primary">
              {DOCTOR.name}
            </span>
            <span className="hidden sm:block text-caption text-text-muted">
              {DOCTOR.subSpecialty}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {NAV.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            if (link.href === "/treatments") {
              return (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setTreatmentsOpen(true)}
                  onMouseLeave={() => setTreatmentsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setTreatmentsOpen((v) => !v)}
                    className={cn(
                      "inline-flex items-center gap-1 text-body-sm font-medium transition-colors duration-300",
                      active
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                    aria-expanded={treatmentsOpen}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300",
                        treatmentsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    role="menu"
                    className={cn(
                      "absolute left-0 top-full pt-3 w-72 transition-all duration-300 ease-smooth",
                      treatmentsOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                  >
                    <div className="rounded-lg bg-surface border border-border shadow-lg p-2">
                      <Link
                        href="/treatments"
                        role="menuitem"
                        className="block px-3 py-2 rounded-md text-body-sm font-medium text-text-primary hover:bg-primary-soft transition-colors"
                      >
                        {t("allTreatments")} →
                      </Link>
                      <div className="my-1 border-t border-divider" />
                      {TREATMENTS.map((tr) => (
                        <Link
                          key={tr.slug}
                          href={`/treatments/${tr.slug}`}
                          role="menuitem"
                          className="block px-3 py-2 rounded-md text-body-sm text-text-secondary hover:bg-primary-soft hover:text-text-primary transition-colors"
                        >
                          {tr.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-body-sm font-medium transition-colors duration-300",
                  active
                    ? "text-primary"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/book"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-body-sm"
          >
            {t("bookAppointment")}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
