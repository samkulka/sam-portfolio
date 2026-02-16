import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getProjects } from "@/lib/mdx"
import { Container } from "@/components/container"
import { Badge } from "@/components/badge"
import { Prose } from "@/components/prose"
import { Button } from "@/components/button"
import { formatDate } from "@/lib/utils"
import { ProjectHeader } from "./project-header"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return {}

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    openGraph: {
      title: `${project.frontmatter.title} | Sam Kulka`,
      description: project.frontmatter.description,
      type: "article",
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <Container className="py-16 md:py-24">
      <ProjectHeader frontmatter={project.frontmatter} />

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.frontmatter.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <p className="mt-2 text-sm text-muted dark:text-dark-muted">
        {formatDate(project.frontmatter.date)}
      </p>

      {project.frontmatter.links && project.frontmatter.links.length > 0 && (
        <div className="mt-4 flex gap-3">
          {project.frontmatter.links.map((link) => (
            <Button key={link.href} href={link.href} variant="secondary" size="sm" external>
              {link.label}
            </Button>
          ))}
        </div>
      )}

      <div className="mt-12">
        <Prose>{project.content}</Prose>
      </div>

      <div className="mt-16">
        <Button href="/work" variant="ghost" className="gap-1.5">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All projects
        </Button>
      </div>
    </Container>
  )
}
