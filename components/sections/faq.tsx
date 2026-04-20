import { Section } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildFAQSchema } from "@/lib/schema";

export const homepageFaqs = [
  {
    question: "Do I need surgery for my knee pain?",
    answer:
      "Not always. Many conditions respond to physiotherapy, weight management, or injections. Surgery is recommended only when conservative options have been tried or when imaging shows significant joint damage.",
  },
  {
    question: "What is robotic-assisted knee replacement?",
    answer:
      "It's a knee replacement performed with robotic guidance for sub-millimeter accuracy in implant placement. The surgeon controls every movement — the robot is a precision tool, not a replacement for the surgeon's judgment.",
  },
  {
    question: "How long is recovery?",
    answer:
      "Most patients walk with support within 24 hours, return home in 2–4 days, and resume light daily activities in 2–3 weeks. Full recovery takes 3–6 months.",
  },
  {
    question: "Is robotic surgery covered by insurance?",
    answer:
      "Most major Indian health insurance plans cover robotic joint replacement. The clinic team can verify your coverage before scheduling.",
  },
  {
    question: "Where does Dr. Sahoo practice?",
    answer:
      "Elite Ortho Care and Rehab Centre, Chandrasekharpur, Bhubaneswar. OPD hours are Mon through Sat, 9 AM to 10 PM — see the contact page for directions.",
  },
];

interface FAQProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
  includeSchema?: boolean;
}

export function FAQ({
  faqs = homepageFaqs,
  title = "Questions patients commonly ask.",
  eyebrow = "FAQ",
  includeSchema = true,
}: FAQProps) {
  const schema = buildFAQSchema(faqs);

  return (
    <Section aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <span className="eyebrow">{eyebrow}</span>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-h2 md:text-h1 font-medium text-text-primary text-balance"
          >
            {title}
          </h2>
          <p className="mt-5 text-body text-text-secondary text-pretty">
            Still unsure? A consultation is the fastest way to get a clear,
            personalised answer.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {includeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
    </Section>
  );
}
