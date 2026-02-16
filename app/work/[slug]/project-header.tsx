"use client"

import { FadeIn } from "@/components/motion"
import type { ProjectFrontmatter } from "@/lib/mdx"

export function ProjectHeader({ frontmatter }: { frontmatter: ProjectFrontmatter }) {
  return (
    <>
      <FadeIn>
        <p className="text-sm font-medium text-muted dark:text-dark-muted">
          {frontmatter.role}
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl dark:text-dark-foreground">
          {frontmatter.title}
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-3 text-lg text-muted dark:text-dark-muted">
          {frontmatter.description}
        </p>
      </FadeIn>
    </>
  )
}
