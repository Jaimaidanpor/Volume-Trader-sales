"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { BookOpen, CheckCircle, Flame, Crown, Zap } from "lucide-react";

const courses = [
  {
    tier: "Starter",
    icon: <Zap className="w-6 h-6" />,
    title: "Volume พื้นฐาน",
    description:
      "เรียนรู้พื้นฐาน Volume Trading ตั้งแต่ศูนย์ เหมาะสำหรับผู้เริ่มต้นที่ต้องการเข้าใจตลาดอย่างถูกต้อง",
    price: "฿2,990",
    lessons: 8,
    features: [
      "พื้นฐาน Volume คืออะไร",
      "อ่าน Candlestick + Volume",
      "หาจุดเข้าด้วย Volume",
      "ตัวอย่างตลาดจริง 8 บทเรียน",
      "กลุ่ม Community LINE",
    ],
    badge: null,
    popular: false,
    colorScheme: {
      gradient: "linear-gradient(135deg, #FFF8F0 0%, #F4D9E4 100%)",
      border: "#C9A96E",
      accent: "#C9A96E",
      badgeBg: "linear-gradient(135deg, #C9A96E, #E8C99A)",
      btnBg: "linear-gradient(135deg, #C9A96E, #E8C99A)",
      iconBg: "rgba(201,169,110,0.1)",
      iconColor: "#C9A96E",
    },
  },
  {
    tier: "Pro",
    icon: <Flame className="w-6 h-6" />,
    title: "Volume Advanced",
    description:
      "เทคนิคขั้นสูงสำหรับนักเทรดที่ต้องการอ่าน Volume อย่างมืออาชีพ รวม Volume Profile และ Delta",
    price: "฿5,990",
    lessons: 20,
    features: [
      "Volume Profile เชิงลึก",
      "Order Flow + Delta Analysis",
      "หา Support & Resistance ด้วย Volume",
      "Footprint Chart เบื้องต้น",
      "Live Q&A รายเดือน",
      "กลุ่ม Discord Premium",
    ],
    badge: "ยอดนิยม",
    popular: true,
    colorScheme: {
      gradient: "linear-gradient(145deg, #6B3FA0 0%, #8B5CC0 100%)",
      border: "#6B3FA0",
      accent: "#ffffff",
      badgeBg: "linear-gradient(135deg, #C9A96E, #FFD700)",
      btnBg: "linear-gradient(135deg, #C9A96E, #E8C99A)",
      iconBg: "rgba(255,255,255,0.15)",
      iconColor: "#ffffff",
    },
  },
  {
    tier: "Master",
    icon: <Crown className="w-6 h-6" />,
    title: "Volume + Order Flow Master",
    description:
      "หลักสูตรครบวงจรสำหรับนักเทรดที่ต้องการเชี่ยวชาญ Volume และ Order Flow ในระดับ Institutional",
    price: "฿9,990",
    lessons: 40,
    features: [
      "ทุกอย่างใน Pro +",
      "Institutional Order Flow",
      "Market Microstructure",
      "Algo & Smart Money Concepts",
      "1-on-1 Mentoring Session (2 ครั้ง)",
      "Certificate of Completion",
      "เข้าถึงเนื้อหาตลอดชีพ",
    ],
    badge: null,
    popular: false,
    colorScheme: {
      gradient: "linear-gradient(135deg, #FFF8F0 0%, #EDE0F8 100%)",
      border: "#C8B4E8",
      accent: "#6B3FA0",
      badgeBg: "linear-gradient(135deg, #6B3FA0, #8B5CC0)",
      btnBg: "linear-gradient(135deg, #6B3FA0, #8B5CC0)",
      iconBg: "rgba(107,63,160,0.08)",
      iconColor: "#6B3FA0",
    },
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="courses" className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "#FAFAFA" }}>
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
            เลือกระดับที่เหมาะกับคุณ ตั้งแต่มือใหม่จนถึงนักเทรดระดับ Pro
            พร้อมเรียนซ้ำได้ตลอดชีพ
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative rounded-3xl overflow-hidden shadow-lg"
              style={{
                background: course.colorScheme.gradient,
                border: `2px solid ${course.colorScheme.border}`,
              }}
            >
              {/* Popular Badge */}
              {course.badge && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md z-10"
                  style={{ background: course.colorScheme.badgeBg }}
                >
                  {course.badge} 🔥
                </div>
              )}

              {/* Card Header */}
              <div className="p-6 pb-0">
                {/* Tier Icon + Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{
                      background: course.colorScheme.iconBg,
                      color: course.colorScheme.iconColor,
                    }}
                  >
                    {course.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase opacity-70"
                      style={{ color: course.colorScheme.accent }}
                    >
                      {course.tier}
                    </div>
                    <div
                      className="font-playfair font-bold text-xl leading-tight"
                      style={{ color: course.colorScheme.accent }}
                    >
                      {course.title}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5 opacity-80"
                  style={{ color: course.colorScheme.accent }}
                >
                  {course.description}
                </p>

                {/* Lesson Count */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: `${course.colorScheme.iconBg}`,
                    color: course.colorScheme.accent,
                    border: `1px solid ${course.colorScheme.border}40`,
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  {course.lessons} บทเรียน
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div
                    className="font-playfair font-bold text-4xl"
                    style={{ color: course.colorScheme.accent }}
                  >
                    {course.price}
                  </div>
                  <div
                    className="text-xs opacity-60 mt-0.5"
                    style={{ color: course.colorScheme.accent }}
                  >
                    ชำระครั้งเดียว • เรียนตลอดชีพ
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mx-6 h-px opacity-20"
                style={{ background: course.colorScheme.accent }}
              />

              {/* Features */}
              <div className="p-6 pt-5 pb-5">
                <ul className="space-y-2.5">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: course.colorScheme.accent, opacity: 0.7 }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: course.colorScheme.accent, opacity: 0.85 }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-7">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 shadow-md"
                  style={{
                    background: course.colorScheme.btnBg,
                    color: course.popular ? "#2D2D2D" : "white",
                  }}
                >
                  สมัครเรียน {course.tier}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-10 text-sm text-gray-400"
        >
          ทุกคอร์สรับประกันความพอใจ • ชำระผ่าน PromptPay, บัตรเครดิต และโอนเงินธนาคาร
        </motion.div>
      </div>
    </section>
  );
}
