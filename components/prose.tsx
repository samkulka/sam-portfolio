import { cn } from "@/lib/utils"

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-custom",
        "[&>*]:mx-auto [&>*]:max-w-none",
        // Headings
        "[&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-foreground dark:[&>h2]:text-dark-foreground",
        "[&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground dark:[&>h3]:text-dark-foreground",
        "[&>h4]:mt-6 [&>h4]:mb-2 [&>h4]:text-base [&>h4]:font-semibold [&>h4]:text-foreground dark:[&>h4]:text-dark-foreground",
        // Paragraphs
        "[&>p]:mb-5 [&>p]:text-[0.9375rem] [&>p]:leading-relaxed [&>p]:text-muted dark:[&>p]:text-dark-muted",
        // Lists
        "[&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-[0.9375rem] [&>ul]:leading-relaxed [&>ul]:text-muted dark:[&>ul]:text-dark-muted",
        "[&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:text-[0.9375rem] [&>ol]:leading-relaxed [&>ol]:text-muted dark:[&>ol]:text-dark-muted",
        "[&_li]:mb-1.5",
        // Strong
        "[&_strong]:font-semibold [&_strong]:text-foreground dark:[&_strong]:text-dark-foreground",
        // Links
        "[&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:decoration-foreground dark:[&_a]:text-dark-foreground dark:[&_a]:decoration-dark-border dark:hover:[&_a]:decoration-dark-foreground",
        // Blockquotes
        "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted dark:[&>blockquote]:border-dark-border dark:[&>blockquote]:text-dark-muted",
        // HR
        "[&>hr]:my-10 [&>hr]:border-border dark:[&>hr]:border-dark-border",
        // Images
        "[&>img]:my-8 [&>img]:rounded-lg [&>img]:border [&>img]:border-border dark:[&>img]:border-dark-border",
        className
      )}
    >
      {children}
    </div>
  )
}
