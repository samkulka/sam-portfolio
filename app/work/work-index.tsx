"use client"

import { ProjectCard } from "@/components/project-card"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import type { Project } from "@/lib/mdx"

export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <>
      <FadeIn>
        <h1 className="text-3xl font-bold tracking-tight text-foreground dark:text-dark-foreground">
          Work
        </h1>
        <p className="mt-3 text-muted dark:text-dark-muted">
          Selected projects spanning AI-powered tools, ticketing platforms, and
          operational software.
        </p>
      </FadeIn>

      <FadeInStagger className="mt-12 space-y-4">
        {projects.map((project) => (
          <FadeInStaggerItem key={project.slug}>
            <ProjectCard
              title={project.frontmatter.title}
              description={project.frontmatter.description}
              href={`/work/${project.slug}`}
              role={project.frontmatter.role}
              stack={project.frontmatter.stack}
            />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
    </>
  )
}
