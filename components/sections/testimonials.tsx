import { Star } from "lucide-react";
import { Section } from "@/components/shared/section";

interface FeaturedTestimonial {
  name: string;
  age: number;
  city: string;
  procedure: string;
  quote: string;
  rating: number;
  initialBg: string;
}

// PLACEHOLDER testimonials — to be replaced with real, consented patient stories.
const featured: FeaturedTestimonial[] = [
  {
    name: "Sanjay Mohanty",
    age: 62,
    city: "Bhubaneswar",
    procedure: "Robotic total knee replacement",
    quote:
      "I couldn't climb stairs without stopping halfway. Six weeks after my robotic knee replacement, I walked to the temple with my grandchildren.",
    rating: 5,
    initialBg: "#EDE9FE",
  },
  {
    name: "Mamata Patra",
    age: 58,
    city: "Cuttack",
    procedure: "Hip replacement",
    quote:
      "Dr. Sahoo spent forty minutes explaining my options before ever mentioning surgery. I am walking pain-free after twenty years.",
    rating: 5,
    initialBg: "#FEF3C7",
  },
  {
    name: "Rakesh Jena",
    age: 34,
    city: "Bhubaneswar",
    procedure: "Arthroscopic ACL reconstruction",
    quote:
      "As a weekend footballer, I thought my playing days were over. Dr. Sahoo's reconstruction had me back on the pitch in five months.",
    rating: 5,
    initialBg: "#DBEAFE",
  },
  {
    name: "Lalita Sahu",
    age: 67,
    city: "Bhubaneswar",
    procedure: "Robotic hip replacement",
    quote:
      "The robotic planning let Dr. Sahoo correct my leg length and restore hip motion. I no longer walk with a limp.",
    rating: 5,
    initialBg: "#FCE7F3",
  },
];

export function Testimonials() {
  return (
    <Section variant="default" aria-labelledby="testimonials-heading">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-purple-soft px-4 py-1.5 text-caption font-semibold text-brand-purple-dark">
          Patient Stories
        </span>
        <h2
          id="testimonials-heading"
          className="mt-5 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance leading-tight"
        >
          What our great patients say{" "}
          <span className="font-script text-brand-purple block mt-1 text-[1.1em]">
            about Dr. Sahoo
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        {featured.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl bg-surface border border-border p-6 md:p-7 shadow-[0_2px_8px_rgba(17,24,39,0.04)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.1)] hover:border-brand-purple/30 transition-all duration-300 ease-smooth"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-display text-body-sm font-semibold text-brand-purple-dark"
                  style={{ background: t.initialBg }}
                >
                  {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <div className="text-body-sm font-semibold text-text-primary">
                    {t.name}
                  </div>
                  <div className="text-caption text-text-muted">
                    Age {t.age} · {t.city}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-brand-yellow flex-shrink-0">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-brand-yellow text-brand-yellow"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>
            <blockquote className="flex-1">
              <p className="text-body text-text-secondary leading-relaxed text-pretty">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="pt-3 border-t border-divider">
              <p className="text-caption text-brand-purple font-semibold uppercase tracking-[0.06em]">
                {t.procedure}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-center text-caption text-text-muted italic">
        Testimonials reflect individual patient experiences. Outcomes vary based
        on condition, health, and adherence to post-operative care.
      </p>
    </Section>
  );
}
