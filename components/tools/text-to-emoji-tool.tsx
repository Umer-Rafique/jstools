"use client"

import { useState, useEffect } from "react"
import { Copy, Shuffle } from "lucide-react"

const emojiMap: Record<string, string[]> = {
  love: ["❤️", "💕", "💖", "💗"],
  heart: ["❤️", "💖", "💕"],
  happy: ["😊", "😄", "😃", "🙂"],
  sad: ["😢", "😭", "☹️", "😞"],
  fire: ["🔥"],
  water: ["💧", "🌊"],
  sun: ["☀️", "🌞"],
  moon: ["🌙", "🌛"],
  star: ["⭐", "🌟", "✨"],
  food: ["🍕", "🍔", "🍟", "🌮"],
  pizza: ["🍕"],
  burger: ["🍔"],
  coffee: ["☕", "🍵"],
  beer: ["🍺", "🍻"],
  wine: ["🍷", "🍾"],
  music: ["🎵", "🎶", "🎼"],
  party: ["🎉", "🎊", "🥳"],
  birthday: ["🎂", "🎈", "🎁"],
  gift: ["🎁", "🎀"],
  money: ["💰", "💵", "💸"],
  work: ["💼", "👔", "💻"],
  home: ["🏠", "🏡", "🏘️"],
  car: ["🚗", "🚙", "🚘"],
  plane: ["✈️", "🛩️"],
  train: ["🚂", "🚆"],
  phone: ["📱", "📞"],
  computer: ["💻", "🖥️"],
  book: ["📚", "📖", "📕"],
  school: ["🏫", "🎓", "📚"],
  dog: ["🐕", "🐶", "🦮"],
  cat: ["🐱", "🐈", "😺"],
  bird: ["🐦", "🕊️"],
  flower: ["🌸", "🌺", "🌻", "🌹"],
  tree: ["🌳", "🌲", "🎄"],
  beach: ["🏖️", "🌊", "☀️"],
  mountain: ["⛰️", "🏔️"],
  snow: ["❄️", "⛄", "🌨️"],
  rain: ["🌧️", "☔", "💧"],
  thunder: ["⚡", "🌩️"],
  good: ["👍", "✅", "😊"],
  bad: ["👎", "❌", "😞"],
  yes: ["✅", "👍", "✔️"],
  no: ["❌", "👎", "❎"],
  ok: ["👌", "✅"],
  cool: ["😎", "🆒"],
  hot: ["🔥", "🌶️", "🥵"],
  cold: ["🥶", "❄️", "🧊"],
  time: ["⏰", "🕐", "⌚"],
  night: ["🌙", "🌃", "🌌"],
  day: ["☀️", "🌅", "🌞"],
  morning: ["🌅", "☀️", "🌄"],
  evening: ["🌆", "🌇"],
  weekend: ["🎉", "😎", "🍻"],
  monday: ["😴", "☕", "💼"],
  friday: ["🎉", "🍻", "😎"],
  christmas: ["🎄", "🎅", "🎁"],
  halloween: ["🎃", "👻", "🦇"],
  "new year": ["🎊", "🥳", "🍾"],
  thanks: ["🙏", "😊", "💕"],
  sorry: ["😔", "🙏", "💔"],
  congratulations: ["🎉", "👏", "🥳"],
  welcome: ["👋", "😊", "🎉"],
}

export function TextToEmojiTool() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")

  useEffect(() => {
    convertTextToEmoji()
  }, [inputText])

  const convertTextToEmoji = () => {
    if (!inputText.trim()) {
      setOutputText("")
      return
    }

    let converted = inputText.toLowerCase()

    // Sort by length (longest first) to avoid partial matches
    const sortedKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length)

    sortedKeys.forEach((word) => {
      const emojis = emojiMap[word]
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      const regex = new RegExp(`\\b${word}\\b`, "gi")
      converted = converted.replace(regex, `${word} ${randomEmoji}`)
    })

    setOutputText(converted)
  }

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(outputText)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  const regenerateEmojis = () => {
    convertTextToEmoji()
  }

  const clearAll = () => {
    setInputText("")
    setOutputText("")
  }

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your text:
        </label>
        <textarea
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type something like: I love pizza and coffee on a sunny day!"
          className="textarea-field h-32"
        />
      </div>

      {/* Output */}
      <div>
        <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-2">
          Emoji converted text:
        </label>
        <textarea
          id="output-text"
          value={outputText}
          readOnly
          placeholder="Your emoji-converted text will appear here..."
          className="textarea-field h-32 bg-gray-50"
        />
        <div className="flex gap-2 mt-4">
          <button onClick={copyOutput} className="btn-primary flex items-center gap-2">
            <Copy className="h-4 w-4" />
            Copy Result
          </button>
          <button onClick={regenerateEmojis} className="btn-secondary flex items-center gap-2">
            <Shuffle className="h-4 w-4" />
            Regenerate
          </button>
          <button onClick={clearAll} className="btn-secondary">
            Clear All
          </button>
        </div>
      </div>

      {/* Popular Words */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Words That Convert:</h3>
        <div className="flex flex-wrap gap-2">
          {Object.keys(emojiMap)
            .slice(0, 20)
            .map((word) => (
              <span key={word} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                {word} {emojiMap[word][0]}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}
