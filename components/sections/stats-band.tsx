import { Section } from "@/components/shared/section";
import { StatCard } from "@/components/shared/stat-card";
import { Award, Clock, Stethoscope, MapPin } from "lucide-react";
import { STATS } from "@/lib/constants";

const iconsByLabel: Record<string, React.ReactNode> = {
  "Years of experience": <Clock size={20} />,
  "Successful surgeries": <Stethoscope size={20} />,
  "Patient rating": <Award size={20} />,
  "Clinic locations": <MapPin size={20} />,
};

export function StatsBand() {
  return (
    <Section variant="elevated" size="sm" aria-label="Key statistics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((s) => (
          <StatCard
            key={s.label}
            value={s.value}
            label={s.label}
            icon={iconsByLabel[s.label]}
          />
        ))}
      </div>
    </Section>
  );
}
