"use client";

import { openLine, LINE_URL } from "@/lib/openLine";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "#1E1E2E" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Volume Trader"
                width={100}
                height={33}
                className="object-contain rounded-lg"
              />
              <div>
                <div
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: "#A5D6A7" }}
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
              style={{ color: "#43A047" }}
            >
              ติดต่อเรา
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 mb-3">
              <motion.a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openLine(e)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "#06C755" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4" />
                LINE
              </motion.a>
              <motion.a
                href="https://www.facebook.com/VolumeTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
                style={{ background: "#1877F2" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@volumetraderwhale"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
                style={{ background: "#FF0000" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
            </div>
            <p className="text-gray-500 text-xs">ทักหาเราได้ 24 ชม.</p>
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
