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
                className="text-sm text-muted transition-colors hover:text-foreground dark:text-dark-muted dark:hover:text-dark-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
