"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "เทคนิคจากตลาดจริง",
    description:
      "ทุกบทเรียนใช้ตัวอย่างจากตลาด Gold, Forex และ Futures ที่เกิดขึ้นจริง ไม่ใช่แค่ทฤษฎี",
    color: "#1B5E20",
    bgColor: "rgba(107,63,160,0.08)",
    borderColor: "rgba(107,63,160,0.15)",
  },
  {
    icon: "📊",
    title: "Footprint & Volume Profile",
    description:
      "เรียนเครื่องมือที่นักเทรดสถาบันใช้ ทั้ง Footprint Chart, Delta, VWAP และ Volume Profile อย่างลึกซึ้ง",
    color: "#43A047",
    bgColor: "rgba(201,169,110,0.08)",
    borderColor: "rgba(201,169,110,0.2)",
  },
  {
    icon: "🖥️",
    title: "รองรับทุก Platform",
    description:
      "มีแนะนำการตั้งค่าทั้ง Sierra Chart และ TradingView พร้อมไฟล์ Indicator ให้ดาวน์โหลดฟรี",
    color: "#C8E6C9",
    bgColor: "rgba(244,167,185,0.1)",
    borderColor: "rgba(244,167,185,0.25)",
  },
  {
    icon: "👥",
    title: "Community Private",
    description:
      "เข้ากลุ่ม LINE นักเรียน Private สำหรับแลกเปลี่ยนการวิเคราะห์และถามตอบกับผู้สอน",
    color: "#A5D6A7",
    bgColor: "rgba(200,180,232,0.12)",
    borderColor: "rgba(200,180,232,0.3)",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B5E20, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #43A047, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
          ref={ref}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
              color: "#1B5E20",
            }}
          >
            ทำไมถึงเลือกเรา
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#2D2D2D" }}
          >
            ทำไมต้องเรียนกับเรา?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            เราออกแบบหลักสูตรโดยผู้เชี่ยวชาญด้าน Volume Trading ที่มีประสบการณ์จริงในตลาด
            เพื่อให้คุณเรียนรู้ได้อย่างมีประสิทธิภาพสูงสุด
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl p-6 border cursor-default"
              style={{
                backgroundColor: feature.bgColor,
                borderColor: feature.borderColor,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                style={{ background: "white" }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="font-semibold text-lg mb-2 leading-snug"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#courses");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-purple-200 transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FFB300, #FFA000)", color: "#1A2E1A" }}
          >
            ดูรายละเอียดคอร์ส →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
