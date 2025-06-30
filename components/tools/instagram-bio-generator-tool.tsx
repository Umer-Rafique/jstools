"use client"

import { useState } from "react"
import { Copy, RefreshCw, Instagram } from "lucide-react"

const bioTemplates = {
  personal: {
    casual: [
      "✨ Living my best life\n📍 {location}\n☕ {hobby} enthusiast",
      "🌟 Just a {age}-year-old trying to figure it out\n💭 {quote}\n📱 DM for collabs",
      "🎯 Chasing dreams and good vibes\n🌍 {location}\n💫 {hobby} lover",
      "🌈 Spreading positivity daily\n📚 {interest} addict\n✌️ Peace, love, and {hobby}",
      "🦋 Growing and glowing\n🎨 {hobby} is my therapy\n💕 Living authentically",
    ],
    professional: [
      "🎓 {profession}\n📍 Based in {location}\n💼 Passionate about {interest}",
      "👔 {profession} by day\n🌟 {hobby} enthusiast by night\n📧 Contact: {email}",
      "💡 {profession} | {interest} advocate\n🌍 {location}\n📈 Always learning",
      "🏆 {profession}\n🎯 Helping others succeed\n📱 Let's connect!",
      "📊 {profession}\n💪 Fitness & {hobby} lover\n🌟 Inspiring others daily",
    ],
    inspirational: [
      "🌟 Be yourself, everyone else is taken\n💫 {hobby} | {interest}\n✨ Spreading good vibes",
      "🦋 Transformation in progress\n🌱 Growing every day\n💕 {hobby} is my passion",
      "🌈 Creating my own sunshine\n🎯 Dream big, work hard\n💪 {interest} enthusiast",
      "✨ Believe in your magic\n🌙 {hobby} under the stars\n💫 Living my truth",
      "🌟 Positive mind, positive life\n🎨 {hobby} is my escape\n💕 Grateful always",
    ],
  },
  business: {
    professional: [
      "🏢 {business_type}\n📈 Helping businesses grow\n👇 Get your free consultation",
      "💼 {business_type} | Est. {year}\n🎯 Your success is our mission\n📧 Contact us below",
      "🚀 {business_type}\n💡 Innovation meets excellence\n📱 DM for partnerships",
      "🏆 Award-winning {business_type}\n🌍 Serving clients worldwide\n👇 Learn more",
      "💪 {business_type}\n🎯 Transforming businesses daily\n📞 Book a call today",
    ],
    creative: [
      "🎨 Creative {business_type}\n✨ Bringing your vision to life\n💫 Portfolio below",
      "🌟 {business_type} with a twist\n🎭 Where creativity meets strategy\n📱 Let's create magic",
      "🦄 Unique {business_type}\n🌈 Making brands unforgettable\n💕 Work with us",
      "🎪 Fun {business_type}\n🎨 Serious about results\n🚀 Ready to stand out?",
      "✨ Boutique {business_type}\n🌙 Crafting experiences\n💫 Your brand deserves better",
    ],
    local: [
      "📍 Local {business_type} in {location}\n🏠 Serving our community since {year}\n📞 Call us today",
      "🌟 {location}'s favorite {business_type}\n👥 Family-owned & operated\n💕 Thank you for your support",
      "🏘️ Proudly serving {location}\n🤝 {business_type} you can trust\n📱 Book online or call",
      "📍 {location} {business_type}\n🌟 Quality service, every time\n👇 See what our customers say",
      "🏠 Your neighborhood {business_type}\n💪 {years}+ years of excellence\n📧 Get in touch",
    ],
  },
  creative: {
    artistic: [
      "🎨 Artist & Dreamer\n🌙 Creating magic daily\n💫 Commission work available",
      "✨ Visual storyteller\n🖼️ {art_type} artist\n📱 DM for custom pieces",
      "🌈 Color is my language\n🎭 {art_type} enthusiast\n💕 Art heals everything",
      "🦋 Creating beauty from chaos\n🎨 {art_type} | {location}\n✨ Available for projects",
      "🌟 Art is my religion\n🎪 {art_type} performer\n💫 Let's create together",
    ],
    influencer: [
      "📸 Content creator & storyteller\n🌟 Sharing my journey with you\n💕 Collab: {email}",
      "🎬 {niche} content creator\n📱 Inspiring {followers}+ daily\n👇 Latest video below",
      "✨ Lifestyle & {niche} creator\n🌍 Spreading positivity worldwide\n📧 Business: {email}",
      "🌟 {niche} influencer\n💫 Authentic content, real stories\n📱 Let's connect",
      "🦋 Digital storyteller\n🎯 {niche} tips & inspiration\n💕 Building community together",
    ],
    musician: [
      "🎵 Musician & songwriter\n🎸 {genre} is my soul\n🎧 New music dropping soon",
      "🎤 {genre} artist\n🌟 Music is my therapy\n📱 Stream my latest track",
      "🎶 Creating melodies that matter\n🎸 {genre} musician\n💫 Live shows coming",
      "🎵 Singer-songwriter\n🌙 {genre} under the stars\n🎧 Listen to my story",
      "🎤 {genre} artist & performer\n✨ Music heals everything\n📱 Book me for events",
    ],
  },
}

