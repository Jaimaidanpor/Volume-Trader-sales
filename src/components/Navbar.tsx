"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    const el = document.querySelector("#offer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-lg shadow-purple-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#hero");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
            >
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-playfair font-bold text-base tracking-tight"
                style={{ color: "#6B3FA0" }}
              >
                Volume Trader
              </span>
              <span
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "#C9A96E" }}
              >
                Pro
              </span>
            </div>
          </motion.a>

          {/* Single CTA Button */}
          <motion.button
            onClick={handleCTA}
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-bold text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #C9A96E 0%, #E8C99A 50%, #C9A96E 100%)",
            }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            สมัครเรียน ฿5,900 →
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
