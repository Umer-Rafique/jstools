"use client"

import { useState, useEffect } from "react"
import { Copy, FileText, Clock, Hash, Type } from "lucide-react"

export function WordCounterTool() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    paragraphs: 0,
    sentences: 0,
    readingTime: 0,
  })

  useEffect(() => {
    const calculateStats = () => {
      if (!text.trim()) {
        setStats({
          words: 0,
          characters: 0,
          charactersNoSpaces: 0,
          paragraphs: 0,
          sentences: 0,
          readingTime: 0,
        })
        return
      }

      const words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, "").length
      const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
      const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      const readingTime = Math.ceil(words / 200) // 200 words per minute average

      setStats({
        words,
        characters,
        charactersNoSpaces,
        paragraphs,
        sentences,
        readingTime,
      })
    }

    calculateStats()
  }, [text])

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  const clearText = () => {
    setText("")
  }

  return (
    <div className="space-y-6">
      {/* Text Input */}
      <div>
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your text below:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="textarea-field h-64"
        />
        <div className="flex gap-2 mt-4">
          <button onClick={copyText} className="btn-secondary flex items-center gap-2">
            <Copy className="h-4 w-4" />
            Copy Text
          </button>
          <button onClick={clearText} className="btn-secondary">
            Clear
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{stats.words}</div>
          <div className="text-sm text-gray-600">Words</div>
        </div>

        <div className="bg-green-50 rounded-xl p-4 text-center">
          <Type className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{stats.characters}</div>
          <div className="text-sm text-gray-600">Characters</div>
        </div>

        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <Hash className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-gray-600">No Spaces</div>
        </div>

        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">{stats.paragraphs}</div>
          <div className="text-sm text-gray-600">Paragraphs</div>
        </div>

        <div className="bg-red-50 rounded-xl p-4 text-center">
          <Type className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-600">{stats.sentences}</div>
          <div className="text-sm text-gray-600">Sentences</div>
        </div>

        <div className="bg-indigo-50 rounded-xl p-4 text-center">
          <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-indigo-600">{stats.readingTime}</div>
          <div className="text-sm text-gray-600">Min Read</div>
        </div>
      </div>
    </div>
  )
}
