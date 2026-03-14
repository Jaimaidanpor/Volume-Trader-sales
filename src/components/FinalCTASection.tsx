"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleCTA = () => {
    // Scroll to offer or open registration
    const el = document.querySelector("#offer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="final-cta"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #FFF8F0 0%, #EDE0F8 60%, #F4D9E4 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C8B4E8, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl" style={{ color: "#C9A96E" }}>
                ★
              </span>
            ))}
          </div>

          {/* Emotional copy */}
          <p
            className="text-lg sm:text-xl text-gray-500 mb-3"
          >
            ถ้าคุณอ่านมาถึงตรงนี้แล้ว...
          </p>

          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
            style={{ color: "#2D2D2D" }}
          >
            แสดงว่าคุณพร้อมที่จะ
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #6B3FA0, #C9A96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              เปลี่ยนแปลงการเทรด
            </span>
            ของคุณจริงๆ ค่ะ
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            อย่าปล่อยให้ความลังเลทำให้คุณพลาดโอกาสนี้ไปนะคะ
            <br />
            <strong style={{ color: "#6B3FA0" }}>นักเทรดที่ประสบความสำเร็จ</strong>{" "}
            ต่างจากคนอื่นตรงที่{" "}
            <strong style={{ color: "#C9A96E" }}>ลงมือทำ</strong> ค่ะ
          </p>

          {/* Highlight box */}
          <div
            className="inline-block px-6 py-4 rounded-2xl mb-8"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(200,180,232,0.4)",
              boxShadow: "0 4px 20px rgba(107,63,160,0.1)",
            }}
          >
            <p className="text-sm text-gray-600 mb-1">
              💡 เริ่มเรียนได้ตอนนี้เลย — ไม่ต้องรอ
            </p>
            <p className="text-base font-semibold" style={{ color: "#2D2D2D" }}>
              เข้าถึงได้ทันทีหลังชำระ
            </p>
          </div>

          {/* BIG CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <motion.button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg sm:text-xl text-gray-900 shadow-2xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #FFD97D 50%, #C9A96E 100%)",
              }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 25px 50px rgba(201,169,110,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              เริ่มเรียน Volume Profile วันนี้เลย →
            </motion.button>

            {/* Price reminder */}
            <p className="text-sm text-gray-600">
              <strong style={{ color: "#6B3FA0" }}>฿5,900</strong>{" "}
              <span className="text-gray-400">•</span> ชำระครั้งเดียว{" "}
              <span className="text-gray-400">•</span> เรียนตลอดชีพ
            </p>

            {/* LINE Button */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-base text-white shadow-lg transition-all duration-200"
              style={{ background: "#06C755" }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              สมัครผ่าน LINE
            </motion.a>
          </div>

          {/* Final reassurance */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            <span>✅ ไม่มีความเสี่ยง</span>
            <span>✅ เรียนได้ทุกที่ทุกเวลา</span>
            <span>✅ ดูซ้ำได้ไม่จำกัด</span>
            <span>✅ มี Community คอยช่วย</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
