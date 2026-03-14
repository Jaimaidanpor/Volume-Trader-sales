"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TrendingUp } from "lucide-react";

const navLinks = [
  { label: "หน้าหลัก", href: "#hero" },
  { label: "คอร์ส", href: "#courses" },
  { label: "เกี่ยวกับ", href: "#instructor" },
  { label: "ติดต่อ", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-purple-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center gradient-plum shadow-md">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-playfair font-bold text-lg tracking-tight"
                style={{ color: "#6B3FA0" }}
              >
                VolumeTrader
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A96E" }}>
                Pro
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative text-sm font-medium text-gray-700 hover:text-[#6B3FA0] transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A96E] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#courses");
              }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-purple-200"
              style={{ background: "linear-gradient(135deg, #6B3FA0 0%, #8B5CC0 100%)" }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              สมัครเรียน
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-md border-t border-purple-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-[#6B3FA0] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#courses");
                  }}
                  className="block text-center px-4 py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #6B3FA0 0%, #8B5CC0 100%)" }}
                >
                  สมัครเรียน
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
