"use client";

import { openLine, LINE_URL } from "@/lib/openLine";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "รากฐาน",
    emoji: "🏗️",
    lessons: "บทที่ 1–4",
    color: "#1B5E20",
    bg: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
    modules: [
      { num: 1, title: "แนะนำ Order Flow & ทำไม Volume ถึงสำคัญ" },
      { num: 2, title: "Volume Profile พื้นฐาน — POC, VAH, VAL" },
      { num: 3, title: "Tick Chart คืออะไรและการตั้งค่า" },
      { num: 4, title: "VWAP — เครื่องมือที่ Institutional ใช้ทุกวัน" },
    ],
  },
  {
    phase: "Phase 2",
    title: "เครื่องมือขั้นสูง",
    emoji: "⚡",
    lessons: "บทที่ 5–8",
    color: "#1A2E1A",
    bg: "linear-gradient(135deg, #FFB300, #FFA000)",
    modules: [
      { num: 5, title: "Delta Analysis — อ่านแรงซื้อแรงขายแบบ Real-time" },
      { num: 6, title: "Footprint Chart เบื้องต้น" },
      { num: 7, title: "Footprint Chart ขั้นสูง — อ่าน Absorption & Exhaustion" },
      { num: 8, title: "หา Demand & Supply Zone ด้วย Volume" },
    ],
  },
  {
    phase: "Phase 3",
    title: "Workshop จริง",
    emoji: "🎯",
    lessons: "บทที่ 9–13",
    color: "#FFFFFF",
    bg: "linear-gradient(135deg, #2E7D32, #388E3C)",
    modules: [
      { num: 9, title: "Price Action + Volume — ผสมให้ลงตัว" },
      { num: 10, title: "การตั้งค่า Sierra Chart ทีละขั้นตอน" },
      { num: 11, title: "การตั้งค่า TradingView ทีละขั้นตอน" },
      { num: 12, title: "Workshop: วิเคราะห์ Gold Live" },
      { num: 13, title: "Workshop: วิเคราะห์ Forex Live" },
    ],
  },
  {
    phase: "Phase 4",
    title: "ระบบการเทรด",
    emoji: "🏆",
    lessons: "บทที่ 14–16",
    color: "#1B5E20",
    bg: "linear-gradient(135deg, #E8F5E9, #DCFCE7)",
    modules: [
      { num: 14, title: "Workshop: วิเคราะห์ Futures Live" },
      { num: 15, title: "Risk Management ด้วย Volume" },
      { num: 16, title: "สร้าง Trading Plan ส่วนตัวของคุณ" },
    ],
  },
];

const valueStack = [
  { emoji: "🎬", label: "วิดีโอ 16 บทเรียน", value: "฿ 14,900" },
  { emoji: "📁", label: "ไฟล์ Indicator พร้อมใช้", value: "฿ 2,000" },
  { emoji: "👥", label: "กลุ่ม LINE Community Private", value: "฿ 3,000" },
  { emoji: "🔄", label: "เข้าถึงตลอดชีพ + อัปเดตฟรี", value: "฿ 5,000" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

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
            "radial-gradient(ellipse at 20% 80%, rgba(76,175,80,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(27,94,32,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
              color: "#1B5E20",
            }}
          >
            เนื้อหาหลักสูตร
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#1A2E1A" }}
          >
            สิ่งที่คุณจะได้เรียน
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            ครบ <strong style={{ color: "#1B5E20" }}>16 บทเรียน</strong> แบ่งเป็น 4 Phase — จากพื้นฐานถึงระดับมืออาชีพ
          </p>
        </motion.div>

        {/* 4 Phase grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-5 mb-14"
        >
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="rounded-3xl overflow-hidden shadow-md"
              style={{ border: "1px solid rgba(76,175,80,0.2)" }}
            >
              {/* Phase header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: phase.bg, borderBottom: "1px solid rgba(0,0,0,0.06)" }}
              >
                <span className="text-2xl">{phase.emoji}</span>
                <div>
                  <div
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: phase.color }}
                  >
                    {phase.phase} — {phase.lessons}
                  </div>
                  <div
                    className="font-playfair font-bold text-lg"
                    style={{ color: phase.color === "#FFFFFF" ? "#FFFFFF" : "#1A2E1A" }}
                  >
                    {phase.title}
                  </div>
                </div>
              </div>

              {/* Module list */}
              <div className="bg-white px-6 py-4">
                <ul className="space-y-2.5">
                  {phase.modules.map((mod) => (
                    <li key={mod.num} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ background: "rgba(27,94,32,0.12)", color: "#1B5E20" }}
                      >
                        {mod.num}
                      </span>
                      <span className="text-sm text-gray-700 leading-snug">{mod.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-green-200/30"
          style={{
            background: "linear-gradient(145deg, #1B5E20 0%, #2E7D32 100%)",
          }}
        >
          <div className="px-6 sm:px-10 py-8">
            <h3 className="text-white font-playfair font-bold text-2xl sm:text-3xl text-center mb-2">
              คุณจะได้รับทั้งหมดนี้ค่ะ:
            </h3>
            <p className="text-green-200 text-sm text-center mb-8">รวมมูลค่าทั้งหมดที่คุณจะได้รับ</p>

            <div className="space-y-3 mb-8 max-w-xl mx-auto">
              {valueStack.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-3 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-white text-sm sm:text-base">{item.label}</span>
                  </div>
                  <span className="text-green-200 text-sm font-semibold whitespace-nowrap">
                    มูลค่า {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price reveal */}
            <div className="text-center">
              <div className="mb-2">
                <span className="text-green-300 text-base line-through mr-2">รวมมูลค่า ฿ 24,900</span>
              </div>
              <div className="mb-1">
                <span className="text-white text-sm">วันนี้ราคาเพียง</span>
              </div>
              <div
                className="font-playfair font-bold text-5xl sm:text-6xl mb-4"
                style={{ color: "#A5D6A7" }}
              >
                ฿ 5,900
              </div>

              <motion.a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openLine(e)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #FFB300 0%, #FFA000 50%, #FFB300 100%)",
                  color: "#1A2E1A",
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                สมัครเรียนเลยตอนนี้ — ฿ 5,900 →
              </motion.a>

              <p className="text-green-300 text-xs mt-3">
                ชำระครั้งเดียว • เรียนซ้ำได้ตลอดชีพ • เข้าถึงทันทีหลังชำระ
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-6 text-sm text-gray-400"
        >
          ราคาพิเศษนี้อาจสิ้นสุดโดยไม่แจ้งล่วงหน้า • ชำระผ่าน PromptPay / โอนเงิน
        </motion.p>
      </div>
    </section>
  );
}
