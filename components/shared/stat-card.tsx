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
        "flex flex-col items-start gap-2 rounded-lg bg-surface border border-border p-6 md:p-7 transition-all duration-300 ease-smooth hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {icon ? (
        <span className="text-primary mb-1 flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft">
          {icon}
        </span>
      ) : null}
      <p className="font-mono text-h2 md:text-h1 font-medium text-text-primary tracking-tight">
        {value}
      </p>
      <p className="text-body-sm text-text-secondary">{label}</p>
    </div>
  );
}
