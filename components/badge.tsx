import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground/70 transition-colors dark:border-dark-border dark:text-dark-foreground/70",
        className
      )}
    >
      {children}
    </span>
  )
}
