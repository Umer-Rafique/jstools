"use client"

import { useState, useEffect } from "react"
import { Copy, Clock, Calendar } from "lucide-react"

export function TimestampConverterTool() {
  const [timestamp, setTimestamp] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [timezone, setTimezone] = useState("UTC")
  const [convertedDate, setConvertedDate] = useState("")
  const [convertedTimestamp, setConvertedTimestamp] = useState("")
  const [currentTimestamp, setCurrentTimestamp] = useState("")

  useEffect(() => {
    // Update current timestamp every second
    const updateCurrentTimestamp = () => {
      const now = Math.floor(Date.now() / 1000)
      setCurrentTimestamp(now.toString())
    }

    updateCurrentTimestamp()
    const interval = setInterval(updateCurrentTimestamp, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    convertTimestampToDate()
  }, [timestamp, timezone])

  useEffect(() => {
    convertDateToTimestamp()
  }, [dateTime, timezone])

  const convertTimestampToDate = () => {
    if (!timestamp || isNaN(Number(timestamp))) {
      setConvertedDate("")
      return
    }

    try {
      const ts = Number(timestamp)
      const date = new Date(ts * 1000)

      if (timezone === "UTC") {
        setConvertedDate(date.toISOString().replace("T", " ").replace(".000Z", " UTC"))
      } else {
        // For local timezone
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        }
        setConvertedDate(date.toLocaleString("en-US", options))
      }
    } catch (error) {
      setConvertedDate("Invalid timestamp")
    }
  }

  const convertDateToTimestamp = () => {
    if (!dateTime) {
      setConvertedTimestamp("")
      return
    }

    try {
      const date = new Date(dateTime)
      if (isNaN(date.getTime())) {
        setConvertedTimestamp("Invalid date")
        return
      }

      const timestamp = Math.floor(date.getTime() / 1000)
      setConvertedTimestamp(timestamp.toString())
    } catch (error) {
      setConvertedTimestamp("Invalid date")
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const useCurrentTimestamp = () => {
    setTimestamp(currentTimestamp)
  }

  const useCurrentDateTime = () => {
    const now = new Date()
    const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
    setDateTime(localDateTime)
  }

  const clearAll = () => {
    setTimestamp("")
    setDateTime("")
    setConvertedDate("")
    setConvertedTimestamp("")
  }

  return (
    <div className="space-y-6">
      {/* Current Timestamp Display */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Unix Timestamp</h3>
            <div className="text-2xl font-mono font-bold text-blue-600">{currentTimestamp}</div>
            <div className="text-sm text-gray-600 mt-1">
              {new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              })}
            </div>
          </div>
          <button onClick={useCurrentTimestamp} className="btn-secondary flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Use Current
          </button>
        </div>
      </div>

      {/* Timezone Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone:</label>
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="input-field max-w-xs">
          <option value="UTC">UTC</option>
          <option value="local">Local Timezone</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Timestamp to Date */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Timestamp to Date
          </h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="timestamp-input" className="block text-sm font-medium text-gray-700 mb-2">
                Unix Timestamp:
              </label>
              <input
                id="timestamp-input"
                type="text"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                placeholder="1640995200"
                className="input-field"
              />
            </div>

            {convertedDate && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Converted Date:</label>
                <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <span className="font-mono text-sm">{convertedDate}</span>
                  <button
                    onClick={() => copyToClipboard(convertedDate)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Date to Timestamp */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Date to Timestamp
          </h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="datetime-input" className="block text-sm font-medium text-gray-700 mb-2">
                Date & Time:
              </label>
              <div className="flex gap-2">
                <input
                  id="datetime-input"
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="input-field flex-1"
                />
                <button onClick={useCurrentDateTime} className="btn-secondary whitespace-nowrap">
                  Now
                </button>
              </div>
            </div>

            {convertedTimestamp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unix Timestamp:</label>
                <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <span className="font-mono text-sm">{convertedTimestamp}</span>
                  <button
                    onClick={() => copyToClipboard(convertedTimestamp)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button onClick={clearAll} className="btn-secondary">
          Clear All
        </button>
      </div>

      {/* Information */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 Timestamp Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Unix Epoch:</strong> January 1, 1970, 00:00:00 UTC
          </div>
          <div>
            <strong>Range:</strong> Can represent dates from 1970 to 2038 (32-bit) or beyond (64-bit)
          </div>
          <div>
            <strong>Precision:</strong> Seconds since epoch (milliseconds in JavaScript)
          </div>
          <div>
            <strong>Usage:</strong> Databases, APIs, log files, programming languages
          </div>
        </div>
      </div>
    </div>
  )
}
