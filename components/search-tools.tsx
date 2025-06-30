"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import Link from "next/link"
import { FileText, Smile, Type, Instagram, Calculator, Palette, Hash, Clock } from "lucide-react"

const allTools = [
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, and paragraphs in your text",
    icon: FileText,
    href: "/tools/word-counter",
    category: "Text Tools",
    keywords: ["word", "count", "character", "text", "paragraph", "writing"],
  },
  {
    id: "text-to-emoji",
    name: "Text to Emoji Converter",
    description: "Convert your text into fun emoji representations",
    icon: Smile,
    href: "/tools/text-to-emoji",
    category: "Text Tools",
    keywords: ["emoji", "text", "convert", "fun", "social", "media"],
  },
  {
    id: "name-styler",
    name: "Name Styler",
    description: "Create stylized versions of names and text",
    icon: Type,
    href: "/tools/name-styler",
    category: "Text Tools",
    keywords: ["name", "style", "font", "fancy", "text", "unicode"],
  },
  {
    id: "instagram-bio-generator",
    name: "Instagram Bio Generator",
    description: "Generate creative Instagram bio ideas instantly",
    icon: Instagram,
    href: "/tools/instagram-bio-generator",
    category: "Social Media",
    keywords: ["instagram", "bio", "social", "media", "profile", "generator"],
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages, increases, and decreases",
    icon: Calculator,
    href: "/tools/percentage-calculator",
    category: "Math Tools",
    keywords: ["percentage", "calculator", "math", "percent", "increase", "decrease"],
  },
  {
    id: "color-palette-generator",
    name: "Color Palette Generator",
    description: "Generate beautiful color palettes for your projects",
    icon: Palette,
    href: "/tools/color-palette-generator",
    category: "Design Tools",
    keywords: ["color", "palette", "design", "hex", "rgb", "generator"],
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, and SHA256 hashes",
    icon: Hash,
    href: "/tools/hash-generator",
    category: "Developer Tools",
    keywords: ["hash", "md5", "sha1", "sha256", "encryption", "developer"],
  },
  {
    id: "timestamp-converter",
    name: "Timestamp Converter",
    description: "Convert between timestamps and human-readable dates",
    icon: Clock,
    href: "/tools/timestamp-converter",
    category: "Developer Tools",
    keywords: ["timestamp", "date", "time", "unix", "converter", "developer"],
  },
]

export function SearchTools() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTools, setFilteredTools] = useState<typeof allTools>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTools([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const query = searchQuery.toLowerCase()

    const filtered = allTools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.keywords.some((keyword) => keyword.toLowerCase().includes(query))
      )
    })

    setFilteredTools(filtered)
  }, [searchQuery])

  const clearSearch = () => {
    setSearchQuery("")
    setFilteredTools([])
    setIsSearching(false)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search for tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 max-h-96 overflow-y-auto">
          {filteredTools.length > 0 ? (
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-3">
                Found {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""}
              </div>
              <div className="space-y-2">
                {filteredTools.map((tool) => {
                  const IconComponent = tool.icon
                  return (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                      onClick={clearSearch}
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg mr-3">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{tool.name}</div>
                        <div className="text-sm text-gray-500">{tool.description}</div>
                      </div>
                      <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{tool.category}</div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <div className="text-lg font-medium mb-2">No tools found</div>
              <div className="text-sm">Try searching with different keywords</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
