"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, TrendingUp, Users, BookOpen } from "lucide-react";

const achievements = [
  { icon: <TrendingUp className="w-5 h-5" />, value: "10+ ปี", label: "ประสบการณ์เทรด" },
  { icon: <Users className="w-5 h-5" />, value: "2,400+", label: "นักเรียนทั้งหมด" },
  { icon: <BookOpen className="w-5 h-5" />, value: "40+", label: "บทเรียนวิดีโอ" },
  { icon: <Award className="w-5 h-5" />, value: "4.9★", label: "คะแนนเฉลี่ย" },
];

export default function InstructorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instructor" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(107,63,160,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Instructor Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Avatar circle */}
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center text-8xl shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #EDE0F8, #F4D9E4, #FFF8F0)",
                  border: "4px solid",
                  borderColor: "#C9A96E",
                }}
              >
                👩‍💻
              </div>

              {/* Floating badge — experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:right-0 px-4 py-2.5 rounded-2xl shadow-lg bg-white border"
                style={{ borderColor: "#C8B4E8" }}
              >
                <div className="text-xs text-gray-400">ประสบการณ์</div>
                <div className="font-bold text-sm" style={{ color: "#6B3FA0" }}>
                  10+ ปีในตลาด
                </div>
              </motion.div>

              {/* Floating badge — market */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-4 sm:left-0 px-4 py-2.5 rounded-2xl shadow-lg text-white text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
              >
                📈 Forex • Gold • หุ้นไทย
              </motion.div>

              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #C9A96E, #C8B4E8, #F4A7B9, #C9A96E)",
                  padding: "3px",
                  borderRadius: "50%",
                  opacity: 0.4,
                  transform: "scale(1.06)",
                }}
              />
            </div>
          </motion.div>

          {/* Instructor Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
                color: "#6B3FA0",
              }}
            >
              ผู้สอน
            </span>

            <h2
              className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-3"
              style={{ color: "#2D2D2D" }}
            >
              อาจารย์ ปุณยวีร์
            </h2>
            <p className="font-semibold text-lg mb-5" style={{ color: "#C9A96E" }}>
              Volume Trading Expert & Market Analyst
            </p>

            <div className="space-y-4 mb-8 text-gray-600 text-base leading-relaxed">
              <p>
                ผู้เชี่ยวชาญด้าน Volume Trading ที่มีประสบการณ์มากกว่า{" "}
                <strong className="text-[#6B3FA0]">10 ปี</strong>{" "}
                ในตลาด Forex, Gold และหุ้นไทย
                เชี่ยวชาญพิเศษด้าน Order Flow Analysis และ Volume Profile
              </p>
              <p>
                เคยเทรดแบบ Price Action ล้วนๆ แต่เมื่อค้นพบพลังของ Volume ก็เปลี่ยนวิธีเทรดไปตลอดกาล
                จึงมุ่งมั่นถ่ายทอดความรู้นี้ให้แก่นักเทรดไทยทุกคน
              </p>
              <p>
                ปัจจุบันสอนนักเรียนกว่า <strong className="text-[#6B3FA0]">2,400+ คน</strong> ทั่วประเทศไทย
                และยังคง Active Trading ในตลาดทุกวัน
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #FFF8F0, #EDE0F8)",
                    border: "1px solid rgba(200,180,232,0.3)",
                  }}
                >
                  <div className="flex justify-center mb-1" style={{ color: "#C9A96E" }}>
                    {item.icon}
                  </div>
                  <div className="font-bold text-base" style={{ color: "#6B3FA0" }}>
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => {
                const el = document.querySelector("#courses");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-200 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              เรียนกับอาจารย์วันนี้ →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
