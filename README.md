# samkulka.com

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, MDX, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new project

1. Create a new MDX file in `content/work/` (e.g., `content/work/my-project.mdx`).
2. Add frontmatter at the top:

```yaml
---
title: "Project Name"
description: "One-line description."
date: "2024-01"
role: "Your Role"
stack:
  - TypeScript
  - React
links:
  - label: "Live Site"
    href: "https://example.com"
order: 4
---
```

3. Write the case study body in MDX below the frontmatter.
4. The project will automatically appear on `/work` and at `/work/my-project`.

The `order` field controls sort order on the work index page (lower numbers appear first).

## Updating navigation and social links

- **Navigation links:** Edit the `links` array in `components/navbar.tsx`.
- **Footer social links:** Edit the `socials` array in `components/footer.tsx`.
- **Contact page channels:** Edit the `channels` array in `app/contact/contact-content.tsx`.

## Resume

If you place a `resume.pdf` file in the `public/` directory, the resume page will show a "Download PDF" button linking to it. Otherwise, the page renders a structured resume with editable placeholder sections in `app/resume/resume-content.tsx`.

## Project structure

```
app/                  # Next.js App Router pages
  about/
  contact/
  resume/
  work/
    [slug]/           # Dynamic project pages (from MDX)
components/           # Reusable UI components
content/work/         # MDX case study files
lib/                  # Utilities, MDX pipeline, fonts
public/               # Static assets
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- MDX (via next-mdx-remote)
- rehype-pretty-code (syntax highlighting)
- next-themes (dark mode)

## Build

```bash
npm run build
```

## Deploy

Optimized for Vercel. Push to a connected repo and it deploys automatically.
