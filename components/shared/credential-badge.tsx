import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

interface CredentialBadgeProps {
  institution: string;
  qualification: string;
  year?: string;
  logoSrc?: string;
  className?: string;
}

export function CredentialBadge({
  institution,
  qualification,
  year,
  logoSrc,
  className,
}: CredentialBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-surface/95 backdrop-blur-sm p-3 shadow-md",
        className
      )}
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt={institution}
            className="h-10 w-10 object-contain"
          />
        ) : (
          <Award size={22} />
        )}
      </div>
      <div className="min-w-0">
        <p className="text-caption uppercase tracking-[0.08em] text-text-muted font-medium leading-tight">
          {qualification}
        </p>
        <p className="text-body-sm text-text-primary font-medium leading-snug truncate">
          {institution}
        </p>
        {year ? (
          <p className="text-caption text-text-muted">{year}</p>
        ) : null}
      </div>
    </div>
  );
}
