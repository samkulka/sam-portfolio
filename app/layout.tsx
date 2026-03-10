import type { Metadata } from "next"
import { geistSans, geistMono } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://samkulka.com"),
  title: {
    default: "Sam Kulka - Technical Product Manager & Engineer",
    template: "%s | Sam Kulka",
  },
  description:
    "Technical Product Manager based in Austin, focused on building data and AI products that solve complex operational problems.",
  openGraph: {
    title: "Sam Kulka - Technical Product Manager & Engineer",
    description:
      "Technical Product Manager based in Austin, focused on building data and AI products that solve complex operational problems.",
    url: "https://samkulka.com",
    siteName: "Sam Kulka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Kulka - Technical Product Manager & Engineer",
    description:
      "Technical Product Manager based in Austin, focused on building data and AI products that solve complex operational problems.",
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
          <div className="bg-ribbons" aria-hidden="true">
            <div className="bg-ribbon-accent" />
          </div>
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
