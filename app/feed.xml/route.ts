import { getProjects } from "@/lib/mdx"

export function GET() {
  const projects = getProjects()
  const base = "https://samkulka.com"

  const items = projects
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.frontmatter.title)}</title>
      <link>${base}/work/${p.slug}</link>
      <description>${escapeXml(p.frontmatter.description)}</description>
      <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
      <guid>${base}/work/${p.slug}</guid>
    </item>`
    )
    .join("")

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sam Kulka - Work</title>
    <link>${base}</link>
    <description>Selected projects by Sam Kulka, full stack product engineer.</description>
    <language>en-us</language>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
