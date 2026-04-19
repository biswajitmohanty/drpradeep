import { Award, Clock, MapPin, Stethoscope } from "lucide-react";
import { Section } from "@/components/shared/section";
import { StatCard } from "@/components/shared/stat-card";
import { STATS } from "@/lib/constants";
import { getGoogleReviewSummary } from "@/lib/google-reviews";

const iconsByLabel: Record<string, React.ReactNode> = {
  "Years of experience": <Clock size={20} />,
  "Successful surgeries": <Stethoscope size={20} />,
  "Patient rating": <Award size={20} />,
  "Clinic locations": <MapPin size={20} />,
};

export async function StatsBand() {
  const reviews = await getGoogleReviewSummary();

  const cards: { value: string; label: string }[] = [...STATS];
  if (reviews) {
    cards.splice(2, 0, {
      value: `${reviews.rating.toFixed(1)}\u2605`,
      label: `Google rating (${reviews.userRatingsTotal})`,
    });
  }

  const cols =
    cards.length === 4
      ? "md:grid-cols-4"
      : cards.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <Section variant="elevated" size="sm" aria-label="Key statistics">
      <div className={`grid grid-cols-2 ${cols} gap-4 md:gap-6`}>
        {cards.map((s) => (
          <StatCard
            key={s.label}
            value={s.value}
            label={s.label}
            icon={
              iconsByLabel[s.label] ??
              (s.label.startsWith("Google rating") ? (
                <Award size={20} />
              ) : undefined)
            }
          />
        ))}
      </div>
    </Section>
  );
}
