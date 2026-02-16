"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-[border-color,box-shadow] duration-300 dark:bg-dark-background/80",
        scrolled
          ? "border-border shadow-sm dark:border-dark-border dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
          : "border-transparent"
      )}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between" aria-label="Main navigation">
          <NextLink
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground dark:text-dark-foreground"
          >
            Sam Kulka
          </NextLink>
          <div className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/")
              return (
                <NextLink
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-foreground dark:text-dark-foreground"
                      : "text-muted hover:text-foreground dark:text-dark-muted dark:hover:text-dark-foreground"
                  )}
                >
                  {label}
                  {isActive && (
                    <span className="absolute inset-x-1.5 -bottom-[7px] h-px bg-foreground dark:bg-dark-foreground" />
                  )}
                </NextLink>
              )
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
