import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Section } from "@/components/shared/section";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Orthopaedic Care, Plain English",
  description:
    "Articles on knee replacement, hip replacement, sports injury, and orthopaedic recovery — written for patients by Dr. Pradeep Kumar Sahoo in Bhubaneswar.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export const revalidate = 3600;

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section size="lg" aria-labelledby="blog-heading">
        <div className="max-w-3xl">
          <span className="eyebrow">Blog</span>
          <h1
            id="blog-heading"
            className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance"
          >
            Orthopaedic care, in plain English.
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary text-pretty">
            Practical, honest articles about knee replacement, hip replacement,
            recovery, and when surgery actually makes sense. Written by Dr.
            Pradeep Kumar Sahoo for patients — not for other doctors.
          </p>
        </div>
      </Section>

      <Section variant="elevated">
        {posts.length === 0 ? (
          <p className="text-body text-text-muted">
            Articles are on the way. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {posts.map((p) => (
              <Link
                key={p.frontmatter.slug}
                href={`/blog/${p.frontmatter.slug}`}
                className="group flex flex-col gap-4 rounded-lg bg-surface border border-border p-6 md:p-7 hover:-translate-y-0.5 hover:border-primary hover:shadow-md transition-all duration-300 ease-smooth"
              >
                <span className="eyebrow">{p.frontmatter.category}</span>
                <h2 className="font-display text-h4 font-medium text-text-primary text-balance group-hover:text-primary transition-colors">
                  {p.frontmatter.title}
                </h2>
                <p className="text-body-sm text-text-secondary text-pretty flex-1">
                  {p.frontmatter.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-divider text-caption text-text-muted">
                  <time dateTime={p.frontmatter.publishedAt}>
                    {formatPostDate(p.frontmatter.publishedAt)}
                  </time>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {p.readingMinutes} min read
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-primary text-body-sm font-medium">
                  Read article
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
