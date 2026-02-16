import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import { useMDXComponents } from "@/components/mdx-components"

const contentDir = path.join(process.cwd(), "content/work")

export interface ProjectFrontmatter {
  title: string
  description: string
  date: string
  role: string
  stack: string[]
  links?: { label: string; href: string }[]
  order?: number
}

export interface Project {
  slug: string
  frontmatter: ProjectFrontmatter
}

export function getProjects(): Project[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))

  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8")
    const { data } = matter(raw)
    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
    }
  })

  return projects.sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99))
}

export async function getProject(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  const components = useMDXComponents()

  const { content: mdxContent } = await compileMDX({
    source: content,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode as never,
            {
              theme: {
                dark: "github-dark",
                light: "github-light",
              },
              keepBackground: false,
            },
          ],
        ],
      },
    },
  })

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content: mdxContent,
  }
}
