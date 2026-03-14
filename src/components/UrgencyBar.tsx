"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEATS_LEFT = 8;

export default function UrgencyBar() {
  const [viewers, setViewers] = useState(12);
  const barRef = useRef<HTMLDivElement>(null);

  // Dynamically update CSS var based on actual rendered height
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const update = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--urgency-bar-height", `${h}px`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
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
    window.open("https://lin.ee/1hpcpsl", "_blank");
  };

  return (
    <motion.div
      ref={barRef}
      id="urgency-bar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[60] flex flex-col items-center justify-center px-4 py-3 gap-2"
      style={{
        background: "linear-gradient(90deg, #B71C1C 0%, #C62828 50%, #B71C1C 100%)",
      }}
    >
      {/* Row 1: Seats left */}
      <span className="text-white text-xs sm:text-sm font-bold text-center leading-normal">
        🔥 เหลือเพียง{" "}
        <span
          className="font-extrabold px-2 py-0.5 rounded mx-0.5 text-xs sm:text-sm"
          style={{ background: "#FFB300", color: "#1A2E1A" }}
        >
          {SEATS_LEFT} ที่นั่ง
        </span>{" "}
        <span className="whitespace-nowrap">ในราคา ฿ 5,900</span>{" "}
        — ครบแล้วปรับเต็มราคา!
      </span>

      {/* Row 2: Live viewers + CTA */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-xs text-red-100">
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
              className="font-bold text-white text-xs"
            >
              {viewers}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs">คนกำลังดูอยู่ตอนนี้</span>
        </span>

        <button
          onClick={handleCTA}
          className="px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all hover:scale-105"
          style={{ background: "#FFB300", color: "#1A2E1A" }}
        >
          สมัครเลย →
        </button>
      </div>
    </motion.div>
  );
}
