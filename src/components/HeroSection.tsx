"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, Video, DollarSign } from "lucide-react";

const floatingVariants: Variants = {
  animate: {
    y: [0, -18, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const floatingVariants2: Variants = {
  animate: {
    y: [0, 14, 0],
    x: [0, 8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const floatingVariants3: Variants = {
  animate: {
    y: [0, -10, 0],
    x: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const stats = [
  {
    icon: <Video className="w-5 h-5" />,
    value: "16",
    label: "บทเรียน",
  },
  {
    icon: <Star className="w-5 h-5" />,
    value: "4.9",
    label: "Rating",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    value: "฿5,900",
    label: "ราคาพิเศษ",
  },
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-20"
    >
      {/* Decorative blobs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-24 right-10 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C8B4E8, #F4A7B9)" }}
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-24 left-8 w-48 h-48 rounded-full opacity-25 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, #F4A7B9)" }}
      />
      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B3FA0, #C8B4E8)" }}
      />

      {/* Decorative circles — smaller ornamental */}
      <div
        className="absolute top-32 left-1/4 w-12 h-12 rounded-full opacity-40 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C9A96E, #E8C99A)" }}
      />
      <div
        className="absolute bottom-40 right-16 w-8 h-8 rounded-full opacity-35 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C8B4E8, #F4A7B9)" }}
      />
      <div
        className="absolute top-1/3 left-10 w-5 h-5 rounded-full opacity-50 pointer-events-none"
        style={{ backgroundColor: "#C9A96E" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
            style={{
              background: "linear-gradient(135deg, #F4D9E4, #EDE0F8)",
              color: "#6B3FA0",
              border: "1px solid #C8B4E8",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#6B3FA0] animate-pulse" />
            🔥 ลด 60% เหลือเพียง ฿5,900
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
            style={{ color: "#2D2D2D" }}
          >
            เรียนรู้อ่านตลาด
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #6B3FA0, #C9A96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Volume Profile
            </span>
            <span className="block">&amp; Order Flow</span>
            <span
              className="block text-3xl sm:text-4xl lg:text-5xl mt-1"
              style={{ color: "#C9A96E" }}
            >
              อย่างมืออาชีพ
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ color: "#555" }}
          >
            เข้าใจพฤติกรรมของ Smart Money อ่าน Footprint Chart, Delta และ Volume Profile
            เพื่อหาจุดเข้าออกที่แม่นยำ ใช้ได้จริงในตลาด{" "}
            <strong className="font-semibold" style={{ color: "#6B3FA0" }}>
              Forex, Gold
            </strong>{" "}
            และ{" "}
            <strong className="font-semibold" style={{ color: "#6B3FA0" }}>
              Futures
            </strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
          >
            <motion.button
              onClick={() => handleScroll("#courses")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-base shadow-lg hover:shadow-purple-300/50 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #6B3FA0 0%, #8B5CC0 100%)" }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              สมัครเรียน ฿5,900
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              onClick={() => handleScroll("#courses")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base border-2 transition-all duration-200 hover:bg-purple-50"
              style={{ borderColor: "#6B3FA0", color: "#6B3FA0" }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              ดูเนื้อหาคอร์ส
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span style={{ color: "#C9A96E" }}>{stat.icon}</span>
                  <span
                    className="text-xl font-bold font-playfair"
                    style={{ color: "#2D2D2D" }}
                  >
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual — decorative card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div
              className="rounded-3xl p-8 shadow-2xl shadow-purple-200/60 border border-white/60"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(237,224,248,0.7))",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Card title */}
              <div className="mb-4">
                <p className="font-playfair font-bold text-lg" style={{ color: "#2D2D2D" }}>
                  Volume Profile &amp; Order Flow
                </p>
              </div>

              {/* Chart visualization */}
              <div className="mb-6">
                <div className="flex items-end justify-between gap-1 h-32 mb-2">
                  {[40, 55, 35, 70, 50, 85, 65, 90, 75, 95, 80, 100].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                        className="flex-1 rounded-sm"
                        style={{
                          background:
                            h > 75
                              ? "linear-gradient(to top, #6B3FA0, #C8B4E8)"
                              : h > 55
                              ? "linear-gradient(to top, #C9A96E, #E8C99A)"
                              : "linear-gradient(to top, #F4A7B9, #FDD5DF)",
                        }}
                      />
                    )
                  )}
                </div>
                <div className="text-xs text-gray-400 text-center">Volume Profile Chart</div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Buy Volume", value: "+68.4%", color: "#6B3FA0" },
                  { label: "Sell Volume", value: "31.6%", color: "#F4A7B9" },
                  { label: "Delta", value: "+4,280", color: "#C9A96E" },
                  { label: "VWAP", value: "1,842.50", color: "#2D2D2D" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-3"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    <div className="text-xs text-gray-400 mb-0.5">{m.label}</div>
                    <div className="font-bold text-sm" style={{ color: m.color }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA inside card */}
              <div
                className="rounded-2xl p-4 text-center"
                style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
              >
                <p className="text-white text-sm font-medium mb-2">
                  อ่าน Volume เป็น = เห็นแรงซื้อแรงขาย
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl shadow-lg text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #C9A96E, #E8C99A)" }}
            >
              ลด 60% 🔥
            </motion.div>

            {/* Bottom badge */}
            <motion.div
              variants={floatingVariants2}
              animate="animate"
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl shadow-lg bg-white border border-purple-100 text-xs font-semibold"
              style={{ color: "#6B3FA0" }}
            >
              🎓 16 บทเรียน • เรียนซ้ำได้ตลอดชีพ
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 20C1080 60 720 0 360 30C180 45 0 20 0 20L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
