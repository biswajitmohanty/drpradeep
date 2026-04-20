import {
  Award,
  GraduationCap,
  ShieldPlus,
  Stethoscope,
  Trophy,
  type LucideIcon,
} from "lucide-react";

interface CredentialItem {
  name: string;
  role: string;
  icon: LucideIcon;
}

const items: CredentialItem[] = [
  {
    name: "Apollo Hospital, Chennai",
    role: "DNB Orthopaedics",
    icon: Stethoscope,
  },
  {
    name: "NHS, United Kingdom",
    role: "Robotic joint replacement fellow",
    icon: Award,
  },
  {
    name: "MKCG Medical College",
    role: "MBBS",
    icon: GraduationCap,
  },
  {
    name: "AO Foundation",
    role: "Trauma management",
    icon: ShieldPlus,
  },
  {
    name: "FIFA Sports Medicine",
    role: "Diploma",
    icon: Trophy,
  },
];

export function CredentialsStrip() {
  return (
    <section
      className="bg-surface-elevated border-y border-border"
      aria-labelledby="trust-heading"
    >
      <div className="container-page py-12 md:py-16">
        <div className="text-center mb-10 md:mb-12">
          <h2
            id="trust-heading"
            className="text-caption uppercase tracking-[0.16em] text-primary font-semibold"
          >
            Trained &amp; certified at
          </h2>
          <div className="mt-3 mx-auto h-0.5 w-12 rounded-full bg-accent" />
        </div>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.name}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40 min-w-[220px]"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-body-sm font-semibold text-text-primary">
                    {item.name}
                  </span>
                  <span className="text-caption text-text-muted mt-0.5 uppercase tracking-[0.06em]">
                    {item.role}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
