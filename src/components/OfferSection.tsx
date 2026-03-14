"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const valueStackBrief = [
  { emoji: "🎬", label: "วิดีโอ 16 บทเรียน", value: "฿14,900" },
  { emoji: "📁", label: "ไฟล์ Indicator พร้อมใช้", value: "฿2,000" },
  { emoji: "👥", label: "กลุ่ม LINE Community Private", value: "฿3,000" },
  { emoji: "🔄", label: "เรียนซ้ำตลอดชีพ + อัปเดตฟรี", value: "฿5,000" },
];

const trustBadges = [
  { emoji: "🔒", text: "ปลอดภัย 100%" },
  { emoji: "📱", text: "ดูได้ทุกอุปกรณ์" },
  { emoji: "♾️", text: "เรียนซ้ำได้ตลอดชีพ" },
];

export default function OfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleCTA = () => {
    const el = document.querySelector("#final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="offer"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #1B5E20 0%, #2E7D32 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #A5D6A7, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C8E6C9, transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(165,214,167,0.2)",
              color: "#A5D6A7",
              border: "1px solid rgba(165,214,167,0.4)",
            }}
          >
            ข้อเสนอพิเศษ
          </span>

          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight"
          >
            โอกาสสุดท้าย
            <span className="block" style={{ color: "#A5D6A7" }}>
              ที่ราคา ฿5,900
            </span>
          </h2>

          {/* Urgency message */}
          <div
            className="inline-block px-5 py-3 rounded-2xl mb-8"
            style={{ background: "rgba(255,193,7,0.15)", border: "1px solid rgba(255,193,7,0.3)" }}
          >
            <p className="text-yellow-300 text-sm font-semibold">
              ⚠️ ราคาพิเศษนี้ไม่มีกำหนดสิ้นสุด อาจขึ้นราคาได้ตลอดเวลา
            </p>
          </div>

          {/* Value stack brief */}
          <div className="space-y-3 mb-8 text-left">
            {valueStackBrief.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-center justify-between px-5 py-3 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-white text-sm sm:text-base">{item.label}</span>
                </div>
                <span className="text-green-200 text-sm font-semibold whitespace-nowrap">
                  {item.value}
                </span>
              </motion.div>
            ))}

            {/* Total */}
            <div
              className="flex items-center justify-between px-5 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <span className="text-green-200 text-sm">รวมมูลค่า</span>
              <span className="text-green-200 text-sm line-through">฿24,900</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-green-300 text-sm mb-1">วันนี้ราคาเพียง</p>
            <div
              className="font-playfair font-bold text-6xl sm:text-7xl mb-2"
              style={{ color: "#A5D6A7" }}
            >
              ฿5,900
            </div>
            <p className="text-green-300 text-sm">ชำระครั้งเดียว • เรียนตลอดชีพ</p>
          </div>

          {/* BIG CTA */}
          <motion.button
            onClick={handleCTA}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg sm:text-xl text-white shadow-2xl mb-4 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #43A047 0%, #66BB6A 50%, #43A047 100%)",
            }}
            whileHover={{ scale: 1.04, y: -3, boxShadow: "0 25px 50px rgba(67,160,71,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            สมัครเรียนเลยตอนนี้ — ฿5,900 →
          </motion.button>

          {/* Payment info */}
          <p className="text-green-200 text-xs sm:text-sm mb-8">
            ✅ ชำระผ่าน PromptPay / โอนเงิน / บัตรเครดิต &nbsp;•&nbsp; ✅ เข้าถึงได้ทันทีหลังชำระ
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-green-200 text-sm">
                <span className="text-base">{badge.emoji}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
