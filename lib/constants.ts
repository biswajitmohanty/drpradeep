export const DOCTOR = {
  name: "Dr. Pradeep Kumar Sahoo",
  shortName: "Dr. Sahoo",
  specialty: "Orthopaedic Surgeon",
  subSpecialty: "Robotic Knee & Hip Replacement Specialist",
  city: "Bhubaneswar",
  state: "Odisha",
  country: "India",
  experienceYears: 11,
  languages: ["English", "Hindi", "Odia"],
  email: "appointments@drpradeepsahoo.com",
  // TODO: real contact numbers
  phone: "+91-XXXXXXXXXX",
  whatsapp: "+91-XXXXXXXXXX",
  whatsappIntl: "91XXXXXXXXXX",
} as const;

export const EDUCATION = [
  {
    degree: "MBBS",
    institution: "MKCG Medical College and Hospital",
    location: "Berhampur",
  },
  {
    degree: "DNB Orthopaedics",
    institution: "Apollo Main Hospital",
    location: "Chennai",
  },
  {
    degree: "Fellowship in Robotic Joint Replacement Surgery",
    institution: "NHS Hospital",
    location: "Jalandhar",
  },
  {
    degree: "Diploma in Sports Medicine",
    institution: "DFM, FIFA",
  },
  {
    degree: "Basic Trauma Management",
    institution: "AO, Kochi",
  },
] as const;

export const PAST_AFFILIATIONS = [
  "Apollo Hospital, Chennai",
  "Apollo Hospital, Bhubaneswar",
] as const;

export const CLINICS = [
  {
    id: "utkal",
    name: "UTKAL Hospital",
    role: "Associate Consultant, Department of Orthopaedic Surgery",
    city: "Bhubaneswar",
    state: "Odisha",
    // TODO: real address, geo, timings
    address: "UTKAL Hospital, Bhubaneswar, Odisha",
    hours: "Mon–Sat, 10:00 AM – 2:00 PM",
    mapQuery: "UTKAL Hospital Bhubaneswar",
  },
  {
    id: "elite",
    name: "Elite Ortho Care and Rehab Centre",
    role: "Consultant Orthopaedic Surgeon",
    city: "Bhubaneswar",
    state: "Odisha",
    address: "Elite Ortho Care and Rehab Centre, Bhubaneswar, Odisha",
    hours: "Mon–Sat, 5:00 PM – 8:00 PM",
    mapQuery: "Elite Ortho Care and Rehab Centre Bhubaneswar",
  },
] as const;

export const TREATMENTS = [
  {
    slug: "knee-replacement",
    title: "Knee Replacement",
    description:
      "Total and partial knee replacement, including robotic-assisted procedures for precision and faster recovery.",
    icon: "activity",
  },
  {
    slug: "hip-replacement",
    title: "Hip Replacement",
    description:
      "Modern hip replacement techniques restoring mobility for arthritis, fracture, and joint degeneration.",
    icon: "person-standing",
  },
  {
    slug: "sports-injury",
    title: "Sports Injury",
    description:
      "Diagnosis and treatment of ligament tears, meniscus injuries, and overuse conditions for athletes at every level.",
    icon: "dumbbell",
  },
  {
    slug: "arthroscopy",
    title: "Arthroscopy",
    description:
      "Minimally invasive keyhole surgery for joint problems with minimal scarring and quick recovery.",
    icon: "microscope",
  },
  {
    slug: "trauma-care",
    title: "Trauma Care",
    description:
      "Expert management of fractures, dislocations, and orthopaedic emergencies.",
    icon: "shield-plus",
  },
  {
    slug: "spine-and-joint-pain",
    title: "Spine & Joint Pain",
    description:
      "Comprehensive evaluation and treatment for neck, back, shoulder, and joint pain.",
    icon: "spline",
  },
] as const;

export const STATS = [
  // TODO: replace with verified numbers before launch
  { value: "11+", label: "Years of experience" },
  { value: "1500+", label: "Successful surgeries" },
  { value: "4.9★", label: "Patient rating" },
  { value: "2", label: "Clinic locations" },
] as const;

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/robotic-surgery", label: "Robotic Surgery" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const SITE = {
  url: "https://drpradeepsahoo.com",
  name: "Dr. Pradeep Kumar Sahoo",
  tagline: "Robotic Knee & Hip Replacement Surgeon in Bhubaneswar",
  defaultDescription:
    "Dr. Pradeep Kumar Sahoo — Orthopaedic Surgeon specialising in robotic knee and hip replacement in Bhubaneswar. 11+ years of experience, Apollo Chennai and NHS UK trained.",
  twitter: "@drpradeepsahoo",
} as const;

export function whatsappLink(prefilledMessage?: string) {
  const msg = prefilledMessage ?? "Hi Dr. Sahoo's clinic, I'd like to book a consultation.";
  return `https://wa.me/${DOCTOR.whatsappIntl}?text=${encodeURIComponent(msg)}`;
}

export function telLink() {
  return `tel:${DOCTOR.phone.replace(/[^+\d]/g, "")}`;
}
