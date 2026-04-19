import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { ComponentProps } from "react";

const components = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="font-display text-h1 font-medium text-text-primary mt-12 mb-6 text-balance"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="font-display text-h2 font-medium text-text-primary mt-12 mb-4 text-balance"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="font-display text-h3 font-medium text-text-primary mt-10 mb-3 text-balance"
      {...props}
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4
      className="font-display text-h4 font-medium text-text-primary mt-8 mb-2"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="text-body-lg text-text-secondary my-5 leading-relaxed text-pretty" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-primary underline underline-offset-4 hover:text-primary-hover transition-colors"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 my-5 space-y-2 text-body-lg text-text-secondary" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 my-5 space-y-2 text-body-lg text-text-secondary" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="pl-1 leading-relaxed" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary pl-5 my-6 font-display italic text-body-lg text-text-secondary"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-divider" />,
  em: (props: ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-[0.92em] text-text-primary"
      {...props}
    />
  ),
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components as MDXRemoteProps["components"]}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
