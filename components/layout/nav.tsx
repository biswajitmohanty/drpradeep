"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          className="flex flex-col leading-tight"
          aria-label={`${DOCTOR.name} — Home`}
        >
          <span className="font-display text-[1.05rem] md:text-lg font-semibold text-text-primary">
            {DOCTOR.name}
          </span>
          <span className="hidden sm:block text-caption text-text-muted">
            {DOCTOR.subSpecialty}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
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
          <Link href="/book" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-body-sm">
            Book Appointment
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
