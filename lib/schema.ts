import { CLINICS, DOCTOR, EDUCATION, SITE } from "./constants";

export function buildPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE.url}#physician`,
    name: DOCTOR.name,
    image: `${SITE.url}/images/doctor/portrait.jpg`,
    url: SITE.url,
    telephone: DOCTOR.phone,
    email: DOCTOR.email,
    medicalSpecialty: "Orthopedic",
    knowsLanguage: DOCTOR.languages,
    alumniOf: EDUCATION.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    worksFor: CLINICS.map((c) => ({
      "@type": "MedicalBusiness",
      name: c.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.address,
        addressLocality: c.city,
        addressRegion: c.state,
        addressCountry: "IN",
      },
    })),
    address: CLINICS.map((c) => ({
      "@type": "PostalAddress",
      streetAddress: c.address,
      addressLocality: c.city,
      addressRegion: c.state,
      addressCountry: "IN",
    })),
  };
}

export function buildOrganizationSchema() {
  return CLINICS.map((c) => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}#${c.id}`,
    name: `${c.name} — ${DOCTOR.name}`,
    url: SITE.url,
    telephone: DOCTOR.phone,
    priceRange: "₹₹",
    medicalSpecialty: "Orthopedic",
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address,
      addressLocality: c.city,
      addressRegion: c.state,
      addressCountry: "IN",
    },
    openingHours: c.hours,
  }));
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function buildAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Physician",
      name: DOCTOR.name,
    },
    // TODO: replace with verified rating + count
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  };
}
