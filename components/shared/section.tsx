import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Variant = "default" | "surface" | "primary-soft" | "elevated";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  size?: "default" | "lg" | "sm";
  as?: "section" | "div";
}

const variantMap: Record<Variant, string> = {
  default: "bg-bg",
  surface: "bg-surface",
  "primary-soft": "bg-primary-soft/40",
  elevated: "bg-surface-elevated",
};

const sizeMap = {
  sm: "py-10 md:py-14",
  default: "py-14 md:py-20",
  lg: "py-16 md:py-28",
};

export function Section({
  variant = "default",
  size = "default",
  as: Tag = "section",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag className={cn(variantMap[variant], sizeMap[size], className)} {...rest}>
      <div className="container-page">{children}</div>
    </Tag>
  );
}
