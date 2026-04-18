"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, DOCTOR, whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-text-primary hover:bg-surface-elevated transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 z-30 bg-bg transition-all duration-300 ease-smooth",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="container-page flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-4 px-3 text-body-lg rounded-md border-b border-divider transition-colors",
                  active ? "text-primary font-medium" : "text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-6 flex flex-col gap-3">
            <Link href="/book" className="btn-primary w-full">
              Book Appointment
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${DOCTOR.phone.replace(/[^+\d]/g, "")}`}
              className="btn-ghost w-full"
            >
              Call the clinic
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
