"use client";

import { motion, type Variants } from "framer-motion";

const floatingVariants: Variants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatingVariants2: Variants = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: "calc(var(--urgency-bar-height, 40px) + 24px)",
        background: "linear-gradient(145deg, #F9FDF9 0%, #E8F5E9 50%, #F1F8E9 100%)",
      }}
    >
      {/* Decorative blobs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-8 w-72 h-72 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #A5D6A7, #C8E6C9)" }}
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-20 left-4 w-56 h-56 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #43A047, #C8E6C9)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
              color: "#E65100",
              border: "1px solid #FFCC80",
            }}
          >
            ⚠️ คนส่วนใหญ่เทรดแบบ &ldquo;เดา&rdquo; — คุณจะไม่เป็นแบบนั้นอีกต่อไป
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-5"
            style={{ color: "#1A2E1A" }}
          >
            ทำไมคุณถึงยังขาดทุน
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(135deg, #FFB300, #FFA000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ทั้งที่ดู Chart
            </span>
            <span className="block">ทุกวัน?</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
            style={{ color: "#555" }}
          >
            เพราะคุณกำลังดูแค่{" "}
            <strong style={{ color: "#1B5E20" }}>&ldquo;เส้น&rdquo;</strong> บนกราฟ — แต่ไม่เห็น{" "}
            <strong style={{ color: "#43A047" }}>&ldquo;แรงซื้อแรงขาย&rdquo;</strong>{" "}
            ที่แท้จริงที่อยู่เบื้องหลัง
          </motion.p>

          {/* Pain bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 mb-7 text-left max-w-xl mx-auto lg:mx-0"
          >
            {[
              { emoji: "😤", text: "เข้าออกผิดจังหวะซ้ำๆ ทั้งที่ตั้ง SL ไว้แล้ว" },
              { emoji: "😰", text: "ถูก Stop Hunt บ่อยจนไม่กล้าเทรด" },
              { emoji: "😩", text: "เห็นราคาวิ่งตามที่วิเคราะห์ แต่ตัวเองไม่ได้กำไร" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(76,175,80,0.2)",
                }}
              >
                <span className="text-xl flex-shrink-0">{item.emoji}</span>
                <span className="text-sm sm:text-base text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Transition line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base font-semibold mb-7 max-w-xl mx-auto lg:mx-0"
            style={{ color: "#1B5E20" }}
          >
            ปัญหาเหล่านี้มีคำตอบเดียวค่ะ — คุณต้องเรียนรู้ที่จะอ่าน Volume
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-2"
          >
            <motion.button
              onClick={() => handleScroll("#offer")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #FFB300 0%, #FFA000 50%, #FFB300 100%)",
                color: "#1A2E1A",
              }}
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 20px 40px rgba(46,125,50,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              ใช่! อยากเรียนอ่าน Volume →
            </motion.button>
            <p className="text-xs sm:text-sm text-gray-500">
              ราคาพิเศษ{" "}
              <strong style={{ color: "#1B5E20" }}>฿ 5,900</strong>{" "}
              <span className="line-through text-gray-400">(ปกติ ฿ 14,900)</span>
            </p>
          </motion.div>

          {/* Urgency strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 inline-block px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: "#FFF3CD", color: "#856404", border: "1px solid #FFECB5" }}
          >
            🔥 เหลือเพียง <strong>8 ที่นั่งสุดท้าย</strong> ในราคา ฿ 5,900
          </motion.div>
        </div>

        {/* Right: Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm">
            {/* Main card */}
            <div
              className="rounded-3xl p-6 shadow-2xl shadow-green-200/60"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(232,245,233,0.8))",
                border: "1px solid rgba(76,175,80,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                className="font-playfair font-bold text-base mb-4 text-center"
                style={{ color: "#1A2E1A" }}
              >
                Volume Profile & Order Flow
              </p>

              {/* Before / After */}
              <div className="space-y-3 mb-5">
                {/* Before */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "linear-gradient(135deg, #FFF0F0, #FFE4E4)", border: "1px solid #FFCDD2" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">😞</span>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide">BEFORE</span>
                  </div>
                  <p className="text-sm text-red-700 font-medium">เทรดแบบเดา ❌</p>
                  <p className="text-xs text-red-400 mt-1">ดูแค่เส้นกราฟ — ไม่รู้ว่าใครซื้อ ใครขาย</p>
                </div>

                {/* Arrow */}
                <div className="text-center text-xl">↓</div>

                {/* After */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "linear-gradient(135deg, #F0FFF4, #DCFCE7)", border: "1px solid #BBF7D0" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🚀</span>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wide">AFTER</span>
                  </div>
                  <p className="text-sm text-green-700 font-medium">
                    ✅ อ่าน Volume เป็น
                  </p>
                  <p className="text-xs text-green-600 mt-1">รู้ว่า Smart Money อยู่ที่ไหน</p>
                </div>
              </div>

              {/* Mini volume chart visualization */}
              <div className="mb-4">
                <div className="flex items-end justify-between gap-0.5 h-16 mb-1">
                  {[35, 50, 30, 65, 45, 80, 60, 90, 70, 95, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
                      className="flex-1 rounded-sm"
                      style={{
                        background:
                          h > 75
                            ? "linear-gradient(to top, #1B5E20, #4CAF50)"
                            : h > 50
                            ? "linear-gradient(to top, #2E7D32, #81C784)"
                            : "linear-gradient(to top, #A5D6A7, #C8E6C9)",
                      }}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-gray-400 text-center">Volume Profile Chart</div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Buy Volume", value: "+68.4%", color: "#1B5E20" },
                  { label: "Sell Volume", value: "31.6%", color: "#E57373" },
                  { label: "Delta", value: "+4,280", color: "#43A047" },
                  { label: "VWAP", value: "1,842.50", color: "#1A2E1A" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-2.5"
                    style={{ background: "rgba(255,255,255,0.8)" }}
                  >
                    <div className="text-[10px] text-gray-400">{m.label}</div>
                    <div className="font-bold text-xs mt-0.5" style={{ color: m.color }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge top */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-2xl shadow-lg text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #FFB300, #FFA000)", color: "#1A2E1A" }}
            >
              ลด 60% 🔥
            </motion.div>

            {/* Floating badge bottom */}
            <motion.div
              variants={floatingVariants2}
              animate="animate"
              className="absolute -bottom-4 -left-4 px-3 py-2 rounded-2xl shadow-lg bg-white border border-green-100 text-xs font-semibold"
              style={{ color: "#1B5E20" }}
            >
              🎓 16 บทเรียน • เรียนตลอดชีพ
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L1440 50L1440 15C1080 50 720 0 360 25C180 37 0 15 0 15L0 50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
