import type { Metadata } from "next"
import { ColorPaletteGeneratorTool } from "@/components/tools/color-palette-generator-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Color Palette Generator [2025] - Create Beautiful Color Schemes",
  description:
    "Generate beautiful color palettes for your design projects. Free online color palette generator with hex codes, RGB values, and export options.",
  keywords: "color palette generator, color scheme, hex colors, rgb colors, design colors, color picker",
}

export default function ColorPaletteGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Palette Generator</h1>
              <p className="text-xl text-gray-600 mb-8">
                Generate beautiful color palettes for your design projects. Get hex codes, RGB values, and create
                harmonious color schemes.
              </p>

              <ColorPaletteGeneratorTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Choose a base color using the color picker or enter a hex code</li>
                  <li>Select a color harmony type (complementary, triadic, etc.)</li>
                  <li>Click "Generate Palette" to create a color scheme</li>
                  <li>Copy individual color codes or export the entire palette</li>
                </ol>
              </div>
            </div>

            <RelatedTools currentTool="color-palette-generator" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
