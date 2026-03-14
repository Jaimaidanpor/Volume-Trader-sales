"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, ExternalLink, MessageCircle, Facebook } from "lucide-react";

const footerLinks = [
  { label: "เกี่ยวกับเรา", href: "#instructor" },
  { label: "นโยบายความเป็นส่วนตัว", href: "#" },
  { label: "ติดต่อเรา", href: "#" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" style={{ backgroundColor: "#2D2D2D" }}>
      {/* Final CTA Banner */}
      <div
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3D2060 0%, #6B3FA0 50%, #8B5CC0 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #F4A7B9, transparent)" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl" style={{ color: "#C9A96E" }}>
                ★
              </span>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight"
          >
            พร้อมเรียนรู้ Volume Profile
            <span className="block" style={{ color: "#C9A96E" }}>
              &amp; Order Flow แล้วหรือยัง?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-purple-200 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
          >
            เข้าใจพฤติกรรม Smart Money อ่าน Footprint Chart และ Volume Profile
            เพื่อเทรด Forex, Gold และ Futures ได้อย่างมืออาชีพ
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => {
                const el = document.querySelector("#courses");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #C9A96E, #E8C99A)", color: "#2D2D2D" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              สมัครเรียน ฿5,900
              <ExternalLink className="w-4 h-4" />
            </motion.button>
            <button
              onClick={() => {
                const el = document.querySelector("#courses");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 text-white transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              ดูรายละเอียดคอร์ส
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12 lg:py-16" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
                >
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div
                    className="font-playfair font-bold text-lg leading-none"
                    style={{ color: "#C9A96E" }}
                  >
                    Volume Trader
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8B4E8" }}>
                    Pro
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                สอน Volume Profile &amp; Order Flow Trading สำหรับตลาด Forex, Gold และ Futures
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  title="สมัครผ่าน LINE"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    background: "#06C755",
                    color: "white",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  สมัครผ่าน LINE
                </a>
                <a
                  href="#"
                  title="Facebook"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "#1877F2",
                    color: "white",
                  }}
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links column */}
            <div>
              <h4
                className="font-semibold text-sm tracking-wide uppercase mb-5"
                style={{ color: "#C9A96E" }}
              >
                ลิงก์ด่วน
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(link.href);
                      }}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-1 h-1 rounded-full transition-all duration-200 group-hover:w-3"
                        style={{ backgroundColor: "#C9A96E" }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4
                className="font-semibold text-sm tracking-wide uppercase mb-5"
                style={{ color: "#C9A96E" }}
              >
                ติดต่อเรา
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#06C755" }} />
                  <span>LINE: สมัครผ่าน LINE</span>
                </li>
                <li className="flex items-start gap-2">
                  <Facebook className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1877F2" }} />
                  <span>Facebook: Volume Trader Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>⏰</span>
                  <span>ตอบรับทุกวัน 9:00 – 21:00 น.</span>
                </li>
              </ul>

              {/* Mini course CTA */}
              <div
                className="mt-6 p-4 rounded-2xl"
                style={{
                  background: "rgba(107,63,160,0.15)",
                  border: "1px solid rgba(107,63,160,0.3)",
                }}
              >
                <p className="text-xs text-gray-400 mb-2">ราคาพิเศษ ฿5,900 เท่านั้น</p>
                <button
                  onClick={() => {
                    const el = document.querySelector("#courses");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-semibold hover:opacity-90 transition-opacity"
                  style={{ color: "#C9A96E" }}
                >
                  สมัครเรียนเลย →
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © 2025 Volume Trader Pro. สงวนลิขสิทธิ์
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1">
              สร้างด้วย
              <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
              เพื่อนักเทรดไทย
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
