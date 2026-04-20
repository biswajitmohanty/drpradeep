import { Link } from "@/i18n/navigation";
import {
  Activity,
  ArrowUpRight,
  Dumbbell,
  Microscope,
  PersonStanding,
  ShieldPlus,
  Spline,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  "person-standing": PersonStanding,
  dumbbell: Dumbbell,
  microscope: Microscope,
  "shield-plus": ShieldPlus,
  spline: Spline,
};

interface TreatmentCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function TreatmentCard({
  slug,
  title,
  description,
  icon,
  className,
}: TreatmentCardProps) {
  const Icon = iconMap[icon] ?? Activity;

  return (
    <Link
      href={`/treatments/${slug}`}
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-lg border border-border bg-surface p-6 md:p-7 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-primary hover:shadow-md",
        className
      )}
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
        aria-hidden="true"
      >
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <h3 className="text-h4 font-display font-medium text-text-primary">
        {title}
      </h3>
      <p className="text-body-sm text-text-secondary flex-1">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-primary text-body-sm font-medium">
        Learn more
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
