import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ value, label, icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-start gap-3 overflow-hidden rounded-xl bg-surface border border-border p-6 md:p-7 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lg hover:border-primary/30",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80"
      />
      {icon ? (
        <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
          {icon}
        </span>
      ) : null}
      <p className="font-display text-[2.25rem] md:text-[2.75rem] font-semibold text-text-primary tracking-tight leading-none">
        {value}
      </p>
      <p className="text-body-sm text-text-secondary font-medium">{label}</p>
    </div>
  );
}
