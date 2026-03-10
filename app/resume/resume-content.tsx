"use client"

import { FadeIn } from "@/components/motion"
import { Section } from "@/components/section"
import { Button } from "@/components/button"
import { Divider } from "@/components/divider"

const summary =
  "I build data and AI products from scratch, with enough of an engineering background to work closely with technical teams without slowing them down. Most recently at Charles Schwab I shipped a production data platform and led a migration that saved the company $180M. Outside of that I've built a territory intelligence tool for medical device sales and co-founded a ticketing platform. I'm looking for a PM role where the product is technical and the work starts early."

const experience = [
  {
    title: "Product Manager & Co-Founder",
    company: "Force Majeure",
    subtitle: "Ticketing platform for independent promoters and venues.",
    period: "Sep 2023 - Present",
    points: [
      "Define and own the product roadmap for a multi-sided marketplace serving promoters, artists, and customers. Core workflows include event creation, inventory management, and financial settlement.",
      "Run regular feedback sessions with promoters and venue operators and use what I learn to drive backlog prioritization and product decisions.",
      "Partner directly with engineering on software checkout flows, ticket inventory systems, and the event CMS.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Charles Schwab",
    period: "Jan 2024 - May 2025",
    points: [
      "Led an acquisition and data warehouse migration initiative that saved Charles Schwab $180M upon completion of the project.",
      "Took a vague regulatory requirement and turned it into a production data product used by non-technical teams to make high-stakes decisions. Acted as product owner and collaborated closely with developers and functional stakeholders throughout.",
    ],
  },
  {
    title: "Product & Data Contractor",
    company: "Funnel Forge",
    subtitle: "Territory intelligence for medical device sales teams.",
    period: "2025",
    points: [
      "Contracted to define and build a territory intelligence engine that matches healthcare organizations to compatible manufacturers using regulatory data and product capability signals.",
      "Delivered a multi-stage pipeline pulling from CLIA registries, manufacturer catalogs, and enrichment layers to generate sales targets across 700+ ZIP code territories.",
    ],
  },
  {
    title: "Data Engineer & BSA (Intern)",
    company: "Charles Schwab",
    period: "Jun 2022 - Aug 2023",
    points: [
      "Led an acquisition and data warehouse migration initiative that saved Charles Schwab $180M upon completion of the project.",
      "Took a vague regulatory requirement and turned it into a production data product used by non-technical teams to make high-stakes decisions. Acted as product owner across eng and business stakeholders throughout.",
    ],
  },
]

const education = [
  {
    degree: "B.B.A. Finance",
    institution: "Texas State University",
    period: "Fall 2023",
  },
  {
    degree: "A.S. Computer Science",
    institution: "Austin Community College",
    period: "Summer 2021",
  },
]

const certifications = [
  "Google Cloud Platform Associate Engineer",
  "Professional Scrum Developer\u2122 I (PSD I)",
]

const skills = {
  "Product":
    "Product Strategy \u00b7 Roadmapping \u00b7 MVP Definition \u00b7 Agile/Scrum \u00b7 UX & Workflow Design \u00b7 Stakeholder Alignment",
  "AI & Data":
    "AI/ML Systems \u00b7 RAG Architectures \u00b7 Semantic Search \u00b7 Data Modeling \u00b7 Data Warehousing \u00b7 BigQuery",
  "Technical":
    "SQL \u00b7 Python \u00b7 AWS \u00b7 GCP \u00b7 APIs \u00b7 Distributed Systems \u00b7 Kubernetes",
}

export function ResumeContent({ pdfAvailable }: { pdfAvailable: boolean }) {
  return (
    <>
      <FadeIn>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground dark:text-dark-foreground">
              Resume
            </h1>
            <p className="mt-2 text-muted dark:text-dark-muted">
              Sam Kulka, Technical Product Manager
            </p>
          </div>
          {pdfAvailable && (
            <Button href="/SamKulka_ProductManager_Res.pdf" variant="secondary" size="sm" external>
              Download PDF
            </Button>
          )}
        </div>
      </FadeIn>

      <Divider className="my-10" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Summary
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted dark:text-dark-muted">
          {summary}
        </p>
      </Section>

      <Divider className="my-10" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Education
        </h2>
        <div className="mt-6 space-y-6">
          {education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="font-semibold text-foreground dark:text-dark-foreground">
                  {edu.degree}
                </h3>
                <span className="text-sm text-muted dark:text-dark-muted">
                  {edu.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Divider className="my-10" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Experience
        </h2>
        <div className="mt-6 space-y-10">
          {experience.map((role) => (
            <div key={role.title + role.company}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="font-semibold text-foreground dark:text-dark-foreground">
                  {role.title} | {role.company}
                </h3>
                <span className="text-sm text-muted dark:text-dark-muted">
                  {role.period}
                </span>
              </div>
              {role.subtitle && (
                <p className="mt-1 text-sm italic text-muted dark:text-dark-muted">
                  {role.subtitle}
                </p>
              )}
              <ul className="mt-3 space-y-1.5 text-sm text-muted dark:text-dark-muted">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Divider className="my-10" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Technical Skills
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
                {category}
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                {items}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Divider className="my-10" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Certifications
        </h2>
        <ul className="mt-6 space-y-2 text-sm text-muted dark:text-dark-muted">
          {certifications.map((cert) => (
            <li key={cert} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
              {cert}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
