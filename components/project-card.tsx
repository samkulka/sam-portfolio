"use client"

import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import NextLink from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  href: string
  role: string
  stack: string[]
  className?: string
}

export function ProjectCard({ title, description, href, role, stack, className }: ProjectCardProps) {
  return (
    <motion.div
      className="card-shimmer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <NextLink
        href={href}
        className={cn(
          "group block rounded-lg border border-border bg-surface p-6 transition-colors dark:border-dark-border dark:bg-dark-surface",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-foreground dark:text-dark-foreground">
              {title}
            </h3>
            <p className="mt-1 text-sm text-muted dark:text-dark-muted">{role}</p>
          </div>
          <svg
            className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 dark:text-dark-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted dark:text-dark-muted">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </NextLink>
    </motion.div>
  )
}
