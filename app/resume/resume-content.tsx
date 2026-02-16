"use client"

import { FadeIn } from "@/components/motion"
import { Section } from "@/components/section"
import { Button } from "@/components/button"
import { Divider } from "@/components/divider"

const experience = [
  {
    title: "Data Engineer",
    company: "Charles Schwab",
    period: "Jan 2024 - May 2025",
    points: [
      "Led end-to-end design and delivery of a production data product, translating ambiguous regulatory and business requirements into a scalable system used by non-technical stakeholders for high-stakes decisions",
      "Led an acquisition and data warehouse migration initiative that saved Charles Schwab $180M upon completion",
      "Engineered resilient data architectures supporting real-time analytics and predictive insights used by 200+ analysts across finance and operations",
      "Implemented end-to-end data quality frameworks and validation logic, elevating accuracy and regulatory compliance across finance datasets while validating 5M records monthly",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "Charles Schwab",
    period: "Jun 2022 - Aug 2023",
    points: [
      "Developed and tuned ETL pipelines using Informatica PowerCenter/IICS to streamline cross-source data integration",
      "Enhanced ETL efficiency with SQL and Python scripts, cutting average query time by 40%",
      "Automated 15+ workflows across 3 business units using data orchestration tools and GCP",
      "Collaborated on sprint planning and backlog grooming to refine technical requirements and maintain agile velocity",
    ],
  },
]

const projects = [
  {
    title: "Force Majeure",
    description: "Full-Stack Ticketing Platform",
    period: "2025",
    points: [
      "Led end-to-end product architecture translating real-world event logistics into software systems",
      "Designed conversion-focused ticket purchasing flows balancing usability and transactional reliability",
      "Built admin tooling allowing non-technical organizers to manage events, ticket tiers, and operational workflows",
      "Implemented backend APIs and database models for event lifecycle management and purchase logic",
      "Structured transactional pipeline accounting for payment states, concurrency, and data integrity",
      "Designed system with awareness of high-traffic event drops and future extensibility",
      "Acted as product owner and engineer, aligning business strategy with technical execution",
    ],
  },
  {
    title: "Lex",
    description: "AI Knowledge & Workflow Platform",
    period: "2025",
    points: [
      "Built a full-stack AI platform converting unstructured documents and APIs into structured data ontologies and queryable knowledge graphs using RAG, vector embeddings, and semantic indexing",
      "Engineered a RAG pipeline combining OpenAI embeddings, a vector database, and PostgreSQL for high-precision semantic search and multi-document reasoning",
      "Implemented ontology-driven data models normalizing heterogeneous inputs into a unified, machine-readable schema",
      "Developed a Next.js + FastAPI production system with authentication, job history, and audit trails for traceable, enterprise-grade AI workflows",
    ],
  },
  {
    title: "Flite Signs",
    description: "Operational Software for Signage Manufacturing",
    period: "2024",
    points: [
      "Built full-stack operational software replacing spreadsheets and email threads with a structured project pipeline for an architectural signage company",
      "Designed a quoting engine with configurable material and labor rates, line-item breakdowns, and version-tracked client approvals",
      "Implemented a multi-stage order pipeline with role-based access controls, stage transition tracking, and real-time team dashboards",
      "Used FFmpeg to build a video compression pipeline for the landing page hero — transcoding to H.264, tuning CRF for quality-to-size balance, and generating multi-resolution variants",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Business Administration, Finance",
    institution: "Texas State University",
    period: "Fall 2023",
  },
  {
    degree: "Associate of Science, Computer Science",
    institution: "Austin Community College",
    period: "Summer 2021",
  },
]

const certifications = [
  "Google Cloud Platform Associate Engineer",
  "Professional Scrum Developer I (PSD I)",
  "Dagster Essentials",
]

const skills = {
  "Languages": "SQL, Python, R, Java, C++, TypeScript",
  "Cloud & Infrastructure": "GCP, AWS, Kubernetes, Docker, IaC, Vercel",
  "Data Engineering": "Informatica, Databricks, dbt, BigQuery, DuckDB, PostgreSQL, ETL Automation",
  "AI & ML": "Agentic Engineering, RAG Pipelines, OpenAI, Vector Search, Embeddings",
  "Data": "Data Modeling, Data Warehousing, Data Orchestration, BI Tools, Tableau",
  "Process": "Agile/Scrum, System Design, Domain Modeling, API Design",
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
              Sam Kulka, AI-Data Engineer
            </p>
          </div>
          {pdfAvailable && (
            <Button href="/SamKulka_FullStackEngineer_Res.pdf" variant="secondary" size="sm" external>
              Download PDF
            </Button>
          )}
        </div>
      </FadeIn>

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
                  {role.title}
                </h3>
                <span className="text-sm text-muted dark:text-dark-muted">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                {role.company}
              </p>
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
          Projects
        </h2>
        <div className="mt-6 space-y-10">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="font-semibold text-foreground dark:text-dark-foreground">
                  {project.title}
                </h3>
                <span className="text-sm text-muted dark:text-dark-muted">
                  {project.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                {project.description}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted dark:text-dark-muted">
                {project.points.map((point) => (
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

      <Divider className="my-10" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Skills
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
    </>
  )
}
