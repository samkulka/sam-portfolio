import type { Metadata } from "next"
import { Container } from "@/components/container"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Technical Product Manager based in Austin, focused on building data and AI products that solve complex operational problems.",
}

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <AboutContent />
    </Container>
  )
}
