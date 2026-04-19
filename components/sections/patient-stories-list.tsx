"use client";

import { useMemo, useState } from "react";
import { Quote } from "lucide-react";
import {
  CATEGORY_LABELS,
  type Testimonial,
} from "@/lib/testimonials";
import { cn } from "@/lib/utils";

interface Props {
  testimonials: Testimonial[];
}

type Filter = "all" | Testimonial["category"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "knee", label: CATEGORY_LABELS.knee },
  { id: "hip", label: CATEGORY_LABELS.hip },
  { id: "sports", label: CATEGORY_LABELS.sports },
  { id: "trauma", label: CATEGORY_LABELS.trauma },
  { id: "spine", label: CATEGORY_LABELS.spine },
];

export function PatientStoriesList({ testimonials }: Props) {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (active === "all") return testimonials;
    return testimonials.filter((t) => t.category === active);
  }, [testimonials, active]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
        {FILTERS.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-4 py-2 text-body-sm font-medium border transition-all duration-300 ease-smooth",
                isActive
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-surface border-border text-text-secondary hover:border-primary hover:text-primary"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-body text-text-muted">
          No stories in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col gap-4 rounded-lg bg-surface border border-border p-6 md:p-7 shadow-sm"
            >
              <Quote
                size={24}
                className="text-accent"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <blockquote className="flex-1">
                <p className="font-display italic text-body text-text-primary leading-relaxed text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="pt-4 border-t border-divider">
                <p className="text-body-sm font-medium text-text-primary">
                  {t.name}, {t.age} · {t.city}
                </p>
                <p className="text-caption uppercase tracking-[0.08em] text-text-muted mt-1">
                  {t.condition} · {t.procedure}
                </p>
                <p className="mt-2 text-caption text-primary font-medium">
                  {t.summary}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </>
  );
}
