"use client"

import Image from "next/image"
import { FadeIn } from "@/components/motion"
import { Section } from "@/components/section"
import { Divider } from "@/components/divider"

export function AboutContent() {
  return (
    <>
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
        <FadeIn className="shrink-0">
          <Image
            src="/headshot.jpeg"
            alt="Sam Kulka"
            width={160}
            height={160}
            className="rounded-xl border border-border object-cover dark:border-dark-border"
            priority
          />
        </FadeIn>
        <div>
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight text-foreground dark:text-dark-foreground">
              About
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted">
              <p>
                I'm Sam Kulka, an AI-focused data engineer and full stack builder
                based in Austin, TX. I build intelligent data systems, AI-powered
                platforms, and real-world operational tools from architecture to
                interface.
              </p>
              <p>
                Most recently, I was a Data Engineer at Charles Schwab, where I led
                the design and delivery of production data products for regulatory
                and business stakeholders, engineered data architectures supporting
                200+ analysts, and drove a data warehouse migration that saved $180M.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted">
          <p>
            Outside of enterprise work, I build full-stack products end to end. Lex
            is an AI knowledge platform that converts unstructured documents into
            structured ontologies and queryable knowledge graphs using RAG and vector
            search. Force Majeure is a ticketing system designed for high-concurrency
            on-sale events. Flite Signs is operational software that replaced
            spreadsheet-driven workflows at an architectural signage company.
          </p>
          <p>
            I studied Computer Science at Austin Community College and Finance at
            Texas State University. The combination of a technical and business
            background shapes how I approach problems: I care about building systems
            that solve real business needs, not just technically interesting artifacts.
          </p>
        </div>
      </FadeIn>

      <Divider className="my-12" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          What I work with
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Languages
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              SQL, Python, TypeScript, R, Java, C++
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Data Engineering
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              Informatica, Databricks, dbt, BigQuery, DuckDB, PostgreSQL, ETL Automation
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Cloud & Infrastructure
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              GCP, AWS, Kubernetes, Docker, IaC, Vercel
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              AI & ML
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              Agentic Engineering, RAG Pipelines, OpenAI, Vector Search, Embeddings
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Full Stack
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              React, Next.js, Node.js, FastAPI, Prisma, Tailwind CSS
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Process
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              Agile/Scrum, System Design, Domain Modeling, Data Warehousing
            </p>
          </div>
        </div>
      </Section>

      <Divider className="my-12" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Certifications
        </h2>
        <ul className="mt-6 space-y-2 text-sm text-muted dark:text-dark-muted">
          <li className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
            Google Cloud Platform Associate Engineer
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
            Professional Scrum Developer I (PSD I)
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
            Dagster Essentials
          </li>
        </ul>
      </Section>

      <Divider className="my-12" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Approach
        </h2>
        <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted">
          <p>
            I start with the problem, not the technology. The best technical
            decisions come from deeply understanding the domain: sitting with
            users, mapping real workflows, and identifying where software can
            reduce friction without imposing unnecessary rigidity.
          </p>
          <p>
            I prefer small, focused systems over sprawling abstractions. Code
            should be as simple as the problem allows. I bias toward shipping
            early, iterating on real feedback, and keeping infrastructure costs
            proportional to actual usage.
          </p>
        </div>
      </Section>
    </>
  )
}
