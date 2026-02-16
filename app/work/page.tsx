import type { Metadata } from "next"
import { getProjects } from "@/lib/mdx"
import { Container } from "@/components/container"
import { WorkIndex } from "./work-index"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects spanning AI-powered tools, ticketing platforms, and operational software.",
}

export default function WorkPage() {
  const projects = getProjects()

  return (
    <Container className="py-16 md:py-24">
      <WorkIndex projects={projects} />
    </Container>
  )
}
