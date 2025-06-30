import type { Metadata } from "next"
import { TextToEmojiTool } from "@/components/tools/text-to-emoji-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Text to Emoji Converter [2025] - Convert Text to Emojis",
  description:
    "Convert your text into fun emoji representations instantly. Free online tool to transform words into emojis. Perfect for social media and creative content.",
  keywords: "text to emoji, emoji converter, text emoji generator, emoji translator, free emoji tool",
}

export default function TextToEmojiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Text to Emoji Converter</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your text into fun emoji representations. Perfect for social media posts, creative content,
                and adding personality to your messages.
              </p>

              <TextToEmojiTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Type or paste your text in the input field above</li>
                  <li>Watch as common words are automatically converted to emojis</li>
                  <li>Copy the emoji-converted text to use in your social media posts</li>
                  <li>Experiment with different words to see various emoji combinations</li>
                </ol>
              </div>
            </div>

            <RelatedTools currentTool="text-to-emoji" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
