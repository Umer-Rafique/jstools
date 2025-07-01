import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Head from "next/head"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tools - Free Online Tools for Everyone",
  description:
    "Access free online tools including Word Counter, Text to Emoji Converter, Name Styler, Instagram Bio Generator, Percentage Calculator, and more. No login required, completely free to use.",
  keywords:
    "free online tools, word counter, text tools, emoji converter, name styler, instagram bio generator, percentage calculator, color palette generator, hash generator, timestamp converter",
  authors: [{name: "tools"}],
  openGraph: {
    title: "Tools - Free Online Tools for Everyone",
    description:
      "Access free online tools including Word Counter, Text to Emoji Converter, Name Styler, Instagram Bio Generator, and more.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools - Free Online Tools for Everyone",
    description:
      "Access free online tools including Word Counter, Text to Emoji Converter, Name Styler, Instagram Bio Generator, Percentage Calculator, and more. No login required, completely free to use.",
    creator: "@Tools",
    images: ["/favicon.ico"]
  },
  metadataBase: new URL("https://tools.10silicon.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  themeColor: "#ffffff",
  appleWebApp: {
    title: "Tools"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tools",
    url: "./android-chrome-512x512.png",
    logo: "/favicon.ico"
  }
  return (
    <html lang="en">
      <Head>
        <title>Ruyaat – Visionary Learning Platform</title>
        <meta
          name="description"
          content="Ruyaat blends ancient wisdom with modern education."
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </Head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
