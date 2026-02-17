"use client"

import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/button"
import { ProjectCard } from "@/components/project-card"
import { Divider } from "@/components/divider"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"

const projects = [
  {
    title: "Force Majeure",
    description:
      "Full-stack ticketing platform with concurrent purchase flows, payment processing, and event operations tooling.",
    href: "/work/force-majeure",
    role: "Co-Founder / Product Engineer & System Designer",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  },
  {
    title: "Flite Signs",
    description:
      "Operational software translating manual signage workflows into a structured digital pipeline.",
    href: "/work/flite-signs",
    role: "Product Engineer (Contract)",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Lex",
    description:
      "Legal data ontology platform with RAG-based semantic querying across statutes and regulatory relationships.",
    href: "/work/lex",
    role: "Full Stack Engineer (Project)",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "OpenAI", "React"],
  },
]

export default function Home() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <FadeIn>
            <p className="mb-4 text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
              AI-Data Engineer &amp; Full Stack Builder
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl dark:text-dark-foreground">
              I build systems that work.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted dark:text-dark-muted">
              Intelligent data systems, AI-powered platforms, and production
              software. From pipeline to interface, end to end.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/work">View Work</Button>
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
              <Button href="/resume" variant="ghost">
                Resume
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Container>
        <Divider />
      </Container>

      <Section>
        <Container>
          <FadeIn>
            <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
              Selected Work
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-8 space-y-4">
            {projects.map((project) => (
              <FadeInStaggerItem key={project.href}>
                <ProjectCard {...project} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>
    </>
  )
}
