import type { MDXComponents } from "mdx/types"
import { Callout } from "./callout"

export function useMDXComponents(): MDXComponents {
  return {
    Callout,
    h2: (props) => (
      <h2 {...props} className="mt-12 mb-4 text-xl font-semibold tracking-tight text-foreground dark:text-dark-foreground" />
    ),
    h3: (props) => (
      <h3 {...props} className="mt-8 mb-3 text-lg font-semibold text-foreground dark:text-dark-foreground" />
    ),
    h4: (props) => (
      <h4 {...props} className="mt-6 mb-2 text-base font-semibold text-foreground dark:text-dark-foreground" />
    ),
    p: (props) => (
      <p {...props} className="mb-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted" />
    ),
    ul: (props) => (
      <ul {...props} className="mb-5 list-disc pl-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted" />
    ),
    ol: (props) => (
      <ol {...props} className="mb-5 list-decimal pl-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted" />
    ),
    li: (props) => <li {...props} className="mb-1.5" />,
    a: (props) => (
      <a
        {...props}
        className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground dark:text-dark-foreground dark:decoration-dark-border dark:hover:decoration-dark-foreground"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),
    blockquote: (props) => (
      <blockquote {...props} className="my-6 border-l-2 border-border pl-4 italic text-muted dark:border-dark-border dark:text-dark-muted" />
    ),
    hr: () => <hr className="my-10 border-border dark:border-dark-border" />,
    strong: (props) => (
      <strong {...props} className="font-semibold text-foreground dark:text-dark-foreground" />
    ),
  }
}
