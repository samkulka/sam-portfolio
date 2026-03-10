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
                Hi, I'm Sam Kulka. I'm a Technical Product Manager based in
                Austin, focused on building data and AI products that solve
                complex operational problems.
              </p>
              <p>
                My background combines product strategy with hands-on experience
                in data systems and software development. I enjoy working on
                technical products where understanding the underlying systems is
                critical to making good product decisions. That foundation allows
                me to collaborate closely with engineers while translating
                customer needs and business goals into clear product direction.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted">
          <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
            Force Majeure
          </h3>
          <p>
            I'm currently Co-Founder and Product Manager at Force Majeure, a
            ticketing platform built for independent promoters and venues.
          </p>
          <p>
            I define and own the product roadmap for a multi-sided marketplace
            serving promoters, artists, and customers. Core workflows include
            event creation, ticket inventory management, checkout flows, and
            financial settlement systems.
          </p>
          <p>
            I regularly work with promoters and venue operators to understand
            their operational needs and translate those insights into product
            decisions. From those conversations I prioritize features, define
            workflows, and partner with engineering to build reliable systems
            that support high-traffic ticket on-sale events.
          </p>

          <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
            Funnel Forge
          </h3>
          <p>
            I also worked as a Product & Data Contractor for Funnel Forge, where
            I helped design and build a territory intelligence engine for medical
            device sales teams.
          </p>
          <p>
            The system matches healthcare organizations with compatible
            manufacturers by combining regulatory data sources, manufacturer
            catalogs, and enrichment layers. I built a multi-stage pipeline that
            generates qualified sales targets across more than 700 ZIP code
            territories, turning fragmented public datasets into a structured
            product for sales teams.
          </p>
          <p>
            This project required translating messy real-world data into usable
            insights and designing workflows that help sales teams identify and
            prioritize the right opportunities.
          </p>

          <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
            Charles Schwab
          </h3>
          <p>
            Before that I worked as a Data Engineer at Charles Schwab, where I
            built production data products used by analysts and regulatory teams.
          </p>
          <p>
            One of the largest initiatives I worked on involved leading a data
            warehouse migration that ultimately saved the firm $180M. I also
            helped turn a vague regulatory requirement into a production data
            product used by non-technical teams to make high-stakes business
            decisions.
          </p>
          <p>
            Working in that environment reinforced how important it is for
            product managers to deeply understand both the data and the users who
            rely on it.
          </p>
        </div>
      </FadeIn>

      <Divider className="my-12" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          How I Work
        </h2>
        <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-muted dark:text-dark-muted">
          <p>
            Across my work I focus on products that sit at the intersection of
            data, AI, and operational workflows.
          </p>
          <p>I like working on problems where:</p>
          <ul className="list-none space-y-2">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
              the domain is complex
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
              the data is messy
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-dark-muted" />
              the product must simplify difficult decisions for users
            </li>
          </ul>
          <p>
            My approach is to start with the real workflow, understand the
            decisions users need to make, and design systems that make those
            decisions easier and more reliable.
          </p>
        </div>
      </Section>

      <Divider className="my-12" />

      <Section className="py-0">
        <h2 className="text-sm font-medium tracking-wide text-muted uppercase dark:text-dark-muted">
          Core Areas
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Product
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              Product Strategy, Roadmapping, User Discovery, Workflow Design,
              Stakeholder Alignment, Agile / Scrum
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              AI & Data
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              RAG Architectures, Semantic Search, Data Modeling, Data
              Warehousing, BigQuery
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground dark:text-dark-foreground">
              Technical
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">
              SQL, Python, APIs, Distributed Systems, AWS, GCP, Kubernetes
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
        </ul>
      </Section>
    </>
  )
}
