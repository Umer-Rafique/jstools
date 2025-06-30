import type { Metadata } from "next"
import { HashGeneratorTool } from "@/components/tools/hash-generator-tool"
import { AdBanner } from "@/components/ad-banner"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Free Hash Generator [2025] - MD5, SHA1, SHA256 Hash Calculator",
  description:
    "Generate MD5, SHA1, SHA256, and other hash values for text and files. Free online hash generator tool for developers and security professionals.",
  keywords: "hash generator, md5 generator, sha1 generator, sha256 generator, hash calculator, encryption tool",
}

export default function HashGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Hash Generator</h1>
              <p className="text-xl text-gray-600 mb-8">
                Generate MD5, SHA1, SHA256, and other hash values for your text. Perfect for developers, security
                professionals, and data verification.
              </p>

              <HashGeneratorTool />
            </div>

            <AdBanner position="inline" className="mb-8" />

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
              <div className="prose max-w-none">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Enter your text in the input field</li>
                  <li>Select the hash algorithm you want to use</li>
                  <li>The hash will be generated automatically</li>
                  <li>Copy the hash value using the copy button</li>
                </ol>

                <h3 className="text-xl font-semibold mt-8 mb-4">Hash Algorithms</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>MD5:</strong> 128-bit hash, commonly used but not cryptographically secure
                  </li>
                  <li>
                    <strong>SHA1:</strong> 160-bit hash, deprecated for security applications
                  </li>
                  <li>
                    <strong>SHA256:</strong> 256-bit hash, part of SHA-2 family, cryptographically secure
                  </li>
                  <li>
                    <strong>SHA512:</strong> 512-bit hash, stronger variant of SHA-2
                  </li>
                </ul>
              </div>
            </div>

            <RelatedTools currentTool="hash-generator" />
          </div>

          <div className="lg:col-span-1">
            <AdBanner position="sidebar" className="mb-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
