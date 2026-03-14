"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, BookOpen } from "lucide-react";

const modules = [
  "แนะนำ Order Flow & Footprint Chart",
  "Volume Profile พื้นฐาน",
  "POC, VAH, VAL คืออะไร",
  "Tick Chart & การตั้งค่า",
  "VWAP และการใช้งาน",
  "Delta Analysis เชิงลึก",
  "Footprint Chart ขั้นสูง",
  "หา Demand & Supply Zone",
  "Price Action + Volume",
  "การตั้งค่า Sierra Chart",
  "การตั้งค่า TradingView",
  "Workshop: วิเคราะห์ Gold",
  "Workshop: วิเคราะห์ Forex",
  "Workshop: วิเคราะห์ Futures",
  "Risk Management ด้วย Volume",
  "สร้าง Trading Plan ส่วนตัว",
];

const included = [
  "วิดีโอ 16 บทเรียน เข้าถึงตลอดชีพ",
  "ไฟล์ Indicator พร้อมใช้งาน",
  "กลุ่ม Community นักเรียน Private",
  "อัปเดตเนื้อหาในอนาคต",
  "รองรับทั้ง Sierra Chart & TradingView",
];

export default function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="courses"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(200,180,232,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
              color: "#6B3FA0",
            }}
          >
            หลักสูตรของเรา
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#2D2D2D" }}
          >
            คอร์สเรียนของเรา
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            หลักสูตรครบวงจร Volume Profile &amp; Order Flow Trading
            เรียนซ้ำได้ตลอดชีพ พร้อม Community นักเรียน Private
          </p>
        </motion.div>

        {/* Single Premium Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-300/30"
            style={{
              background: "linear-gradient(145deg, #6B3FA0 0%, #8B5CC0 100%)",
              border: "2px solid #6B3FA0",
            }}
          >
            {/* Top Badge */}
            <div
              className="absolute top-5 right-5 px-4 py-1.5 rounded-full text-xs font-bold shadow-md z-10"
              style={{ background: "linear-gradient(135deg, #C9A96E, #FFD700)", color: "#2D2D2D" }}
            >
              ประหยัด ฿9,000 (60%) 🔥
            </div>

            {/* Card Header */}
            <div className="p-8 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-purple-200 opacity-80">
                    หลักสูตรเต็ม
                  </div>
                  <div className="font-playfair font-bold text-2xl text-white leading-tight">
                    Volume Profile &amp; Order Flow Trading
                  </div>
                </div>
              </div>

              <p className="text-purple-200 text-sm leading-relaxed mt-3 mb-6 opacity-90">
                หลักสูตรครบวงจร • 16 บทเรียน • เรียนซ้ำได้ตลอดชีพ
              </p>

              {/* Price block */}
              <div className="mb-6 flex flex-wrap items-end gap-4">
                <div>
                  <div className="text-purple-300 text-sm line-through mb-0.5">฿14,900</div>
                  <div
                    className="font-playfair font-bold text-5xl text-white"
                  >
                    ฿5,900
                  </div>
                  <div className="text-purple-200 text-xs mt-1 opacity-70">
                    ชำระครั้งเดียว • เรียนตลอดชีพ
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 h-px" style={{ background: "rgba(255,255,255,0.15)" }} />

            {/* Body: modules + included */}
            <div className="p-8 pt-6 grid md:grid-cols-2 gap-8">
              {/* Module list */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
                  เนื้อหา 16 บทเรียน
                </h3>
                <ul className="space-y-2">
                  {modules.map((mod, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ background: "rgba(201,169,110,0.25)", color: "#C9A96E" }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-purple-100 text-sm leading-snug">{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's included */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
                  สิ่งที่ได้รับ
                </h3>
                <ul className="space-y-3 mb-8">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "#C9A96E" }}
                      />
                      <span className="text-purple-100 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full block text-center py-4 rounded-2xl font-bold text-base transition-all duration-200 shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #E8C99A)",
                    color: "#2D2D2D",
                  }}
                >
                  สมัครเรียนเลย — ฿5,900
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8 text-sm text-gray-400"
        >
          ราคาพิเศษนี้อาจสิ้นสุดโดยไม่แจ้งล่วงหน้า • ชำระผ่าน PromptPay / โอนเงิน / บัตรเครดิต
        </motion.div>
      </div>
    </section>
  );
}
