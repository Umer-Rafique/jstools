import type { Metadata } from "next"
import { InstagramBioGeneratorTool } from "@/components/tools/instagram-bio-generator-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Instagram Bio Generator [2025] - Create Perfect Instagram Bios",
  description:
    "Generate creative Instagram bio ideas instantly. Free tool to create engaging, unique Instagram bios for personal and business profiles. No login required.",
  keywords: "instagram bio generator, instagram bio ideas, bio generator, social media bio, instagram profile bio",
}

export default function InstagramBioGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Instagram Bio Generator</h1>
              <p className="text-xl text-gray-600 mb-8">
                Generate creative and engaging Instagram bio ideas instantly. Perfect for personal profiles, business
                accounts, and influencers looking to make a great first impression.
              </p>

              <InstagramBioGeneratorTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Select your profile type (Personal, Business, or Creative)</li>
                  <li>Choose your preferred tone and style</li>
                  <li>Click "Generate Bio" to create multiple bio options</li>
                  <li>Copy your favorite bio and paste it into your Instagram profile</li>
                  <li>Customize further if needed to match your personality or brand</li>
                </ol>

                <h3 className="text-xl font-semibold mt-8 mb-4">Tips for Great Instagram Bios</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Keep it concise - you have 150 characters max</li>
                  <li>Use emojis to add personality and save space</li>
                  <li>Include a call-to-action or link</li>
                  <li>Show your personality or brand voice</li>
                  <li>Update regularly to keep it fresh</li>
                </ul>
              </div>
            </div>

            <RelatedTools currentTool="instagram-bio-generator" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bio Examples</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Personal:</p>
                  <p className="text-gray-600">
                    ✨ Living my best life
                    <br />📍 NYC
                    <br />☕ Coffee enthusiast
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Business:</p>
                  <p className="text-gray-600">
                    🏢 Digital Marketing Agency
                    <br />📈 Growing brands online
                    <br />👇 Get your free consultation
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Creative:</p>
                  <p className="text-gray-600">
                    🎨 Artist & Dreamer
                    <br />🌙 Creating magic daily
                    <br />💫 Commission work available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