const placeholders = {
  location: ["NYC", "LA", "London", "Paris", "Tokyo", "Miami", "Austin", "Seattle"],
  hobby: ["photography", "travel", "fitness", "cooking", "reading", "yoga", "hiking", "dancing"],
  interest: ["technology", "sustainability", "wellness", "education", "innovation", "design", "music", "art"],
  profession: ["Designer", "Developer", "Marketer", "Consultant", "Teacher", "Writer", "Photographer", "Coach"],
  business_type: [
    "Marketing Agency",
    "Design Studio",
    "Consulting Firm",
    "Tech Startup",
    "Creative Agency",
    "Fitness Studio",
  ],
  art_type: ["digital", "watercolor", "portrait", "abstract", "street", "photography"],
  genre: ["indie", "pop", "rock", "jazz", "electronic", "folk", "hip-hop", "classical"],
  niche: ["lifestyle", "fitness", "travel", "food", "fashion", "tech", "beauty", "wellness"],
  age: ["20", "25", "30", "22", "28", "35"],
  year: ["2020", "2019", "2021", "2018", "2022"],
  followers: ["10K", "50K", "100K", "25K", "75K"],
  email: ["hello@email.com", "contact@business.com", "info@company.com"],
}

export function InstagramBioGeneratorTool() {
  const [profileType, setProfileType] = useState<"personal" | "business" | "creative">("personal")
  const [tone, setTone] = useState<string>("casual")
  const [generatedBios, setGeneratedBios] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const replacePlaceholders = (template: string): string => {
    let result = template

    Object.entries(placeholders).forEach(([key, values]) => {
      const placeholder = `{${key}}`
      if (result.includes(placeholder)) {
        const randomValue = values[Math.floor(Math.random() * values.length)]
        result = result.replace(new RegExp(placeholder, "g"), randomValue)
      }
    })

    return result
  }

  const generateBios = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const templates = bioTemplates[profileType][tone as keyof (typeof bioTemplates)[typeof profileType]] || []
      const shuffled = [...templates].sort(() => Math.random() - 0.5)
      const selected = shuffled.slice(0, 6)
      const processed = selected.map(replacePlaceholders)

      setGeneratedBios(processed)
      setIsGenerating(false)
    }, 1000)
  }

  const copyBio = async (bio: string) => {
    try {
      await navigator.clipboard.writeText(bio)
    } catch (err) {
      console.error("Failed to copy bio:", err)
    }
  }

  const getToneOptions = () => {
    switch (profileType) {
      case "personal":
        return ["casual", "professional", "inspirational"]
      case "business":
        return ["professional", "creative", "local"]
      case "creative":
        return ["artistic", "influencer", "musician"]
      default:
        return ["casual"]
    }
  }

  return (
    <div className="space-y-6">
      {/* Profile Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Profile Type:</label>
        <div className="grid grid-cols-3 gap-4">
          {(["personal", "business", "creative"] as const).map((type) => (
            <button
              key={type}
              onClick={() => {
                setProfileType(type)
                setTone(getToneOptions()[0])
                setGeneratedBios([])
              }}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                profileType === type
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">
                  {type === "personal" && "👤"}
                  {type === "business" && "🏢"}
                  {type === "creative" && "🎨"}
                </div>
                <div className="font-medium capitalize">{type}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tone Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Tone & Style:</label>
        <div className="flex flex-wrap gap-2">
          {getToneOptions().map((toneOption) => (
            <button
              key={toneOption}
              onClick={() => {
                setTone(toneOption)
                setGeneratedBios([])
              }}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                tone === toneOption ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {toneOption.charAt(0).toUpperCase() + toneOption.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button onClick={generateBios} disabled={isGenerating} className="btn-primary flex items-center gap-2 mx-auto">
          {isGenerating ? <RefreshCw className="h-5 w-5 animate-spin" /> : <Instagram className="h-5 w-5" />}
          {isGenerating ? "Generating..." : "Generate Bio Ideas"}
        </button>
      </div>

      {/* Generated Bios */}
      {generatedBios.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Generated Bio Ideas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedBios.map((bio, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-medium text-gray-600">Bio #{index + 1}</span>
                  <button
                    onClick={() => copyBio(bio)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-gray-900 whitespace-pre-line text-sm leading-relaxed">{bio}</div>
                <div className="mt-3 text-xs text-gray-500">{bio.length}/150 characters</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Pro Tips:</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Keep your bio under 150 characters for maximum impact</li>
          <li>• Use emojis strategically to add personality and save space</li>
          <li>• Include a call-to-action or link to drive engagement</li>
          <li>• Update your bio regularly to keep it fresh and relevant</li>
          <li>• Make sure it reflects your authentic personality or brand voice</li>
        </ul>
      </div>
    </div>
  )
}
