"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const [pulsed, setPulsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 300;
      setVisible(show);
      if (show && !pulsed) setPulsed(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pulsed]);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "fixed z-30 bottom-5 right-5 md:bottom-8 md:right-8 flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white pl-4 pr-5 py-3 shadow-lg transition-all duration-500 ease-smooth",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
        pulsed && "animate-pulse-soft"
      )}
    >
      <MessageCircle size={22} strokeWidth={2} />
      <span className="text-body-sm font-medium hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
