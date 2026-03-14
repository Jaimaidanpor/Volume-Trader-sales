"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getTimeLeft() {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59); // สิ้นเดือนนี้
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function UrgencyBar() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const handleCTA = () => {
    const el = document.querySelector("#offer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-3 px-4 py-2 flex-wrap"
      style={{ background: "linear-gradient(90deg, #B71C1C 0%, #C62828 50%, #B71C1C 100%)" }}
    >
      {/* Label */}
      <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
        🔥 ราคาพิเศษ ฿ 5,900 หมดเขต
      </span>

      {/* Countdown */}
      <div className="flex items-center gap-1.5">
        {[
          { val: time.days, label: "วัน" },
          { val: time.hours, label: "ชม." },
          { val: time.minutes, label: "นาที" },
          { val: time.seconds, label: "วิ" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1">
            <div
              className="flex flex-col items-center justify-center rounded-md px-2 py-0.5 min-w-[36px]"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              <span className="text-white font-bold text-sm sm:text-base leading-none tabular-nums">
                {pad(item.val)}
              </span>
              <span className="text-red-200 text-[9px] leading-none mt-0.5">{item.label}</span>
            </div>
            {i < 3 && (
              <span className="text-white font-bold text-sm">:</span>
            )}
          </div>
        ))}
      </div>

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
