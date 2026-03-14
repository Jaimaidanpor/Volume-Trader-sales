"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painPoints = [
  {
    emoji: "🤦‍♀️",
    text: "เปิด position แล้วราคาวิ่งสวน ทั้งที่ pattern ชัดมาก",
  },
  {
    emoji: "📉",
    text: "ตัด loss แล้วราคากลับมาทันที ซ้ำๆ ทุกครั้ง",
  },
  {
    emoji: "🎰",
    text: "รู้สึกว่าการเทรดมันเหมือนพนันมากกว่าทักษะ",
  },
  {
    emoji: "😤",
    text: "ดู indicator เยอะมาก แต่ยิ่งดูยิ่งสับสน",
  },
  {
    emoji: "💸",
    text: "เสียเงินไปกับ indicator และ signal ที่ไม่ work",
  },
];

export default function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pain"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(244,167,185,0.3) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              background: "linear-gradient(135deg, #FFF0F0, #FFE0E0)",
              color: "#C62828",
              border: "1px solid #FFCDD2",
            }}
          >
            เรื่องจริงที่นักเทรดเจอ
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#2D2D2D" }}
          >
            คุณเคยรู้สึกแบบนี้ไหม?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            ถ้าใช่ — คุณไม่ได้อยู่คนเดียวค่ะ
          </p>
        </motion.div>

        {/* Pain items */}
        <div className="space-y-4 mb-14">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #FFFBFB, #FFF5F5)",
                border: "1px solid rgba(244,167,185,0.3)",
                boxShadow: "0 2px 12px rgba(244,167,185,0.15)",
              }}
            >
              <span className="text-3xl sm:text-4xl flex-shrink-0 mt-0.5">{item.emoji}</span>
              <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "#2D2D2D" }}>
                &ldquo;{item.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Empathy + pivot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center"
        >
          <div
            className="inline-block px-6 py-4 rounded-3xl mb-8"
            style={{
              background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
              border: "1px solid rgba(200,180,232,0.4)",
            }}
          >
            <p
              className="font-playfair font-bold text-xl sm:text-2xl mb-2"
              style={{ color: "#2D2D2D" }}
            >
              ถ้าคุณรู้สึกแบบนี้ — นั่นไม่ใช่ความผิดของคุณค่ะ
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            ตลาดถูกขับเคลื่อนด้วย{" "}
            <strong style={{ color: "#6B3FA0" }}>Volume</strong>{" "}
            ไม่ใช่ indicator แต่ไม่มีใครสอนเรื่องนี้อย่างจริงจัง...{" "}
            <strong style={{ color: "#C9A96E" }}>จนกระทั่งตอนนี้</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
