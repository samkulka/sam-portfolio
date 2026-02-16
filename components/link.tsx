import { cn } from "@/lib/utils"
import NextLink from "next/link"

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function Link({ href, children, className, external }: LinkProps) {
  const classes = cn(
    "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground dark:text-dark-foreground dark:decoration-dark-border dark:hover:decoration-dark-foreground",
    className
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={classes}>
      {children}
    </NextLink>
  )
}
