"use client"

import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"

const styleTransforms = [
  {
    name: "Bold",
    transform: (text: string) =>
      text.replace(/[a-zA-Z0-9]/g, (char) => {
        const boldMap: Record<string, string> = {
          a: "𝐚",
          b: "𝐛",
          c: "𝐜",
          d: "𝐝",
          e: "𝐞",
          f: "𝐟",
          g: "𝐠",
          h: "𝐡",
          i: "𝐢",
          j: "𝐣",
          k: "𝐤",
          l: "𝐥",
          m: "𝐦",
          n: "𝐧",
          o: "𝐨",
          p: "𝐩",
          q: "𝐪",
          r: "𝐫",
          s: "𝐬",
          t: "𝐭",
          u: "𝐮",
          v: "𝐯",
          w: "𝐰",
          x: "𝐱",
          y: "𝐲",
          z: "𝐳",
          A: "𝐀",
          B: "𝐁",
          C: "𝐂",
          D: "𝐃",
          E: "𝐄",
          F: "𝐅",
          G: "𝐆",
          H: "𝐇",
          I: "𝐈",
          J: "𝐉",
          K: "𝐊",
          L: "𝐋",
          M: "𝐌",
          N: "𝐍",
          O: "𝐎",
          P: "𝐏",
          Q: "𝐐",
          R: "𝐑",
          S: "𝐒",
          T: "𝐓",
          U: "𝐔",
          V: "𝐕",
          W: "𝐖",
          X: "𝐗",
          Y: "𝐘",
          Z: "𝐙",
          "0": "𝟎",
          "1": "𝟏",
          "2": "𝟐",
          "3": "𝟑",
          "4": "𝟒",
          "5": "𝟓",
          "6": "𝟔",
          "7": "𝟕",
          "8": "𝟖",
          "9": "𝟗",
        }
        return boldMap[char] || char
      }),
  },
  {
    name: "Italic",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const italicMap: Record<string, string> = {
          a: "𝑎",
          b: "𝑏",
          c: "𝑐",
          d: "𝑑",
          e: "𝑒",
          f: "𝑓",
          g: "𝑔",
          h: "ℎ",
          i: "𝑖",
          j: "𝑗",
          k: "𝑘",
          l: "𝑙",
          m: "𝑚",
          n: "𝑛",
          o: "𝑜",
          p: "𝑝",
          q: "𝑞",
          r: "𝑟",
          s: "𝑠",
          t: "𝑡",
          u: "𝑢",
          v: "𝑣",
          w: "𝑤",
          x: "𝑥",
          y: "𝑦",
          z: "𝑧",
          A: "𝐴",
          B: "𝐵",
          C: "𝐶",
          D: "𝐷",
          E: "𝐸",
          F: "𝐹",
          G: "𝐺",
          H: "𝐻",
          I: "𝐼",
          J: "𝐽",
          K: "𝐾",
          L: "𝐿",
          M: "𝑀",
          N: "𝑁",
          O: "𝑂",
          P: "𝑃",
          Q: "𝑄",
          R: "𝑅",
          S: "𝑆",
          T: "𝑇",
          U: "𝑈",
          V: "𝑉",
          W: "𝑊",
          X: "𝑋",
          Y: "𝑌",
          Z: "𝑍",
        }
        return italicMap[char] || char
      }),
  },
  {
    name: "Monospace",
    transform: (text: string) =>
      text.replace(/[a-zA-Z0-9]/g, (char) => {
        const monoMap: Record<string, string> = {
          a: "𝚊",
          b: "𝚋",
          c: "𝚌",
          d: "𝚍",
          e: "𝚎",
          f: "𝚏",
          g: "𝚐",
          h: "𝚑",
          i: "𝚒",
          j: "𝚓",
          k: "𝚔",
          l: "𝚕",
          m: "𝚖",
          n: "𝚗",
          o: "𝚘",
          p: "𝚙",
          q: "𝚚",
          r: "𝚛",
          s: "𝚜",
          t: "𝚝",
          u: "𝚞",
          v: "𝚟",
          w: "𝚠",
          x: "𝚡",
          y: "𝚢",
          z: "𝚣",
          A: "𝙰",
          B: "𝙱",
          C: "𝙲",
          D: "𝙳",
          E: "𝙴",
          F: "𝙵",
          G: "𝙶",
          H: "𝙷",
          I: "𝙸",
          J: "𝙹",
          K: "𝙺",
          L: "𝙻",
          M: "𝙼",
          N: "𝙽",
          O: "𝙾",
          P: "𝙿",
          Q: "𝚀",
          R: "𝚁",
          S: "𝚂",
          T: "𝚃",
          U: "𝚄",
          V: "𝚅",
          W: "𝚆",
          X: "𝚇",
          Y: "𝚈",
          Z: "𝚉",
          "0": "𝟶",
          "1": "𝟷",
          "2": "𝟸",
          "3": "𝟹",
          "4": "𝟺",
          "5": "𝟻",
          "6": "𝟼",
          "7": "𝟽",
          "8": "𝟾",
          "9": "𝟿",
        }
        return monoMap[char] || char
      }),
  },
  {
    name: "Circled",
    transform: (text: string) =>
      text.replace(/[a-zA-Z0-9]/g, (char) => {
        const circledMap: Record<string, string> = {
          a: "ⓐ",
          b: "ⓑ",
          c: "ⓒ",
          d: "ⓓ",
          e: "ⓔ",
          f: "ⓕ",
          g: "ⓖ",
          h: "ⓗ",
          i: "ⓘ",
          j: "ⓙ",
          k: "ⓚ",
          l: "ⓛ",
          m: "ⓜ",
          n: "ⓝ",
          o: "ⓞ",
          p: "ⓟ",
          q: "ⓠ",
          r: "ⓡ",
          s: "ⓢ",
          t: "ⓣ",
          u: "ⓤ",
          v: "ⓥ",
          w: "ⓦ",
          x: "ⓧ",
          y: "ⓨ",
          z: "ⓩ",
          A: "Ⓐ",
          B: "Ⓑ",
          C: "Ⓒ",
          D: "Ⓓ",
          E: "Ⓔ",
          F: "Ⓕ",
          G: "Ⓖ",
          H: "Ⓗ",
          I: "Ⓘ",
          J: "Ⓙ",
          K: "Ⓚ",
          L: "Ⓛ",
          M: "Ⓜ",
          N: "Ⓝ",
          O: "Ⓞ",
          P: "Ⓟ",
          Q: "Ⓠ",
          R: "Ⓡ",
          S: "Ⓢ",
          T: "Ⓣ",
          U: "Ⓤ",
          V: "Ⓥ",
          W: "Ⓦ",
          X: "Ⓧ",
          Y: "Ⓨ",
          Z: "Ⓩ",
          "0": "⓪",
          "1": "①",
          "2": "②",
          "3": "③",
          "4": "④",
          "5": "⑤",
          "6": "⑥",
          "7": "⑦",
          "8": "⑧",
          "9": "⑨",
        }
        return circledMap[char] || char
      }),
  },
  {
    name: "Squared",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const squaredMap: Record<string, string> = {
          a: "🄰",
          b: "🄱",
          c: "🄲",
          d: "🄳",
          e: "🄴",
          f: "🄵",
          g: "🄶",
          h: "🄷",
          i: "🄸",
          j: "🄹",
          k: "🄺",
          l: "🄻",
          m: "🄼",
          n: "🄽",
          o: "🄾",
          p: "🄿",
          q: "🅀",
          r: "🅁",
          s: "🅂",
          t: "🅃",
          u: "🅄",
          v: "🅅",
          w: "🅆",
          x: "🅇",
          y: "🅈",
          z: "🅉",
          A: "🄰",
          B: "🄱",
          C: "🄲",
          D: "🄳",
          E: "🄴",
          F: "🄵",
          G: "🄶",
          H: "🄷",
          I: "🄸",
          J: "🄹",
          K: "🄺",
          L: "🄻",
          M: "🄼",
          N: "🄽",
          O: "🄾",
          P: "🄿",
          Q: "🅀",
          R: "🅁",
          S: "🅂",
          T: "🅃",
          U: "🅄",
          V: "🅅",
          W: "🅆",
          X: "🅇",
          Y: "🅈",
          Z: "🅉",
        }
        return squaredMap[char] || char
      }),
  },
  {
    name: "Decorative 1",
    transform: (text: string) => `✨ ${text} ✨`,
  },
  {
    name: "Decorative 2",
    transform: (text: string) => `🌟 ${text} 🌟`,
  },
  {
    name: "Decorative 3",
    transform: (text: string) => `━━━ ${text} ━━━`,
  },
  {
    name: "Decorative 4",
    transform: (text: string) => `◆ ${text} ◆`,
  },
  {
    name: "Decorative 5",
    transform: (text: string) => `【${text}】`,
  },
  {
    name: "Decorative 6",
    transform: (text: string) => `『${text}』`,
  },
  {
    name: "Decorative 7",
    transform: (text: string) => `▸ ${text} ◂`,
  },
  {
    name: "Decorative 8",
    transform: (text: string) => `♦ ${text} ♦`,
  },
]

export function NameStylerTool() {
  const [inputText, setInputText] = useState("")
  const [styledTexts, setStyledTexts] = useState<Array<{ name: string; text: string }>>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!inputText.trim()) {
      setStyledTexts([])
      return
    }

    const styled = styleTransforms.map((style) => ({
      name: style.name,
      text: style.transform(inputText),
    }))

    setStyledTexts(styled)
  }, [inputText])

  const copyText = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label htmlFor="name-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your name or text:
        </label>
        <input
          id="name-input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your name or text here..."
          className="input-field"
        />
      </div>

      {/* Styled Results */}
      {styledTexts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Styled Versions:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {styledTexts.map((styled, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-600">{styled.name}</span>
                  <button
                    onClick={() => copyText(styled.text, index)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    {copiedIndex === index ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <div className="text-lg font-medium text-gray-900 break-all">{styled.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Use:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
              1
            </span>
            Type your name or any text in the input field above
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
              2
            </span>
            Browse through the different styled versions generated automatically
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
              3
            </span>
            Click the copy button next to any style you like
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
              4
            </span>
            Paste the styled text wherever you need it
          </li>
        </ul>
      </div>
    </div>
  )
}
