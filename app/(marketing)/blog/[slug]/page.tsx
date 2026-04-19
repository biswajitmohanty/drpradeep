import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Mdx } from "@/components/blog/mdx";
import {
  formatPostDate,
  getAllPostSlugs,
  getAllPosts,
  getPost,
} from "@/lib/blog";
import { buildArticleSchema } from "@/lib/schema";
import { DOCTOR, SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.publishedAt,
      modifiedTime:
        post.frontmatter.updatedAt ?? post.frontmatter.publishedAt,
      url: `${SITE.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const related = all
    .filter((p) => p.frontmatter.slug !== slug)
    .filter((p) => p.frontmatter.category === post.frontmatter.category)
    .slice(0, 2);
  const fallback = all
    .filter((p) => p.frontmatter.slug !== slug)
    .slice(0, 2);
  const relatedFinal = related.length > 0 ? related : fallback;

  const schema = buildArticleSchema({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    slug,
    publishedAt: post.frontmatter.publishedAt,
    updatedAt: post.frontmatter.updatedAt,
  });

  return (
    <>
      <article>
        <Section size="lg">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-caption text-text-muted hover:text-primary uppercase tracking-[0.12em] inline-block"
            >
              ← All articles
            </Link>
            <span className="mt-6 eyebrow block">
              {post.frontmatter.category}
            </span>
            <h1 className="mt-3 font-display text-h1 md:text-display font-medium text-text-primary text-balance">
              {post.frontmatter.title}
            </h1>
            <p className="mt-5 text-body-lg text-text-secondary text-pretty">
              {post.frontmatter.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-caption text-text-muted">
              <span className="font-medium text-text-secondary">
                {DOCTOR.name}
              </span>
              <time dateTime={post.frontmatter.publishedAt}>
                {formatPostDate(post.frontmatter.publishedAt)}
              </time>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </Section>

        <Section variant="surface" size="sm">
          <div className="max-w-3xl mx-auto">
            <Mdx source={post.content} />
          </div>
        </Section>
      </article>

      <Section variant="elevated">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl bg-primary text-white p-8 md:p-10 flex flex-col md:flex-row gap-5 md:items-center justify-between">
            <div>
              <h2 className="font-display text-h3 font-medium text-balance">
                Have a specific question about your knee or hip?
              </h2>
              <p className="mt-2 text-white/80 text-pretty">
                Book a consultation at UTKAL Hospital or Elite Ortho Care.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-md bg-accent hover:bg-accent-hover text-white px-6 py-3 font-medium shadow-lg transition-all duration-300 ease-smooth hover:-translate-y-0.5 flex-shrink-0"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {relatedFinal.length > 0 ? (
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-h3 font-medium text-text-primary mb-6">
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {relatedFinal.map((p) => (
                <Link
                  key={p.frontmatter.slug}
                  href={`/blog/${p.frontmatter.slug}`}
                  className="group flex flex-col gap-2 rounded-lg bg-surface border border-border p-5 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <span className="eyebrow">{p.frontmatter.category}</span>
                  <h3 className="font-display text-h4 font-medium text-text-primary group-hover:text-primary transition-colors">
                    {p.frontmatter.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary text-pretty">
                    {p.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
