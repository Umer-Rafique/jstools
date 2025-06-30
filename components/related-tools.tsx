import Link from "next/link"
import { FileText, Smile, Type, Instagram, Calculator, Palette, Hash, Clock } from "lucide-react"

const allTools = [
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, and paragraphs",
    icon: FileText,
    href: "/tools/word-counter",
  },
  {
    id: "text-to-emoji",
    name: "Text to Emoji",
    description: "Convert text to emoji representations",
    icon: Smile,
    href: "/tools/text-to-emoji",
  },
  {
    id: "name-styler",
    name: "Name Styler",
    description: "Create stylized versions of names",
    icon: Type,
    href: "/tools/name-styler",
  },
  {
    id: "instagram-bio-generator",
    name: "Instagram Bio Generator",
    description: "Generate creative Instagram bios",
    icon: Instagram,
    href: "/tools/instagram-bio-generator",
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages and ratios",
    icon: Calculator,
    href: "/tools/percentage-calculator",
  },
  {
    id: "color-palette-generator",
    name: "Color Palette Generator",
    description: "Generate beautiful color schemes",
    icon: Palette,
    href: "/tools/color-palette-generator",
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, SHA256 hashes",
    icon: Hash,
    href: "/tools/hash-generator",
  },
  {
    id: "timestamp-converter",
    name: "Timestamp Converter",
    description: "Convert timestamps to dates",
    icon: Clock,
    href: "/tools/timestamp-converter",
  },
]

interface RelatedToolsProps {
  currentTool: string
}

export function RelatedTools({ currentTool }: RelatedToolsProps) {
  const relatedTools = allTools.filter((tool) => tool.id !== currentTool).slice(0, 3)

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedTools.map((tool) => {
          const IconComponent = tool.icon
          return (
            <Link key={tool.id} href={tool.href} className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-xl w-fit mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
