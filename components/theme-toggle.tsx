"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [spinning, setSpinning] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggle = () => {
    setSpinning(true)
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setTimeout(() => setSpinning(false), 300)
  }

  if (!mounted) {
    return (
      <button className="h-9 w-9 rounded-md" aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface-hover hover:text-foreground dark:border-dark-border dark:text-dark-muted dark:hover:bg-dark-surface-hover dark:hover:text-dark-foreground"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <span className={cn("inline-flex transition-transform duration-300", spinning && "rotate-180")}>
        {resolvedTheme === "dark" ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1.5v1M8 13.5v1M13.5 8h1M1.5 8h1M11.89 4.11l.7-.7M3.41 12.59l.7-.7M11.89 11.89l.7.7M3.41 3.41l.7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8.5a6 6 0 0 1-7.5 5.81A6 6 0 0 1 8.19 2 6 6 0 0 0 14 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  )
}
