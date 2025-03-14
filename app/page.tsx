"use client"

import { useState, useEffect } from "react"
import { Calculator, HelpCircle, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import HelpModal from "@/components/help-modal"
import CalculatorModal from "@/components/calculator-modal"
import Timer from "@/components/timer"

export default function PisaInterface() {
  const [showHelp, setShowHelp] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [selectedCar, setSelectedCar] = useState<string | null>(null)
  const [results, setResults] = useState<number[]>([])
  const [carPrice, setCarPrice] = useState("")
  const [fuelConsumption, setFuelConsumption] = useState("")

  const carData = [
    { id: "أ", price: 8000, fuelConsumption: 18.9 },
    { id: "ب", price: 8700, fuelConsumption: 15.7 },
    { id: "ج", price: 9900, fuelConsumption: 12.4 },
    { id: "د", price: 10500, fuelConsumption: 14.1 },
  ]

  // Update input fields when a car is selected
  useEffect(() => {
    if (selectedCar) {
      const car = carData.find((car) => car.id === selectedCar)
      if (car) {
        setCarPrice(car.price.toString())
        setFuelConsumption(car.fuelConsumption.toString())
      }
    }
  }, [selectedCar])

  const calculateCost = () => {
    if (!carPrice || !fuelConsumption) return

    const price = Number.parseFloat(carPrice)
    const consumption = Number.parseFloat(fuelConsumption)

    // Calculate: car price + (fuel consumption * distance * fuel cost) + maintenance
    const result = price + consumption * 200 * 1.54 + 250
    const roundedResult = Math.round(result * 10) / 10

    setResults((prev) => [...prev, roundedResult])
  }

  const removeResult = (index: number) => {
    setResults((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-[#e6f2f8] rtl" dir="rtl">
      {/* Top Navigation Bar */}
      <div className="bg-[#c5deb0] p-2 flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="ghost" className="bg-[#c5deb0] hover:bg-[#b5ce9f] p-1 h-10 w-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wKWJDDlBFDQPFHt9E9AcJiLyQhFqyI.png"
              alt="Previous"
              className="w-6 h-6"
            />
          </Button>
          <Button variant="ghost" className="bg-[#c5deb0] hover:bg-[#b5ce9f] p-1 h-10 w-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wKWJDDlBFDQPFHt9E9AcJiLyQhFqyI.png"
              alt="Next"
              className="w-6 h-6 transform rotate-180"
            />
          </Button>
          <Button
            variant="ghost"
            className="bg-[#c5deb0] hover:bg-[#b5ce9f] p-1 h-10 w-10"
            onClick={() => setShowHelp(true)}
          >
            <HelpCircle className="w-6 h-6" />
          </Button>
          <Button variant="ghost" className="bg-[#c5deb0] hover:bg-[#b5ce9f] p-1 h-10 w-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wKWJDDlBFDQPFHt9E9AcJiLyQhFqyI.png"
              alt="Grid"
              className="w-6 h-6"
            />
          </Button>
        </div>

        <div className="flex items-center">
          <Button
            variant="ghost"
            className="bg-[#c5deb0] hover:bg-[#b5ce9f] p-1 h-10 w-10 mr-2"
            onClick={() => setShowCalculator(true)}
          >
            <Calculator className="w-6 h-6" />
          </Button>
          <Timer initialMinutes={60} />
          <div className="text-lg font-bold mr-4">بيزا ٢٠٢٢</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Panel */}
        <div className="w-1/2 p-4 border-l border-gray-300">
          <h2 className="text-xl font-bold mb-4">شراء سيارة</h2>
          <p className="mb-4">يُبيّن الجدول أدناه الأسعار واستهلاك الوقود لأربع سيارات ضمن اهتمامات الشراء لدينا.</p>
          <p className="mb-4">
            استهلاك الوقود هو عدد اللترات اللازمة لقطع مسافة ١٠٠ كم بالسيارة. يشمل ذلك المسافات المقطوعة داخل المدينة
            وعلى الطرق السريعة معًا.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="border border-gray-400 p-2">السيارة أ</th>
                  <th className="border border-gray-400 p-2">السيارة ب</th>
                  <th className="border border-gray-400 p-2">السيارة ج</th>
                  <th className="border border-gray-400 p-2">السيارة د</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-2 text-center">٨٠٠٠</td>
                  <td className="border border-gray-400 p-2 text-center">٨٧٠٠</td>
                  <td className="border border-gray-400 p-2 text-center">٩٩٠٠</td>
                  <td className="border border-gray-400 p-2 text-center">١٠٥٠٠</td>
                </tr>
                <tr className="bg-[#f5e9c9]">
                  <td colSpan={4} className="border border-gray-400 p-2 text-right">
                    سعر السيارة (د)
                    <br />
                    سعر السيارة يشمل جميع الضرائب ورسوم التسجيل
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2 text-center">١٨٫٩</td>
                  <td className="border border-gray-400 p-2 text-center">١٥٫٧</td>
                  <td className="border border-gray-400 p-2 text-center">١٢٫٤</td>
                  <td className="border border-gray-400 p-2 text-center">١٤٫١</td>
                </tr>
                <tr className="bg-[#f5e9c9]">
                  <td colSpan={4} className="border border-gray-400 p-2 text-right">
                    استهلاك الوقود
                    <br />
                    (لتر/ ١٠٠ كم)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="my-4">مُلئت بعض خلايا "مقدّر التكلفة" اعتمادًا على تقديرات داتا.</p>

          <div className="flex mt-8">
            <div className="w-1/3 bg-gray-300 p-2">
              <h3 className="text-center font-bold">النتائج</h3>
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 border-b border-gray-400 bg-[#e6f2f8]"
                >
                  <button className="bg-red-500 text-white rounded-full p-1" onClick={() => removeResult(index)}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>{result.toLocaleString()}</span>
                </div>
              ))}
              <div className="h-64"></div>
            </div>

            <div className="w-2/3 bg-[#c5d3e0] p-2 ml-4">
              <h3 className="text-center font-bold mb-4">مقدّر التكلفة</h3>

              <div className="mb-2 flex items-center">
                <label className="w-2/3 text-right">سعر السيارة (د)</label>
                <input
                  type="text"
                  className="w-1/3 p-1 border border-gray-400 bg-[#f9f9e0]"
                  value={carPrice}
                  onChange={(e) => setCarPrice(e.target.value)}
                />
              </div>

              <div className="mb-2 flex items-center">
                <label className="w-2/3 text-right">استهلاك الوقود (لتر/ ١٠٠ كم)</label>
                <input
                  type="text"
                  className="w-1/3 p-1 border border-gray-400 bg-[#f9f9e0]"
                  value={fuelConsumption}
                  onChange={(e) => setFuelConsumption(e.target.value)}
                />
              </div>

              <div className="mb-2 flex items-center">
                <label className="w-2/3 text-right">مسافة قيادة السيارة التقديرية (كم)</label>
                <input type="text" className="w-1/3 p-1 border border-gray-400 bg-[#c5d3e0]" value="٢٠٠٠٠" readOnly />
              </div>

              <div className="mb-2 flex items-center">
                <label className="w-2/3 text-right">معدل تكلفة الوقود (د/لتر)</label>
                <input type="text" className="w-1/3 p-1 border border-gray-400 bg-[#c5d3e0]" value="١٫٥٤" readOnly />
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-2/3 text-right">التكلفة التقديرية للصيانة (د)</label>
                <input type="text" className="w-1/3 p-1 border border-gray-400 bg-[#c5d3e0]" value="٢٥٠" readOnly />
              </div>

              <div className="flex justify-between">
                <Button
                  className="bg-[#d14747] hover:bg-[#b13737] text-white"
                  onClick={() => {
                    setCarPrice("")
                    setFuelConsumption("")
                    setSelectedCar(null)
                  }}
                >
                  امسح
                </Button>
                <Button className="bg-[#8baa5e] hover:bg-[#7b9a4e] text-white" onClick={calculateCost}>
                  احسب
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-4 bg-white">
          <div className="bg-[#c5d3e0] p-4 mb-4">
            <h2 className="text-xl font-bold">شراء سيارة</h2>
            <p className="text-lg">سؤال ١ / ٢</p>
          </div>

          <div className="bg-[#e6f2f8] p-4 mb-4">
            <h3 className="font-bold mb-2">كيفية استخدام مقدّر التكلفة</h3>
            <p className="mb-4">ارجع إلى " شراء سيارة " على اليسار. استخدم مقدّر التكلفة لمساعدتك في حل السؤال الآتي.</p>
            <p className="mb-4">انقر على الإجابة الصحيحة للإجابة عن السؤال.</p>

            <p className="mb-4">لمعرفة كيفية استخدام مقدّر التكلفة، انقر على كيفية استخدام مقدّر التكلفة في الأعلى.</p>

            <p className="mb-4">
              اعتمادًا على تقديرات داتا، أي السيارات ستكون الأقل تكلفة لشرائها واستخدامها في السنة الأولى؟
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="car-a"
                  name="car"
                  className="mr-2"
                  checked={selectedCar === "أ"}
                  onChange={() => setSelectedCar("أ")}
                />
                <label htmlFor="car-a">السيارة أ</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="car-b"
                  name="car"
                  className="mr-2"
                  checked={selectedCar === "ب"}
                  onChange={() => setSelectedCar("ب")}
                />
                <label htmlFor="car-b">السيارة ب</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="car-c"
                  name="car"
                  className="mr-2"
                  checked={selectedCar === "ج"}
                  onChange={() => setSelectedCar("ج")}
                />
                <label htmlFor="car-c">السيارة ج</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="car-d"
                  name="car"
                  className="mr-2"
                  checked={selectedCar === "د"}
                  onChange={() => setSelectedCar("د")}
                />
                <label htmlFor="car-d">السيارة د</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showCalculator && <CalculatorModal onClose={() => setShowCalculator(false)} />}
    </div>
  )
}

