"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface HelpModalProps {
  onClose: () => void
}

export default function HelpModal({ onClose }: HelpModalProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
      <Card className="w-[90%] max-w-4xl max-h-[90vh] overflow-auto" dir="rtl">
        <CardHeader className="flex flex-row items-center justify-between p-4 sticky top-0 bg-white z-10">
          <CardTitle id="HelpTitle">مساعدة</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="actionClose actionLink">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div id="container">
            <a name="pagetop" id="index_1"></a>

            <p id="index_2">
              {" "}
              يمكنك أن تحصل على معلومات عن الاختبار وكيفية إجابة الأسئلة أدناه. <br /> انقرْ على الرابط أو قم بالتمرير
              إلى الأسفل لتجد المعلومات التي تحتاجها. <br /> عندما تنتهي، انقر على{" "}
              <span className="fakelink actionClose actionLink" id="index_3" onClick={onClose}>
                إغلاق
              </span>{" "}
              للعودة إلى شاشة الاختبار. <br />{" "}
            </p>

            <ul className="titleDiv list-none p-0 my-4" id="index_4">
              <li id="index_5" className="my-2">
                <a href="#test" id="index_6" onClick={() => setActiveSection("test")}>
                  التنقل وتتبع سير العمل
                </a>
              </li>
              <li id="index_7" className="my-2">
                <a href="#answer" id="index_8" onClick={() => setActiveSection("answer")}>
                  كيفية الإجابة
                </a>
              </li>
              <li id="index_9" className="my-2">
                <a href="#paging" id="index_10" onClick={() => setActiveSection("paging")}>
                  النصوص الطويلة: تصفح
                </a>
              </li>
              <li id="index_11" className="my-2">
                <a href="#scrolling" id="index_12" onClick={() => setActiveSection("scrolling")}>
                  النصوص الطويلة: تمرير
                </a>
              </li>
              <li id="index_13" className="my-2">
                <a href="#tabs" id="index_14" onClick={() => setActiveSection("tabs")}>
                  النصوص المتعددة: استخدام علامات التبويب
                </a>
              </li>
              <li id="index_15" className="my-2">
                <a href="#navbar" id="index_16" onClick={() => setActiveSection("navbar")}>
                  مواقع الإنترنت: استخدام شريط التنقل
                </a>
              </li>
              <li className="FormulaContent my-2" id="index_17" style={{ display: "list-item" }}>
                <a href="#equation" id="index_18" onClick={() => setActiveSection("equation")}>
                  إدخال الصيغ، و الكسور، و الرموز الرياضية
                </a>
              </li>
              <li className="FSContent my-2" id="index_19" style={{ display: "list-item" }}>
                <a href="#formula" id="index_20" onClick={() => setActiveSection("formula")}>
                  صفحة الصيغ
                </a>
              </li>
              <li className="SSContent my-2" id="index_21">
                <a href="#science" id="index_22" onClick={() => setActiveSection("science")}>
                  العمل على المحاكاة
                </a>
              </li>
              <li className="CTContent my-2" id="index_21ct">
                <a href="#creativethinking" id="index_22ct" onClick={() => setActiveSection("creativethinking")}>
                  العمل بأدوات الرسم
                </a>
              </li>
            </ul>

            <div className="closeButton my-4 flex justify-between" id="index_23">
              <a className="actionLink actionClose text-blue-600 cursor-pointer" id="index_24" onClick={onClose}>
                إغلاق
              </a>
            </div>

            {/* Navigation and Workflow Section */}
            {(activeSection === "test" || !activeSection) && (
              <div>
                <a name="test" id="index_25"></a>
                <table id="testTable" className="w-full border-collapse my-4">
                  <thead id="index_26">
                    <tr id="index_27">
                      <th colSpan={2} id="index_28" className="bg-gray-200 p-2 text-right">
                        التنقل وتتبع سير العمل
                      </th>
                    </tr>
                  </thead>
                  <tbody id="index_29">
                    <tr id="index_30" className="border-b">
                      <td id="index_31" className="p-2 w-1/4">
                        {" "}
                        <img src="/placeholder.svg?height=50&width=50" id="index_32" alt="Next button" />{" "}
                      </td>
                      <td id="index_33" className="p-2">
                        <ul id="index_34" className="list-disc pr-6">
                          <li id="index_35">
                            انقرْ على سهم{" "}
                            <b>
                              <u>التالي</u>
                            </b>{" "}
                            للانتقال إلى السؤال التالي أو الوحدة التالية.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr id="index_36" className="border-b">
                      <td id="index_37" className="p-2">
                        {" "}
                        <img src="/placeholder.svg?height=50&width=50" id="index_38" alt="Back button" />{" "}
                      </td>
                      <td id="index_39" className="p-2">
                        <ul id="index_40" className="list-disc pr-6">
                          <li id="index_41">
                            انقرْ على سهم{" "}
                            <b>
                              <u>رجوع</u>
                            </b>{" "}
                            للرجوع إلى السؤال السابق.
                          </li>
                          <li id="index_42">السهم سيظهر باللون الرمادي عندما لا يكون باستطاعتك الرجوع.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr id="index_43" className="border-b">
                      <td id="index_44" className="p-2">
                        {" "}
                        <img src="/placeholder.svg?height=50&width=50" id="index_45" alt="Progress bar" />{" "}
                      </td>
                      <td id="index_46" className="p-2">
                        <ul id="index_47" className="list-disc pr-6">
                          <li id="index_48">
                            كل مربع في شريط التقدم يمثل وحدة اختبارية واحدة. الوحدة هي مجموعة من الأسئلة المبنيّة على نفس
                            الموضوع.
                          </li>
                          <li id="index_49">بعد إكمال الوحدة، سيصبح المربع باللون الأخضر الغامق.</li>
                          <li id="index_50">المربع الأبيض يبيّن الوحدة التي تعمل عليها حاليًا.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr id="index_51" className="border-b">
                      <td id="index_52" className="p-2">
                        {" "}
                        <img src="/placeholder.svg?height=50&width=50" id="index_53" alt="Clock" />{" "}
                      </td>
                      <td id="index_54" className="p-2">
                        <ul id="index_55" className="list-disc pr-6">
                          <li id="index_56">لديك ٦٠ دقيقة للعمل على كل جزء من الاختبار.</li>
                          <li id="index_57">
                            الدائرة ستمتليء باللون الأخضر الغامق مع تقدم الوقت لتريك كم من الوقت بقي لك للعمل على أي
                            جزء.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* How to Answer Section */}
            {(activeSection === "answer" || !activeSection) && (
              <div>
                <a name="answer" id="index_61"></a>
                <table id="howToTable" className="w-full border-collapse my-4">
                  <thead id="index_62">
                    <tr id="index_63">
                      <th colSpan={2} id="index_64" className="bg-gray-200 p-2 text-right">
                        كيفية الإجابة
                      </th>
                    </tr>
                  </thead>
                  <tbody id="index_65">
                    <tr id="index_66" className="border-b">
                      <td id="index_67" className="p-2 w-1/4">
                        {" "}
                        <img src="/placeholder.svg?height=50&width=50" id="index_68" alt="Multiple choice" />{" "}
                      </td>
                      <td id="index_69" className="p-2">
                        <span className="font-bold" id="index_70">
                          انقرْ على الخيار:
                        </span>{" "}
                        هذه الأسئلة لها إجابة واحدة.
                        <ul id="index_71" className="list-disc pr-6">
                          <li id="index_72">انقرْ على خيارك. الدائرة ستصبح ممتلئة.</li>
                          <li id="index_73">لتغيير إجابتك، انقرْ على خيار آخر.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr id="index_74" className="border-b">
                      <td id="index_75" className="p-2">
                        {" "}
                        <img src="/placeholder.svg?height=50&width=50" id="index_76" alt="Checkboxes" />{" "}
                      </td>
                      <td id="index_77" className="p-2">
                        <span className="font-bold" id="index_78">
                          انقرْ على واحد أو أكثر من المربعات:
                        </span>{" "}
                        هذه الأسئلة يمكن أن يكون لها أكثر من إجابة.
                        <ul id="index_79" className="list-disc pr-6">
                          <li id="index_80">انقرْ على واحد أو أكثر من المربعات. علامة صح ستظهر في كل مربع ستختاره.</li>
                          <li id="index_81">لتغيير إجابتك، انقر على أي مربع اخترته مرة أخرى. ستختفي علامة الصح.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Additional sections would continue here */}

            <div className="closeButton my-4 flex justify-between">
              <a
                className="actionLink text-blue-600 cursor-pointer"
                href="#pagetop"
                onClick={() => setActiveSection(null)}
              >
                ⇑ أعلى الصفحة
              </a>
              <a className="actionLink actionClose text-blue-600 cursor-pointer" onClick={onClose}>
                إغلاق
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

