"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface CalculatorModalProps {
  onClose: () => void
}

export default function CalculatorModal({ onClose }: CalculatorModalProps) {
  const [display, setDisplay] = useState("0")
  const [memory, setMemory] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const clearDisplay = () => {
    setDisplay("0")
    setWaitingForOperand(false)
  }

  const clearAll = () => {
    setDisplay("0")
    setMemory(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = Number.parseFloat(display)

    if (memory === null) {
      setMemory(inputValue)
    } else if (operation) {
      const result = calculate(memory, inputValue, operation)
      setMemory(result)
      setDisplay(String(result))
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstOperand: number, secondOperand: number, operation: string) => {
    switch (operation) {
      case "+":
        return firstOperand + secondOperand
      case "-":
        return firstOperand - secondOperand
      case "×":
        return firstOperand * secondOperand
      case "÷":
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  const calculateResult = () => {
    if (!memory || !operation) return

    const inputValue = Number.parseFloat(display)
    const result = calculate(memory, inputValue, operation)

    setDisplay(String(result))
    setMemory(null)
    setOperation(null)
    setWaitingForOperand(true)
  }

  const toggleSign = () => {
    const value = Number.parseFloat(display)
    setDisplay(String(-value))
  }

  const calculatePercentage = () => {
    const value = Number.parseFloat(display)
    setDisplay(String(value / 100))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-80">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <CardTitle>الآلة الحاسبة</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="bg-gray-100 p-2 text-right text-2xl font-mono mb-4 h-12 flex items-center justify-end rounded">
              {display}
            </div>

            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" onClick={clearAll}>
                AC
              </Button>
              <Button variant="outline" onClick={toggleSign}>
                +/-
              </Button>
              <Button variant="outline" onClick={calculatePercentage}>
                %
              </Button>
              <Button variant="outline" onClick={() => performOperation("÷")}>
                ÷
              </Button>

              <Button variant="outline" onClick={() => inputDigit("7")}>
                7
              </Button>
              <Button variant="outline" onClick={() => inputDigit("8")}>
                8
              </Button>
              <Button variant="outline" onClick={() => inputDigit("9")}>
                9
              </Button>
              <Button variant="outline" onClick={() => performOperation("×")}>
                ×
              </Button>

              <Button variant="outline" onClick={() => inputDigit("4")}>
                4
              </Button>
              <Button variant="outline" onClick={() => inputDigit("5")}>
                5
              </Button>
              <Button variant="outline" onClick={() => inputDigit("6")}>
                6
              </Button>
              <Button variant="outline" onClick={() => performOperation("-")}>
                -
              </Button>

              <Button variant="outline" onClick={() => inputDigit("1")}>
                1
              </Button>
              <Button variant="outline" onClick={() => inputDigit("2")}>
                2
              </Button>
              <Button variant="outline" onClick={() => inputDigit("3")}>
                3
              </Button>
              <Button variant="outline" onClick={() => performOperation("+")}>
                +
              </Button>

              <Button variant="outline" className="col-span-2" onClick={() => inputDigit("0")}>
                0
              </Button>
              <Button variant="outline" onClick={inputDecimal}>
                .
              </Button>
              <Button variant="outline" onClick={calculateResult}>
                =
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

