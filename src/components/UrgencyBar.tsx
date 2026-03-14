"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEATS_LEFT = 8;
const BAR_HEIGHT = 40; // fixed height px — Navbar and Hero use this

export default function UrgencyBar() {
  const [viewers, setViewers] = useState(12);

  useEffect(() => {
    // Set fixed CSS variable immediately — no layout shift
    document.documentElement.style.setProperty("--urgency-bar-height", `${BAR_HEIGHT}px`);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() < 0.5 ? 1 : -1;
        return Math.min(Math.max(prev + change, 8), 18);
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    const el = document.querySelector("#offer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      id="urgency-bar"
      initial={{ y: -BAR_HEIGHT, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-2 sm:gap-3 px-3"
      style={{
        height: `${BAR_HEIGHT}px`,
        background: "linear-gradient(90deg, #B71C1C 0%, #C62828 50%, #B71C1C 100%)",
        overflow: "hidden",
      }}
    >
      {/* Seats left */}
      <span className="text-white text-xs font-semibold whitespace-nowrap">
        🔥 เหลือ{" "}
        <span
          className="font-bold px-1.5 py-0.5 rounded mx-0.5 text-xs"
          style={{ background: "#FFB300", color: "#1A2E1A" }}
        >
          {SEATS_LEFT}
        </span>{" "}
        ที่สุดท้าย — ครบแล้วปรับเต็มราคา!
      </span>

      {/* Live viewers — hidden on very small screens */}
      <span className="hidden sm:flex items-center gap-1 text-xs text-red-100 whitespace-nowrap">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={viewers}
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ duration: 0.3 }}
            className="font-bold text-white"
          >
            {viewers}
          </motion.span>
        </AnimatePresence>
        <span>คนดูอยู่</span>
      </span>

      {/* CTA */}
      <button
        onClick={handleCTA}
        className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all hover:scale-105 flex-shrink-0"
        style={{ background: "#FFB300", color: "#1A2E1A" }}
      >
        สมัครเลย →
      </button>
    </motion.div>
  );
}
