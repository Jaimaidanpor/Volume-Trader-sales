"use client";

import { motion } from "framer-motion";
import { TrendingUp, MessageCircle, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "#1E1E2E" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
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
                <div
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: "#C8B4E8" }}
                >
                  Pro
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              สอน Volume Profile & Order Flow Trading
              <br />
              สำหรับตลาด Forex, Gold และ Futures
            </p>
          </div>

          {/* Social + Contact */}
          <div className="text-center md:text-right">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#C9A96E" }}
            >
              ติดต่อเรา
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 mb-3">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "#06C755" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4" />
                LINE
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
                style={{ background: "#1877F2" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
            <p className="text-gray-500 text-xs">ตอบรับทุกวัน 9:00 – 21:00 น.</p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2025 Volume Trader Pro. สงวนลิขสิทธิ์
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            สร้างด้วย
            <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
            เพื่อนักเทรดไทย
          </p>
        </div>
      </div>
    </footer>
  );
}
