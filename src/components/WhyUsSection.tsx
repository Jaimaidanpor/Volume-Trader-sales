"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "เทคนิคที่ใช้ได้จริง",
    description:
      "ไม่ใช่ทฤษฎีล้วนๆ ทุกบทเรียนมีตัวอย่างจากตลาดจริง พร้อม case study ให้วิเคราะห์",
    color: "#6B3FA0",
    bgColor: "rgba(107,63,160,0.08)",
    borderColor: "rgba(107,63,160,0.15)",
  },
  {
    icon: "📊",
    title: "วิเคราะห์ Volume เชิงลึก",
    description:
      "เรียนรู้ Order Flow, Volume Profile, Delta และเครื่องมือเฉพาะทางที่นักเทรดมืออาชีพใช้",
    color: "#C9A96E",
    bgColor: "rgba(201,169,110,0.08)",
    borderColor: "rgba(201,169,110,0.2)",
  },
  {
    icon: "🤝",
    title: "Community นักเทรด",
    description:
      "กลุ่ม LINE และ Discord สำหรับแลกเปลี่ยนความรู้ วิเคราะห์ตลาดร่วมกัน และช่วยเหลือกัน",
    color: "#F4A7B9",
    bgColor: "rgba(244,167,185,0.1)",
    borderColor: "rgba(244,167,185,0.25)",
  },
  {
    icon: "♾️",
    title: "เรียนซ้ำได้ตลอดชีพ",
    description:
      "ซื้อครั้งเดียว เข้าถึงเนื้อหาได้ตลอด รวมถึงอัปเดตเนื้อหาใหม่ในอนาคตด้วย",
    color: "#C8B4E8",
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
        style={{ background: "radial-gradient(circle, #6B3FA0, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
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
              background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
              color: "#6B3FA0",
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
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-purple-200 transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
          >
            ดูคอร์สทั้งหมด →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
