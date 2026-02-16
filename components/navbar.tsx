"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md dark:border-dark-border dark:bg-dark-background/80">
      <Container>
        <nav className="flex h-14 items-center justify-between" aria-label="Main navigation">
          <NextLink
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground dark:text-dark-foreground"
          >
            Sam Kulka
          </NextLink>
          <div className="flex items-center gap-1">
            {links.map(({ href, label }) => (
              <NextLink
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-foreground dark:text-dark-foreground"
                    : "text-muted hover:text-foreground dark:text-dark-muted dark:hover:text-dark-foreground"
                )}
              >
                {label}
              </NextLink>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
