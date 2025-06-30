import type { Metadata } from "next"
import { TimestampConverterTool } from "@/components/tools/timestamp-converter-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Timestamp Converter [2025] - Unix Timestamp to Date Converter",
  description:
    "Convert between Unix timestamps and human-readable dates. Free online timestamp converter tool for developers and data analysts.",
  keywords: "timestamp converter, unix timestamp, epoch converter, date converter, time converter, developer tools",
}

export default function TimestampConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Timestamp Converter</h1>
              <p className="text-xl text-gray-600 mb-8">
                Convert between Unix timestamps and human-readable dates. Perfect for developers, data analysts, and
                anyone working with time data.
              </p>

              <TimestampConverterTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Enter a Unix timestamp to convert to a readable date</li>
                  <li>Or select a date and time to convert to a Unix timestamp</li>
                  <li>Choose your preferred timezone</li>
                  <li>Copy the converted result</li>
                </ol>

                <h3 className="text-xl font-semibold mt-8 mb-4">What is a Unix Timestamp?</h3>
                <p className="text-gray-700">
                  A Unix timestamp is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC. It's
                  commonly used in programming and databases to represent dates and times.
                </p>
              </div>
            </div>

            <RelatedTools currentTool="timestamp-converter" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
