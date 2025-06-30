import Link from "next/link"
import { FileText, Smile, Type, Instagram, Calculator, Palette, Hash, Clock } from "lucide-react"

const tools = [
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, and paragraphs in your text",
    icon: FileText,
    href: "/tools/word-counter",
    category: "Text Tools",
  },
  {
    id: "text-to-emoji",
    name: "Text to Emoji Converter",
    description: "Convert your text into fun emoji representations",
    icon: Smile,
    href: "/tools/text-to-emoji",
    category: "Text Tools",
  },
  {
    id: "name-styler",
    name: "Name Styler",
    description: "Create stylized versions of names and text",
    icon: Type,
    href: "/tools/name-styler",
    category: "Text Tools",
  },
  {
    id: "instagram-bio-generator",
    name: "Instagram Bio Generator",
    description: "Generate creative Instagram bio ideas instantly",
    icon: Instagram,
    href: "/tools/instagram-bio-generator",
    category: "Social Media",
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages, increases, and decreases",
    icon: Calculator,
    href: "/tools/percentage-calculator",
    category: "Math Tools",
  },
  {
    id: "color-palette-generator",
    name: "Color Palette Generator",
    description: "Generate beautiful color palettes for your projects",
    icon: Palette,
    href: "/tools/color-palette-generator",
    category: "Design Tools",
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, and SHA256 hashes",
    icon: Hash,
    href: "/tools/hash-generator",
    category: "Developer Tools",
  },
  {
    id: "timestamp-converter",
    name: "Timestamp Converter",
    description: "Convert between timestamps and human-readable dates",
    icon: Clock,
    href: "/tools/timestamp-converter",
    category: "Developer Tools",
  },
]

export function ToolsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">All Tools</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of free online tools designed to make your tasks easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Link key={tool.id} href={tool.href} className="tool-card group">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-xl mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <span className="text-sm text-gray-500">{tool.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <button className="btn-primary w-full">Open Tool</button>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
