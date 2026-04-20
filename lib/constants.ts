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
  email: "eliteorthocareandrehab@gmail.com",
  phone: "+91-9855100122",
  whatsapp: "+91-9855100122",
  whatsappIntl: "919855100122",
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
    id: "elite",
    name: "Elite Ortho Care and Rehab Centre",
    role: "Consultant Orthopaedic Surgeon",
    city: "Bhubaneswar",
    state: "Odisha",
    address:
      "First Floor, Buddha Heights, CP 52, Ln 1, Sector IV, Neeladri Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751021",
    hours: "Mon – Sat, 9:00 AM – 10:00 PM",
    mapQuery:
      "Dr. Pradeep Kumar Sahoo, Elite Ortho Care & Rehab, Chandrasekharpur, Bhubaneswar",
    googleProfileUrl:
      "https://www.google.com/maps/place/Dr.+Pradeep+Kumar+Sahoo,+Elite+Ortho+Care+%26+Rehab,+Best+Orthopedic+clinic,+Best+Physiotherapy+Centre/data=!4m2!3m1!1s0x0:0x78e8627437aadeb4?sa=X&ved=1t:2428&ictx=111",
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
  // TODO: verify surgery count with doctor before launch
  { value: "11+", label: "Years of experience" },
  { value: "1500+", label: "Successful surgeries" },
  { value: "NHS", label: "Robotic surgery fellowship" },
] as const;

export const CONSULTATION_FEE_INR = 1000;

export const KNEE_REPLACEMENT_PRICING = {
  averageRangeLow: "\u20B91,60,000",
  averageRangeHigh: "\u20B95,00,000",
  rows: [
    {
      procedure: "Total Knee Replacement (One Side)",
      range: "\u20B91,80,000 \u2013 \u20B92,60,000",
    },
    {
      procedure: "Total Knee Replacement (Both Side)",
      range: "\u20B93,80,000 \u2013 \u20B94,80,000",
    },
    {
      procedure: "Partial Knee Replacement (One Side)",
      range: "\u20B91,50,000 \u2013 \u20B92,20,000",
    },
    {
      procedure: "Partial Knee Replacement (Both Side)",
      range: "\u20B92,70,000 \u2013 \u20B93,60,000",
    },
  ],
  factors: [
    "Method of surgery",
    "Cost of implant",
    "Partial vs total knee replacement",
    "Hospital stay",
  ],
} as const;

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/robotic-surgery", label: "Robotic Surgery" },
  { href: "/patient-stories", label: "Patient Stories" },
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
  const msg =
    prefilledMessage ?? "Hi Dr. Sahoo's clinic, I'd like to book a consultation.";
  return `https://wa.me/${DOCTOR.whatsappIntl}?text=${encodeURIComponent(msg)}`;
}

export function telLink() {
  return `tel:${DOCTOR.phone.replace(/[^+\d]/g, "")}`;
}
