"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "คุณ ธนกร พ.",
    role: "นักเทรด Forex & Gold",
    avatar: "👨‍💼",
    avatarBg: "linear-gradient(135deg, #C8E6C9, #E8F5E9)",
    quote:
      "ก่อนเรียนเข้า-ออกผิดจังหวะตลอด พอเข้าใจ Volume Profile กับ Delta แล้ว รู้ว่า Smart Money อยู่ไหน เทรดมั่นใจขึ้นเยอะมากครับ คุ้มค่ามากๆ",
    stars: 5,
  },
  {
    name: "คุณ วิชัย ส.",
    role: "เทรด Futures พาร์ทไทม์",
    avatar: "👨‍🔬",
    avatarBg: "linear-gradient(135deg, #E8F5E9, #A5D6A7)",
    quote:
      "Workshop วิเคราะห์ Gold และ Futures จากตลาดจริงนี่ดีมากเลยครับ ไฟล์ Indicator ก็ใช้งานได้จริง ตอนนี้อ่าน Footprint ออกแล้วครับ",
    stars: 5,
  },
  {
    name: "คุณ สมหญิง ร.",
    role: "พนักงานบริษัท เทรดพาร์ทไทม์",
    avatar: "👩‍💻",
    avatarBg: "linear-gradient(135deg, #F1F8E9, #C8E6C9)",
    quote:
      "เรียนตอนเย็นหลังเลิกงาน ดูซ้ำได้ไม่จำกัดค่ะ 16 บทเรียนครบมาก แนะนำเพื่อนไปเรียนด้วยแล้ว 2 คนเลยนะคะ คุ้มมากค่ะ",
    stars: 5,
  },
];

const miniReviews = [
  { text: "เข้าใจ Volume Profile แล้วครับ ขอบคุณมากๆ 🙏", name: "คุณ อนุชา ก." },
  { text: "ดีกว่าที่คิดไว้มากเลยครับ", name: "คุณ ปิยะ ม." },
  { text: "Footprint Chart อ่านออกแล้ว ปลื้มมากครับ!", name: "คุณ ณัฐวุฒิ ว." },
  { text: "คุ้มมากๆ ฿ 5,900 นี้ครับ", name: "คุณ สิทธิชัย ร." },
  { text: "แนะนำเพื่อนไปเรียนด้วยแล้วค่ะ", name: "คุณ มินตรา ส." },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
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

  const handleCTA = () => {
    window.open("https://lin.ee/1hpcpsl", "_blank");
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 50%, #F9FDF9 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div
        className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B5E20, transparent)" }}
      />
      <div
        className="absolute bottom-10 right-10 w-52 h-52 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #43A047, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(255,255,255,0.7)",
              color: "#1B5E20",
              border: "1px solid rgba(27,94,32,0.2)",
            }}
          >
            รีวิวจากนักเรียน
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#1A2E1A" }}
          >
            นักเรียนของเราพูดว่าอะไร?
          </h2>

          {/* Stat bar */}
          <div
            className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-6 py-3 rounded-2xl bg-white/80 shadow-sm"
          >
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              ⭐ <span style={{ color: "#1A2E1A", fontWeight: "bold" }}>4.9</span>/5
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="text-sm font-semibold text-gray-700">
              🎓 นักเรียนกว่า <strong style={{ color: "#1B5E20" }}>500 คน</strong>
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="text-sm font-semibold text-gray-700">
              🏆 เรียนแล้วเห็นผลจริง
            </span>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-5 mb-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative rounded-3xl p-6 bg-white/85 backdrop-blur-sm shadow-xl shadow-green-100/40"
              style={{ border: "1px solid rgba(76,175,80,0.2)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FFB300] text-[#FFB300]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-green-100/50">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0 shadow-md"
                  style={{ background: t.avatarBg, border: "2px solid #4CAF50" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1A2E1A" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mini review bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {miniReviews.map((r, i) => (
            <div
              key={i}
              className="px-4 py-2.5 rounded-2xl text-sm shadow-sm"
              style={{
                background: "white",
                border: "1px solid rgba(76,175,80,0.2)",
                color: "#555",
                maxWidth: "260px",
              }}
            >
              <span className="text-gray-600">{r.text}</span>
              <span className="text-xs text-gray-400 ml-2">— {r.name}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center"
        >
          <motion.button
            onClick={handleCTA}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold shadow-lg transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #FFB300 0%, #FFA000 50%, #FFB300 100%)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            สมัครเรียน ฿ 5,900 →
          </motion.button>
          <p className="text-xs text-gray-500 mt-2">เข้าถึงได้ทันทีหลังชำระ</p>
        </motion.div>
      </div>
    </section>
  );
}
