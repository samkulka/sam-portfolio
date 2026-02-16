interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
