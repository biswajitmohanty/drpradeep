import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,14}$/, "Please enter a valid phone number")
    .max(16),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(120)
    .optional()
    .or(z.literal("")),
  condition: z.enum(
    [
      "knee-pain",
      "hip-pain",
      "sports-injury",
      "trauma",
      "spine-joint",
      "other",
    ],
    { message: "Please select what you'd like to discuss" }
  ),
  // Single-clinic practice — always "elite". The booking form supplies this
  // via a hidden input; retaining the enum lets a future second clinic extend
  // the allowed values without reshaping the database.
  clinic: z.enum(["elite"]),
  preferredDate: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(600).optional().or(z.literal("")),
  // Honeypot — must stay empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export type BookingPayload = z.infer<typeof bookingSchema>;

export const CONDITION_OPTIONS: { value: BookingPayload["condition"]; label: string }[] = [
  { value: "knee-pain", label: "Knee pain / knee replacement" },
  { value: "hip-pain", label: "Hip pain / hip replacement" },
  { value: "sports-injury", label: "Sports injury (ACL, meniscus, shoulder)" },
  { value: "trauma", label: "Fracture / trauma" },
  { value: "spine-joint", label: "Spine, neck, back or joint pain" },
  { value: "other", label: "Something else" },
];
