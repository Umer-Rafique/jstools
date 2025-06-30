import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Toolify - Free Online Tools for Everyone",
  description:
    "Access free online tools including Word Counter, Text to Emoji Converter, Name Styler, Instagram Bio Generator, Percentage Calculator, and more. No login required, completely free to use.",
  keywords:
    "free online tools, word counter, text tools, emoji converter, name styler, instagram bio generator, percentage calculator, color palette generator, hash generator, timestamp converter",
  authors: [{ name: "Toolify" }],
  openGraph: {
    title: "Toolify - Free Online Tools for Everyone",
    description:
      "Access free online tools including Word Counter, Text to Emoji Converter, Name Styler, Instagram Bio Generator, and more.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
