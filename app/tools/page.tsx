import type { Metadata } from "next"
import { ToolsGrid } from "@/components/tools-grid"
import { AdBanner } from "@/components/ad-banner"
import { SearchTools } from "@/components/search-tools"

export const metadata: Metadata = {
  title: "All Tools - Free Online Tools Collection | AFT(All Free Tools)",
  description:
    "Browse our complete collection of free online tools. Text tools, math calculators, design utilities, developer tools, and social media generators.",
  keywords: "online tools, free tools, text tools, calculators, generators, utilities",
}

export default function AllToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tools</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our complete collection of free online tools designed to make your tasks easier
          </p>
          <SearchTools />
        </div>

        <AdBanner position="top" className="mb-8" />
        <ToolsGrid />
        <AdBanner position="bottom" className="mt-8" />
      </div>
    </div>
  )
}
