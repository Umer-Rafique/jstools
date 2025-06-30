"use client"
import Link from "next/link"
import { SearchTools } from "@/components/search-tools"

const featuredTools = [
  { name: "Word Counter", href: "/tools/word-counter" },
  { name: "Text to Emoji", href: "/tools/text-to-emoji" },
  { name: "Name Styler", href: "/tools/name-styler" },
  { name: "Bio Generator", href: "/tools/instagram-bio-generator" },
]

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Free Online Tools
          <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            for Everyone
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          No login. No cost. Just simple tools to make your life easier. Access powerful utilities right in your
          browser.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchTools />
        </div>

        {/* Featured Tools */}
        <div className="flex flex-wrap justify-center gap-4">
          {featuredTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <span className="text-gray-700 font-medium">{tool.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
