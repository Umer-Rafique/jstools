import type { Metadata } from "next"
import { NameStylerTool } from "@/components/tools/name-styler-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Name Styler Tool [2025] - Create Stylized Text & Names",
  description:
    "Create stylized versions of names and text with different fonts and styles. Free online name styler tool for social media, gaming, and creative projects.",
  keywords: "name styler, text styler, fancy text generator, stylized names, text fonts, free name generator",
}

export default function NameStylerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Name Styler Tool</h1>
              <p className="text-xl text-gray-600 mb-8">
                Create stylized versions of names and text with different fonts and decorative styles. Perfect for
                social media profiles, gaming usernames, and creative projects.
              </p>

              <NameStylerTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Enter your name or text in the input field</li>
                  <li>Browse through the different style options generated automatically</li>
                  <li>Click on any style to copy it to your clipboard</li>
                  <li>Use the styled text in your social media profiles, gaming accounts, or creative projects</li>
                </ol>
              </div>
            </div>

            <RelatedTools currentTool="name-styler" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
