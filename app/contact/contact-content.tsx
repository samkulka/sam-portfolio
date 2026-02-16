"use client"

import { FadeIn } from "@/components/motion"
import { Divider } from "@/components/divider"

const channels = [
  {
    label: "Email",
    value: "samkulka98@gmail.com",
    href: "mailto:samkulka98@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/samkulka",
    href: "https://linkedin.com/in/samkulka",
  },
  {
    label: "Location",
    value: "Austin, TX",
    href: "https://maps.google.com/?q=Austin,TX",
  },
]

export function ContactContent() {
  return (
    <>
      <FadeIn>
        <h1 className="text-3xl font-bold tracking-tight text-foreground dark:text-dark-foreground">
          Contact
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-4 max-w-lg text-muted dark:text-dark-muted">
          Interested in working together, have a question about a project, or just
          want to connect? Reach out through any of the channels below.
        </p>
      </FadeIn>

      <Divider className="my-10" />

      <FadeIn delay={0.2}>
        <div className="space-y-6">
          {channels.map(({ label, value, href }) => (
            <div key={label}>
              <p className="text-sm font-medium text-muted dark:text-dark-muted">
                {label}
              </p>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-1 block text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground dark:text-dark-foreground dark:decoration-dark-border dark:hover:decoration-dark-foreground"
              >
                {value}
              </a>
            </div>
          ))}
        </div>
      </FadeIn>
    </>
  )
}
