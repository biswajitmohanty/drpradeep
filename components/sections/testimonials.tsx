import { Section } from "@/components/shared/section";
import { TestimonialCard } from "@/components/shared/testimonial-card";

// PLACEHOLDER testimonials — to be replaced with real, consented patient stories.
const featured = [
  {
    name: "Sanjay",
    age: 62,
    city: "Bhubaneswar",
    condition: "Severe knee arthritis",
    surgeryType: "Robotic total knee replacement",
    quote:
      "I couldn't climb stairs without stopping halfway. Six weeks after my robotic knee replacement with Dr. Sahoo, I walked to the temple with my grandchildren. The precision of the robot made a real difference to my recovery.",
  },
  {
    name: "Mamata",
    age: 58,
    city: "Cuttack",
    condition: "Hip osteoarthritis",
    surgeryType: "Hip replacement",
    quote:
      "Dr. Sahoo spent forty minutes explaining my options before ever mentioning surgery. When I finally had the hip replacement, he kept my family informed through every step. I am walking pain-free after twenty years.",
  },
  {
    name: "Rakesh",
    age: 34,
    city: "Bhubaneswar",
    condition: "ACL tear (football injury)",
    surgeryType: "Arthroscopic ACL reconstruction",
    quote:
      "As a weekend footballer, I thought my playing days were over. Dr. Sahoo's arthroscopic reconstruction and a structured recovery plan had me back on the pitch in five months. Honest, patient, skilled.",
  },
];

export function Testimonials() {
  return (
    <Section aria-labelledby="testimonials-heading">
      <div className="max-w-2xl mb-10 md:mb-14">
        <span className="eyebrow">Patient stories</span>
        <h2
          id="testimonials-heading"
          className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
        >
          Real recoveries, in their own words.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featured.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>

      <p className="mt-8 text-caption text-text-muted italic">
        Testimonials reflect individual patient experiences. Outcomes vary based
        on condition, health, and adherence to post-operative care.
      </p>
    </Section>
  );
}
