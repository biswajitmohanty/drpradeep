import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  age: number;
  city?: string;
  condition: string;
  quote: string;
  surgeryType: string;
  className?: string;
}

export function TestimonialCard({
  name,
  age,
  city,
  condition,
  quote,
  surgeryType,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-5 rounded-lg bg-surface border border-border p-6 md:p-8 shadow-sm",
        className
      )}
    >
      <Quote
        size={28}
        className="text-accent"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <blockquote className="flex-1">
        <p className="font-display text-body-lg italic text-text-primary leading-relaxed text-pretty">
          “{quote}”
        </p>
      </blockquote>
      <figcaption className="border-t border-divider pt-4">
        <p className="text-body-sm font-medium text-text-primary">
          {name}, {age}
          {city ? `, ${city}` : ""}
        </p>
        <p className="text-caption uppercase tracking-[0.08em] text-text-muted mt-1">
          {condition} · {surgeryType}
        </p>
      </figcaption>
    </figure>
  );
}
