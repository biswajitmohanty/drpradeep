import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export interface TreatmentFrontmatter {
  slug: string;
  title: string;
  description: string;
  summary: string;
  icon: string;
  heroHeadline: string;
  heroBody: string;
  order: number;
}

export interface TreatmentContent {
  frontmatter: TreatmentFrontmatter;
  symptoms: string[];
  options: { label: string; body: string }[];
  whatToExpect: string[];
  recovery: { phase: string; detail: string }[];
  risks: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
}

export function getTreatment(slug: string): TreatmentContent {
  const filepath = path.join(CONTENT_ROOT, "treatments", `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  const sections = parseSections(content);

  return {
    frontmatter: data as TreatmentFrontmatter,
    symptoms: parseList(sections["symptoms"] ?? ""),
    options: parseLabeled(sections["options"] ?? ""),
    whatToExpect: parseList(sections["what-to-expect"] ?? ""),
    recovery: parsePhased(sections["recovery"] ?? ""),
    risks: parseList(sections["risks"] ?? ""),
    faqs: parseFaqs(sections["faqs"] ?? ""),
    related: parseList(sections["related"] ?? ""),
  };
}

export function getAllTreatments(): TreatmentContent[] {
  const dir = path.join(CONTENT_ROOT, "treatments");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
  return files
    .map((slug) => getTreatment(slug))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

function parseSections(content: string): Record<string, string> {
  const out: Record<string, string> = {};
  const re = /^## \[([a-z-]+)\]\s*$([\s\S]*?)(?=^## \[|$(?![\r\n]))/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    out[m[1]] = m[2].trim();
  }
  return out;
}

function parseList(s: string): string[] {
  return s
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.replace(/^-\s+/, ""));
}

function parseLabeled(s: string): { label: string; body: string }[] {
  return s
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => {
      const body = l.replace(/^-\s+/, "");
      const idx = body.indexOf(":");
      if (idx === -1) return { label: body, body: "" };
      return {
        label: body.slice(0, idx).trim(),
        body: body.slice(idx + 1).trim(),
      };
    });
}

function parsePhased(s: string): { phase: string; detail: string }[] {
  return parseLabeled(s).map(({ label, body }) => ({
    phase: label,
    detail: body,
  }));
}

function parseFaqs(s: string): { question: string; answer: string }[] {
  const out: { question: string; answer: string }[] = [];
  const lines = s.split("\n");
  let current: { question: string; answer: string } | null = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("### ")) {
      if (current) out.push(current);
      current = { question: line.replace(/^###\s+/, ""), answer: "" };
    } else if (current && line.length > 0) {
      current.answer = current.answer ? `${current.answer} ${line}` : line;
    }
  }
  if (current) out.push(current);
  return out;
}
