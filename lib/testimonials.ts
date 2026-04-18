import data from "@/content/testimonials/testimonials.json";

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  condition: string;
  procedure: string;
  category: "knee" | "hip" | "sports" | "trauma" | "spine";
  quote: string;
  summary: string;
  featured: boolean;
}

export function getTestimonials(): Testimonial[] {
  return data.testimonials as Testimonial[];
}

export function getFeaturedTestimonials(): Testimonial[] {
  return getTestimonials().filter((t) => t.featured);
}

export const CATEGORY_LABELS: Record<Testimonial["category"], string> = {
  knee: "Knee",
  hip: "Hip",
  sports: "Sports injury",
  trauma: "Trauma",
  spine: "Spine & joint pain",
};
