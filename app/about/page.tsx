import type { Metadata } from "next"
import { Container } from "@/components/container"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Full stack product engineer who builds data-driven platforms, AI-powered tools, and operational systems.",
}

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <AboutContent />
    </Container>
  )
}
