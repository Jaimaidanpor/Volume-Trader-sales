"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transformations = [
  {
    from: "เดาทิศทาง",
    to: "รู้ว่า Smart Money เข้าตรงไหน",
  },
  {
    from: "โดน Stop Hunt",
    to: "รู้จุดที่ตลาดจะ Reverse จริงๆ",
  },
  {
    from: "เทรดแบบพนัน",
    to: "มีระบบที่ทำซ้ำได้",
  },
];

const beforeAfterRows = [
  { label: "การวิเคราะห์", before: "ดูแค่เส้น MA/RSI", after: "อ่าน Volume Profile จริงๆ" },
  { label: "จุดเข้าเทรด", before: "เดาจาก Pattern", after: "เห็น Smart Money เข้า" },
  { label: "Stop Loss", before: "ตั้งแบบไม่มีเหตุผล", after: "ตั้งตามโครงสร้าง Volume" },
  { label: "ความมั่นใจ", before: "ลังเลทุกครั้ง", after: "มีระบบที่ทดสอบแล้ว" },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="solution"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #F1F8E9 0%, #F9FDF9 100%)",
      }}
    >
      {/* Decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B5E20, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #43A047, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
              color: "#1B5E20",
            }}
          >
            วิธีแก้ปัญหา
          </span>

          {/* Big reveal */}
          <div
            className="inline-block px-6 py-3 rounded-2xl mb-5"
            style={{ background: "linear-gradient(135deg, #1B5E20, #2E7D32)" }}
          >
            <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              แนะนำ: หลักสูตร
            </p>
          </div>

          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight"
            style={{ color: "#1A2E1A" }}
          >
            Volume Profile &
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #1B5E20, #43A047)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Order Flow Trading
            </span>
          </h2>
          <p
            className="text-base sm:text-lg font-semibold max-w-2xl mx-auto"
            style={{ color: "#555" }}
          >
            หลักสูตรเดียวในไทยที่สอน Volume Profile + Order Flow อย่างครบวงจร
          </p>
        </motion.div>

        {/* Transformation cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {transformations.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(76,175,80,0.25)",
                boxShadow: "0 4px 20px rgba(27,94,32,0.08)",
              }}
            >
              <div className="mb-3">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-2"
                  style={{ background: "#FFF0F0", color: "#C62828" }}
                >
                  <span>❌</span>
                  <span>{t.from}</span>
                </div>
              </div>
              <div className="text-2xl mb-3">↓</div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "#F0FFF4", color: "#1B5E20" }}
              >
                <span>✅</span>
                <span>{t.to}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Before / After table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="rounded-3xl overflow-hidden shadow-xl shadow-green-100/40"
          style={{ border: "1px solid rgba(76,175,80,0.25)" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-3">
            <div
              className="py-3 px-4 text-xs font-bold uppercase tracking-wide text-center"
              style={{ background: "#F5F5F5", color: "#777" }}
            >
              หัวข้อ
            </div>
            <div
              className="py-3 px-4 text-xs font-bold uppercase tracking-wide text-center"
              style={{ background: "#FFF0F0", color: "#C62828" }}
            >
              ❌ ก่อนเรียน
            </div>
            <div
              className="py-3 px-4 text-xs font-bold uppercase tracking-wide text-center"
              style={{ background: "#E8F5E9", color: "#1B5E20" }}
            >
              ✅ หลังเรียน
            </div>
          </div>

          {/* Table rows */}
          {beforeAfterRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-t"
              style={{ borderColor: "rgba(76,175,80,0.15)" }}
            >
              <div
                className="py-3 px-4 text-xs sm:text-sm font-semibold flex items-center"
                style={{ background: "rgba(255,255,255,0.9)", color: "#1A2E1A" }}
              >
                {row.label}
              </div>
              <div
                className="py-3 px-4 text-xs sm:text-sm text-center flex items-center justify-center"
                style={{ background: "rgba(255,240,240,0.5)", color: "#C62828" }}
              >
                {row.before}
              </div>
              <div
                className="py-3 px-4 text-xs sm:text-sm text-center flex items-center justify-center font-medium"
                style={{ background: "rgba(232,245,233,0.5)", color: "#2E7D32" }}
              >
                {row.after}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
