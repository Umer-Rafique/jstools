"use client"

import { useState, useEffect } from "react"
import { Copy, Calculator } from "lucide-react"

type CalculationType = "percentage-of" | "what-percent" | "percentage-change"

export function PercentageCalculatorTool() {
  const [calculationType, setCalculationType] = useState<CalculationType>("percentage-of")
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    calculateResult()
  }, [calculationType, value1, value2])

  const calculateResult = () => {
    const num1 = Number.parseFloat(value1)
    const num2 = Number.parseFloat(value2)

    if (isNaN(num1) || isNaN(num2)) {
      setResult(null)
      return
    }

    let calculatedResult: number

    switch (calculationType) {
      case "percentage-of":
        // What is X% of Y
        calculatedResult = (num1 / 100) * num2
        setResult(calculatedResult.toString())
        break
      case "what-percent":
        // X is what % of Y
        if (num2 === 0) {
          setResult("Cannot divide by zero")
          return
        }
        calculatedResult = (num1 / num2) * 100
        setResult(`${calculatedResult.toFixed(2)}%`)
        break
      case "percentage-change":
        // Percentage change from X to Y
        if (num1 === 0) {
          setResult("Cannot calculate change from zero")
          return
        }
        calculatedResult = ((num2 - num1) / num1) * 100
        const changeType = calculatedResult >= 0 ? "increase" : "decrease"
        setResult(`${Math.abs(calculatedResult).toFixed(2)}% ${changeType}`)
        break
      default:
        setResult(null)
    }
  }

  const copyResult = async () => {
    if (result) {
      try {
        await navigator.clipboard.writeText(result)
      } catch (err) {
        console.error("Failed to copy result:", err)
      }
    }
  }

  const clearAll = () => {
    setValue1("")
    setValue2("")
    setResult(null)
  }

  const getLabels = () => {
    switch (calculationType) {
      case "percentage-of":
        return { label1: "Percentage (%)", label2: "Of Number", resultLabel: "Result" }
      case "what-percent":
        return { label1: "Number", label2: "Is % of", resultLabel: "Percentage" }
      case "percentage-change":
        return { label1: "Original Value", label2: "New Value", resultLabel: "Change" }
      default:
        return { label1: "Value 1", label2: "Value 2", resultLabel: "Result" }
    }
  }

  const labels = getLabels()

  return (
    <div className="space-y-6">
      {/* Calculator Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Calculation Type:</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setCalculationType("percentage-of")}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              calculationType === "percentage-of"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-center">
              <Calculator className="h-6 w-6 mx-auto mb-2" />
              <div className="font-medium">What is X% of Y?</div>
              <div className="text-sm text-gray-500 mt-1">Find percentage of a number</div>
            </div>
          </button>

          <button
            onClick={() => setCalculationType("what-percent")}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              calculationType === "what-percent"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-center">
              <Calculator className="h-6 w-6 mx-auto mb-2" />
              <div className="font-medium">X is what % of Y?</div>
              <div className="text-sm text-gray-500 mt-1">Find percentage ratio</div>
            </div>
          </button>

          <button
            onClick={() => setCalculationType("percentage-change")}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              calculationType === "percentage-change"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-center">
              <Calculator className="h-6 w-6 mx-auto mb-2" />
              <div className="font-medium">Percentage Change</div>
              <div className="text-sm text-gray-500 mt-1">Calculate increase/decrease</div>
            </div>
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="value1" className="block text-sm font-medium text-gray-700 mb-2">
            {labels.label1}
          </label>
          <input
            id="value1"
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="Enter value"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="value2" className="block text-sm font-medium text-gray-700 mb-2">
            {labels.label2}
          </label>
          <input
            id="value2"
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder="Enter value"
            className="input-field"
          />
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-gray-600 mb-1">{labels.resultLabel}:</div>
              <div className="text-3xl font-bold text-gray-900">{result}</div>
            </div>
            <button onClick={copyResult} className="btn-secondary flex items-center gap-2">
              <Copy className="h-4 w-4" />
              Copy
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button onClick={clearAll} className="btn-secondary">
          Clear All
        </button>
      </div>

      {/* Examples */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Examples:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4">
            <div className="font-medium text-gray-900 mb-2">What is 25% of 200?</div>
            <div className="text-gray-600">Answer: 50</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="font-medium text-gray-900 mb-2">50 is what % of 200?</div>
            <div className="text-gray-600">Answer: 25%</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="font-medium text-gray-900 mb-2">Change from 100 to 120?</div>
            <div className="text-gray-600">Answer: 20% increase</div>
          </div>
        </div>
      </div>
    </div>
  )
}
