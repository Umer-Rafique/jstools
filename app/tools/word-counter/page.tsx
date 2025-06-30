import type { Metadata } from "next"
import { WordCounterTool } from "@/components/tools/word-counter-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Online Word Counter Tool [2025] - Count Words, Characters & Paragraphs",
  description:
    "Free word counter tool to count words, characters, paragraphs, and reading time. No registration required. Perfect for writers, students, and content creators.",
  keywords: "word counter, character counter, text counter, word count tool, free word counter",
}

export default function WordCounterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Online Word Counter Tool</h1>
              <p className="text-xl text-gray-600 mb-8">
                Count words, characters, paragraphs, and estimate reading time instantly. Perfect for writers, students,
                and content creators.
              </p>

              <WordCounterTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            {/* How to Use Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>
                    <strong>Paste or type your text</strong> in the text area above. The tool works in real-time, so
                    you'll see the counts update as you type.
                  </li>
                  <li>
                    <strong>View instant statistics</strong> including word count, character count (with and without
                    spaces), paragraph count, and estimated reading time.
                  </li>
                  <li>
                    <strong>Use for various purposes</strong> such as checking essay word limits, social media character
                    limits, or estimating blog post reading times.
                  </li>
                  <li>
                    <strong>Copy your text</strong> using the copy button when you're done editing and analyzing.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold mt-8 mb-4">Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Real-time word and character counting</li>
                  <li>Paragraph and sentence counting</li>
                  <li>Reading time estimation</li>
                  <li>Character count with and without spaces</li>
                  <li>Works offline - no data sent to servers</li>
                  <li>Mobile-friendly responsive design</li>
                </ul>
              </div>
            </div>

            <RelatedTools currentTool="word-counter" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    1
                  </span>
                  Use this tool to check if your content meets specific word count requirements
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    2
                  </span>
                  Reading time is calculated at 200 words per minute average
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    3
                  </span>
                  All processing happens in your browser - your text stays private
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
