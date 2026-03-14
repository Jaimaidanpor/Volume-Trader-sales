"use client";

import { openLine, LINE_URL } from "@/lib/openLine";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ top: "var(--urgency-bar-height, 40px)" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-lg shadow-green-100/50"
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
            <Image
              src="/logo.png"
              alt="Volume Trader"
              width={90}
              height={30}
              className="object-contain"
            />
          </motion.a>

          {/* Single CTA Button */}
          <motion.a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openLine(e)}
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #FFB300, #FFA000)",
              color: "#1A2E1A",
            }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            สมัครเรียน ฿ 5,900 →
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
