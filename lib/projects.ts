export const projectMeta = {
  lex: {
    title: "Lex",
    subtitle: "Legal Ontology & AI Query System",
    description:
      "A legal data ontology platform for structured modeling of statutes and regulatory relationships, with RAG-based semantic querying.",
    role: "Full Stack Engineer",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "OpenAI",
      "React",
      "TypeScript",
      "Docker",
    ],
  },
  "force-majeure": {
    title: "Force Majeure",
    subtitle: "Ticketing & Event Platform",
    description:
      "Full-stack ticketing platform for artists and events with purchase flows, event management, admin tooling, and payment processing.",
    role: "Product Engineer & System Designer",
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Vercel",
    ],
  },
  "flite-signs": {
    title: "Flite Signs",
    subtitle: "Operational Software for Architectural Signage",
    description:
      "Operational tooling that translates manual signage workflows into software: client intake, quoting, order tracking, and internal status pipeline.",
    role: "Product Engineer",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
  },
} as const

export type ProjectSlug = keyof typeof projectMeta
