"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface TimerProps {
  initialMinutes: number
}

export default function Timer({ initialMinutes }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval)
          setIsRunning(false)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  // Calculate progress percentage
  const progressPercentage = (timeLeft / (initialMinutes * 60)) * 100

  return (
    <div className="flex items-center bg-[#c5deb0] p-1 rounded-md mx-2">
      <button className="bg-[#c5deb0] hover:bg-[#b5ce9f] p-1 rounded-full" onClick={() => setIsRunning(!isRunning)}>
        <Clock className="w-6 h-6" />
      </button>
      <div className="relative w-8 h-8 mx-1">
        <svg className="w-8 h-8" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="none" stroke="#e0e0e0" strokeWidth="4" />
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#2e7d32"
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={100 - progressPercentage}
            transform="rotate(-90 18 18)"
          />
        </svg>
      </div>
    </div>
  )
}

