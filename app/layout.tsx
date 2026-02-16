import type { Metadata } from "next"
import { geistSans, geistMono } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://samkulka.com"),
  title: {
    default: "Sam Kulka - AI-Data Engineer & Full Stack Builder",
    template: "%s | Sam Kulka",
  },
  description:
    "AI-focused data engineer and full stack builder. Intelligent data systems, AI-powered platforms, and production software, end to end.",
  openGraph: {
    title: "Sam Kulka - AI-Data Engineer & Full Stack Builder",
    description:
      "AI-focused data engineer and full stack builder. Intelligent data systems, AI-powered platforms, and production software, end to end.",
    url: "https://samkulka.com",
    siteName: "Sam Kulka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Kulka - AI-Data Engineer & Full Stack Builder",
    description:
      "AI-focused data engineer and full stack builder. Intelligent data systems, AI-powered platforms, and production software, end to end.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="min-h-[calc(100vh-3.5rem)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
