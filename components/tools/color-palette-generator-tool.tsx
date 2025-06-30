"use client"

import { useState, useEffect } from "react"
import { Copy, RefreshCw, Download } from "lucide-react"

type HarmonyType = "monochromatic" | "complementary" | "triadic" | "tetradic" | "analogous"

interface Color {
  hex: string
  rgb: { r: number; g: number; b: number }
  hsl: { h: number; s: number; l: number }
}

export function ColorPaletteGeneratorTool() {
  const [baseColor, setBaseColor] = useState("#3B82F6")
  const [harmonyType, setHarmonyType] = useState<HarmonyType>("complementary")
  const [palette, setPalette] = useState<Color[]>([])

  useEffect(() => {
    generatePalette()
  }, [baseColor, harmonyType])

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return { h: h * 360, s: s * 100, l: l * 100 }
  }

  const hslToRgb = (h: number, s: number, l: number): { r: number; g: number; b: number } => {
    h /= 360
    s /= 100
    l /= 100

    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
  }

  const generatePalette = () => {
    const baseRgb = hexToRgb(baseColor)
    const baseHsl = rgbToHsl(baseRgb.r, baseRgb.g, baseRgb.b)
    const colors: Color[] = []

    // Add base color
    colors.push({
      hex: baseColor,
      rgb: baseRgb,
      hsl: baseHsl,
    })

    switch (harmonyType) {
      case "monochromatic":
        // Generate monochromatic colors by varying lightness
        for (let i = 1; i < 5; i++) {
          const newL = Math.max(10, Math.min(90, baseHsl.l + (i - 2) * 20))
          const rgb = hslToRgb(baseHsl.h, baseHsl.s, newL)
          colors.push({
            hex: rgbToHex(rgb.r, rgb.g, rgb.b),
            rgb,
            hsl: { h: baseHsl.h, s: baseHsl.s, l: newL },
          })
        }
        break

      case "complementary":
        // Add complementary color (180 degrees opposite)
        const compH = (baseHsl.h + 180) % 360
        const compRgb = hslToRgb(compH, baseHsl.s, baseHsl.l)
        colors.push({
          hex: rgbToHex(compRgb.r, compRgb.g, compRgb.b),
          rgb: compRgb,
          hsl: { h: compH, s: baseHsl.s, l: baseHsl.l },
        })

        // Add variations
        for (let i = 0; i < 3; i++) {
          const h = i === 0 ? baseHsl.h : compH
          const l = baseHsl.l + (i - 1) * 25
          const adjustedL = Math.max(10, Math.min(90, l))
          const rgb = hslToRgb(h, baseHsl.s, adjustedL)
          colors.push({
            hex: rgbToHex(rgb.r, rgb.g, rgb.b),
            rgb,
            hsl: { h, s: baseHsl.s, l: adjustedL },
          })
        }
        break

      case "triadic":
        // Add triadic colors (120 degrees apart)
        for (let i = 1; i < 3; i++) {
          const h = (baseHsl.h + i * 120) % 360
          const rgb = hslToRgb(h, baseHsl.s, baseHsl.l)
          colors.push({
            hex: rgbToHex(rgb.r, rgb.g, rgb.b),
            rgb,
            hsl: { h, s: baseHsl.s, l: baseHsl.l },
          })
        }

        // Add variations
        for (let i = 0; i < 2; i++) {
          const h = (baseHsl.h + (i + 1) * 120) % 360
          const l = Math.max(10, Math.min(90, baseHsl.l + 30))
          const rgb = hslToRgb(h, baseHsl.s, l)
          colors.push({
            hex: rgbToHex(rgb.r, rgb.g, rgb.b),
            rgb,
            hsl: { h, s: baseHsl.s, l },
          })
        }
        break

      case "tetradic":
        // Add tetradic colors (90 degrees apart)
        for (let i = 1; i < 4; i++) {
          const h = (baseHsl.h + i * 90) % 360
          const rgb = hslToRgb(h, baseHsl.s, baseHsl.l)
          colors.push({
            hex: rgbToHex(rgb.r, rgb.g, rgb.b),
            rgb,
            hsl: { h, s: baseHsl.s, l: baseHsl.l },
          })
        }

        // Add one variation
        const varH = (baseHsl.h + 45) % 360
        const varRgb = hslToRgb(varH, baseHsl.s, Math.max(10, Math.min(90, baseHsl.l + 20)))
        colors.push({
          hex: rgbToHex(varRgb.r, varRgb.g, varRgb.b),
          rgb: varRgb,
          hsl: { h: varH, s: baseHsl.s, l: baseHsl.l + 20 },
        })
        break

      case "analogous":
        // Add analogous colors (30 degrees apart)
        for (let i = 1; i < 5; i++) {
          const h = (baseHsl.h + (i - 2) * 30) % 360
          const adjustedH = h < 0 ? h + 360 : h
          const rgb = hslToRgb(adjustedH, baseHsl.s, baseHsl.l)
          colors.push({
            hex: rgbToHex(rgb.r, rgb.g, rgb.b),
            rgb,
            hsl: { h: adjustedH, s: baseHsl.s, l: baseHsl.l },
          })
        }
        break
    }

    setPalette(colors.slice(0, 5))
  }

  const copyColor = async (color: Color) => {
    try {
      await navigator.clipboard.writeText(color.hex)
    } catch (err) {
      console.error("Failed to copy color:", err)
    }
  }

  const exportPalette = () => {
    const paletteData = palette
      .map((color, index) => `Color ${index + 1}: ${color.hex} | RGB(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`)
      .join("\n")

    const blob = new Blob([paletteData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "color-palette.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  const randomizeBaseColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    setBaseColor(randomColor)
  }

  return (
    <div className="space-y-6">
      {/* Base Color Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="base-color" className="block text-sm font-medium text-gray-700 mb-2">
            Base Color:
          </label>
          <div className="flex gap-2">
            <input
              id="base-color"
              type="color"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="w-16 h-12 rounded-lg border border-gray-200 cursor-pointer"
            />
            <input
              type="text"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="flex-1 input-field"
              placeholder="#3B82F6"
            />
            <button onClick={randomizeBaseColor} className="btn-secondary">
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Harmony Type:</label>
          <select
            value={harmonyType}
            onChange={(e) => setHarmonyType(e.target.value as HarmonyType)}
            className="input-field"
          >
            <option value="monochromatic">Monochromatic</option>
            <option value="complementary">Complementary</option>
            <option value="triadic">Triadic</option>
            <option value="tetradic">Tetradic</option>
            <option value="analogous">Analogous</option>
          </select>
        </div>
      </div>

      {/* Generated Palette */}
      {palette.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Generated Palette</h3>
            <button onClick={exportPalette} className="btn-secondary flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {palette.map((color, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-32 cursor-pointer transition-transform hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyColor(color)}
                />
                <div className="p-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">{color.hex}</div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>
                      RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
                    </div>
                    <div>
                      HSL({Math.round(color.hsl.h)}°, {Math.round(color.hsl.s)}%, {Math.round(color.hsl.l)}%)
                    </div>
                  </div>
                  <button
                    onClick={() => copyColor(color)}
                    className="mt-3 w-full text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors duration-300 flex items-center justify-center gap-1"
                  >
                    <Copy className="h-3 w-3" />
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Color Theory Info */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Harmony Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Monochromatic:</strong> Uses different shades and tints of a single color
          </div>
          <div>
            <strong>Complementary:</strong> Uses colors opposite each other on the color wheel
          </div>
          <div>
            <strong>Triadic:</strong> Uses three colors evenly spaced around the color wheel
          </div>
          <div>
            <strong>Tetradic:</strong> Uses four colors arranged in two complementary pairs
          </div>
          <div>
            <strong>Analogous:</strong> Uses colors that are next to each other on the color wheel
          </div>
        </div>
      </div>
    </div>
  )
}
