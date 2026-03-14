"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_SEATS = 20;
const SEATS_LEFT = 8;

export default function UrgencyBar() {
  const [viewers, setViewers] = useState(12);

  // Simulate real-time viewers fluctuating naturally
  useEffect(() => {
    const timer = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() < 0.5 ? 1 : -1;
        const next = prev + change;
        return Math.min(Math.max(next, 8), 18);
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    const el = document.querySelector("#offer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Set CSS variable for navbar to read
  useEffect(() => {
    const el = document.getElementById("urgency-bar");
    if (!el) return;
    const update = () => {
      document.documentElement.style.setProperty("--urgency-bar-height", `${el.offsetHeight}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.div
      id="urgency-bar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-2 sm:gap-4 px-3 py-2 flex-wrap"
      style={{ background: "linear-gradient(90deg, #B71C1C 0%, #C62828 50%, #B71C1C 100%)" }}
    >
      {/* Seats left */}
      <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
        🔥 เหลือเพียง{" "}
        <span
          className="font-bold text-sm sm:text-base px-1.5 py-0.5 rounded-md mx-0.5"
          style={{ background: "#FFB300", color: "#1A2E1A" }}
        >
          {SEATS_LEFT}
        </span>{" "}
        ที่สุดท้าย — ครบแล้วปรับเต็มราคา!
      </span>

      {/* Divider */}
      <span className="text-red-300 hidden sm:inline">|</span>

      {/* Live viewers */}
      <span className="flex items-center gap-1.5 text-xs text-red-100 whitespace-nowrap">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={viewers}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="font-bold text-white"
          >
            {viewers}
          </motion.span>
        </AnimatePresence>
        <span>คนกำลังดูอยู่ตอนนี้</span>
      </span>

      {/* CTA */}
      <button
        onClick={handleCTA}
        className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all hover:scale-105"
        style={{ background: "#FFB300", color: "#1A2E1A" }}
      >
        สมัครเลย →
      </button>
    </motion.div>
  );
}
