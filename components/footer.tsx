import { Container } from "./container"

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/samkulka" },
  { label: "Email", href: "mailto:samkulka98@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10 dark:border-dark-border">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted dark:text-dark-muted">
            &copy; {new Date().getFullYear()} Sam Kulka
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground dark:text-dark-muted dark:hover:text-dark-foreground"
              >
                {label}
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
