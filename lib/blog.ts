import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");

export interface BlogFrontmatter {
  slug: string;
  title: string;
  description: string;
  category: "Robotic surgery" | "Recovery" | "Arthritis" | "Orthopaedics" | "Sports medicine";
  publishedAt: string;
  updatedAt?: string;
  heroImage?: string;
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
  readingMinutes: number;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_ROOT)) return [];
  return fs
    .readdirSync(BLOG_ROOT)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): BlogPost | null {
  const filepath = path.join(BLOG_ROOT, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    frontmatter: { slug, ...(data as Omit<BlogFrontmatter, "slug">) },
    content,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPost(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    );
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
