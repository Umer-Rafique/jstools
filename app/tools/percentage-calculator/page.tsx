import type { Metadata } from "next"
import { PercentageCalculatorTool } from "@/components/tools/percentage-calculator-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Percentage Calculator [2025] - Calculate Percentages Online",
  description:
    "Free online percentage calculator. Calculate percentages, percentage increase/decrease, and percentage of a number. Easy to use with instant results.",
  keywords: "percentage calculator, percent calculator, percentage increase, percentage decrease, math calculator",
}

export default function PercentageCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Percentage Calculator</h1>
              <p className="text-xl text-gray-600 mb-8">
                Calculate percentages, percentage increases, decreases, and percentage of numbers with our free online
                calculator.
              </p>

              <PercentageCalculatorTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Calculator</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Choose the type of calculation you want to perform</li>
                  <li>Enter the required numbers in the input fields</li>
                  <li>The result will be calculated automatically</li>
                  <li>Use the copy button to copy results to your clipboard</li>
                </ol>

                <h3 className="text-xl font-semibold mt-8 mb-4">Calculation Types</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>What is X% of Y:</strong> Find a percentage of a number
                  </li>
                  <li>
                    <strong>X is what % of Y:</strong> Find what percentage one number is of another
                  </li>
                  <li>
                    <strong>Percentage Change:</strong> Calculate increase or decrease between two numbers
                  </li>
                </ul>
              </div>
            </div>

            <RelatedTools currentTool="percentage-calculator" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
