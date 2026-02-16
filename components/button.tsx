import { cn } from "@/lib/utils"
import Link from "next/link"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  external?: boolean
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200"

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] dark:bg-dark-accent dark:text-dark-accent-foreground dark:hover:bg-dark-accent/90",
    secondary:
      "border border-border text-foreground hover:bg-surface-hover hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] dark:border-dark-border dark:text-dark-foreground dark:hover:bg-dark-surface-hover",
    ghost:
      "text-muted hover:text-foreground hover:bg-surface-hover/50 active:scale-[0.98] dark:text-dark-muted dark:hover:text-dark-foreground dark:hover:bg-dark-surface-hover/50",
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
