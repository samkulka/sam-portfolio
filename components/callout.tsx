import { cn } from "@/lib/utils"

interface CalloutProps {
  children: React.ReactNode
  type?: "info" | "warning" | "note"
  className?: string
}

export function Callout({ children, type = "note", className }: CalloutProps) {
  const icons = {
    info: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.068 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    note: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  }

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border border-border bg-surface p-4 text-sm dark:border-dark-border dark:bg-dark-surface",
        className
      )}
      role="note"
    >
      <span className="mt-0.5 shrink-0 text-muted dark:text-dark-muted">{icons[type]}</span>
      <div className="min-w-0 text-muted dark:text-dark-muted [&>p]:m-0">{children}</div>
    </div>
  )
}
