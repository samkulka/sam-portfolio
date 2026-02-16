import type { Metadata } from "next"
import { Container } from "@/components/container"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sam Kulka.",
}

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <ContactContent />
    </Container>
  )
}
