"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "คุณ สมหญิง ว.",
    role: "นักเทรดอิสระ",
    avatar: "👩",
    avatarBg: "linear-gradient(135deg, #F4D9E4, #EDE0F8)",
    quote:
      "หลังเรียนคอร์สนี้ เข้าใจว่าทำไมราคาถึงขึ้นหรือลง อ่าน Volume แล้วมั่นใจขึ้นมากเลยค่ะ ตอนนี้เทรดได้กำไรสม่ำเสมอมากขึ้น ขอบคุณอาจารย์มากๆ ค่ะ",
    stars: 5,
    course: "Volume Advanced",
  },
  {
    name: "คุณ พิมพ์ใจ ร.",
    role: "พนักงานบริษัท",
    avatar: "👩‍💼",
    avatarBg: "linear-gradient(135deg, #EDE0F8, #C8B4E8)",
    quote:
      "เรียนตอนเย็นหลังเลิกงาน ครูอธิบายเข้าใจง่ายมาก ตอนนี้ทำกำไรได้ทุกเดือนค่ะ แนะนำให้เพื่อนอีก 3 คนมาเรียนแล้ว ทุกคนประทับใจมากค่ะ",
    stars: 5,
    course: "Volume Advanced",
  },
  {
    name: "คุณ นภา ส.",
    role: "แม่บ้านนักลงทุน",
    avatar: "👩‍🍳",
    avatarBg: "linear-gradient(135deg, #FFF8F0, #F4D9E4)",
    quote:
      "ไม่เคยเทรดมาก่อนเลย แต่คอร์ส Starter ทำให้เข้าใจตลาดมากขึ้น แนะนำเลยค่ะ อาจารย์ใจดีมาก ตอบทุกคำถามใน community เสมอค่ะ",
    stars: 5,
    course: "Volume พื้นฐาน",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #EDE0F8 0%, #F4D9E4 50%, #FFF8F0 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div
        className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B3FA0, transparent)" }}
      />
      <div
        className="absolute bottom-10 right-10 w-52 h-52 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
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
              background: "rgba(255,255,255,0.7)",
              color: "#6B3FA0",
              border: "1px solid rgba(107,63,160,0.2)",
            }}
          >
            รีวิวจากนักเรียน
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#2D2D2D" }}
          >
            เสียงจากนักเรียน
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            ความสำเร็จของนักเรียนคือความภูมิใจที่ยิ่งใหญ่ที่สุดของเรา
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-2xl bg-white/80 shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
            <span className="font-bold text-xl" style={{ color: "#2D2D2D" }}>
              4.9
            </span>
            <span className="text-gray-400 text-sm">จากนักเรียน 2,400+ คน</span>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative rounded-3xl p-7 bg-white/80 backdrop-blur-sm shadow-xl shadow-purple-100/40"
              style={{ border: "1px solid rgba(200,180,232,0.3)" }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-5 right-6 opacity-10"
                style={{ color: "#6B3FA0" }}
              >
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Course badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
                  color: "#6B3FA0",
                }}
              >
                เรียน: {t.course}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-purple-100/50">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-md"
                  style={{
                    background: t.avatarBg,
                    border: "2px solid #C9A96E",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#2D2D2D" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#courses");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-200 transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
          >
            เริ่มต้นเรียนวันนี้ →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
