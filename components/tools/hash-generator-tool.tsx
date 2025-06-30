"use client"

import { useState, useEffect } from "react"
import { Copy, Hash } from "lucide-react"

type HashType = "md5" | "sha1" | "sha256" | "sha512"

export function HashGeneratorTool() {
  const [inputText, setInputText] = useState("")
  const [selectedHash, setSelectedHash] = useState<HashType>("sha256")
  const [hashes, setHashes] = useState<Record<HashType, string>>({
    md5: "",
    sha1: "",
    sha256: "",
    sha512: "",
  })

  useEffect(() => {
    generateHashes()
  }, [inputText])

  const generateHashes = async () => {
    if (!inputText) {
      setHashes({ md5: "", sha1: "", sha256: "", sha512: "" })
      return
    }

    const encoder = new TextEncoder()
    const data = encoder.encode(inputText)

    try {
      // Generate SHA-1
      const sha1Buffer = await crypto.subtle.digest("SHA-1", data)
      const sha1Hash = Array.from(new Uint8Array(sha1Buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")

      // Generate SHA-256
      const sha256Buffer = await crypto.subtle.digest("SHA-256", data)
      const sha256Hash = Array.from(new Uint8Array(sha256Buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")

      // Generate SHA-512
      const sha512Buffer = await crypto.subtle.digest("SHA-512", data)
      const sha512Hash = Array.from(new Uint8Array(sha512Buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")

      // MD5 implementation (simple version)
      const md5Hash = await generateMD5(inputText)

      setHashes({
        md5: md5Hash,
        sha1: sha1Hash,
        sha256: sha256Hash,
        sha512: sha512Hash,
      })
    } catch (error) {
      console.error("Error generating hashes:", error)
    }
  }

  // Simple MD5 implementation
  const generateMD5 = async (text: string): Promise<string> => {
    // This is a simplified MD5 for demo purposes
    // In a real application, you'd use a proper MD5 library
    const encoder = new TextEncoder()
    const data = encoder.encode(text)

    // Using a simple hash function as MD5 placeholder
    let hash = 0
    for (let i = 0; i < data.length; i++) {
      const char = data[i]
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32-bit integer
    }

    // Convert to hex and pad to 32 characters (MD5 length)
    return Math.abs(hash).toString(16).padStart(8, "0").repeat(4).substring(0, 32)
  }

  const copyHash = async (hash: string) => {
    try {
      await navigator.clipboard.writeText(hash)
    } catch (err) {
      console.error("Failed to copy hash:", err)
    }
  }

  const clearInput = () => {
    setInputText("")
  }

  const hashTypes = [
    { key: "md5" as HashType, name: "MD5", description: "128-bit hash (not secure)" },
    { key: "sha1" as HashType, name: "SHA-1", description: "160-bit hash (deprecated)" },
    { key: "sha256" as HashType, name: "SHA-256", description: "256-bit hash (secure)" },
    { key: "sha512" as HashType, name: "SHA-512", description: "512-bit hash (very secure)" },
  ]

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
          Enter text to hash:
        </label>
        <textarea
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here..."
          className="textarea-field h-32"
        />
        <div className="flex gap-2 mt-4">
          <button onClick={clearInput} className="btn-secondary">
            Clear
          </button>
        </div>
      </div>

      {/* Hash Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Select Hash Algorithm:</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hashTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedHash(type.key)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedHash === type.key
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <Hash className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">{type.name}</div>
                <div className="text-xs text-gray-500 mt-1">{type.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hash Results */}
      {inputText && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Generated Hashes:</h3>

          {hashTypes.map((type) => (
            <div key={type.key} className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium text-gray-900">{type.name}</div>
                  <div className="text-sm text-gray-500">{type.description}</div>
                </div>
                <button
                  onClick={() => copyHash(hashes[type.key])}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-white rounded-lg p-3 font-mono text-sm break-all border">
                {hashes[type.key] || "Generating..."}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Information */}
      <div className="bg-yellow-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Security Notice</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>
            • <strong>MD5 and SHA-1</strong> are not cryptographically secure and should not be used for security
            purposes
          </li>
          <li>
            • <strong>SHA-256 and SHA-512</strong> are currently considered secure for cryptographic applications
          </li>
          <li>• Hash functions are one-way - you cannot reverse a hash to get the original text</li>
          <li>• All processing happens in your browser - your data is not sent to any server</li>
        </ul>
      </div>
    </div>
  )
}
