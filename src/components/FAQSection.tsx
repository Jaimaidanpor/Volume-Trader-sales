"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "ต้องมีพื้นฐานการเทรดก่อนไหม?",
    answer:
      "ไม่จำเป็นค่ะ คอร์ส Starter ออกแบบมาสำหรับมือใหม่โดยเฉพาะ เราเริ่มตั้งแต่พื้นฐานการอ่านกราฟ จนถึงการวิเคราะห์ Volume แบบ Step-by-step ทุกคนเริ่มได้เลยค่ะ",
  },
  {
    question: "เรียนผ่านช่องทางไหน?",
    answer:
      "เรียนออนไลน์ผ่านเว็บไซต์ของเรา ดูได้ทุกที่ทุกเวลา รองรับทั้งมือถือและคอมพิวเตอร์ วิดีโอ HD คุณภาพสูง ดูซ้ำได้ไม่จำกัด และดาวน์โหลดสื่อการเรียนได้ค่ะ",
  },
  {
    question: "มีการสอนสดไหม?",
    answer:
      "มีค่ะ! ทุกเดือนมี Live สอนสดและ Q&A session สำหรับสมาชิกทุกระดับ นอกจากนี้ยังมีการวิเคราะห์ตลาด Live ใน Community อีกด้วยค่ะ",
  },
  {
    question: "ชำระเงินช่องทางไหนได้บ้าง?",
    answer:
      "ชำระได้หลายช่องทางค่ะ ได้แก่ QR Code PromptPay, บัตรเครดิต/เดบิต (Visa, Mastercard), โอนเงินธนาคารทุกธนาคาร และ TrueMoney Wallet ค่ะ",
  },
  {
    question: "ถ้าเรียนแล้วไม่เข้าใจทำอย่างไร?",
    answer:
      "มีทีม support คอยตอบคำถามใน Community ทุกวัน สามารถรีวิวบทเรียนได้ไม่จำกัด และยังมี Q&A รายเดือน สามารถถามได้โดยตรงกับอาจารย์ค่ะ",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: isOpen
          ? "1.5px solid rgba(107,63,160,0.35)"
          : "1.5px solid rgba(200,180,232,0.25)",
        background: isOpen
          ? "linear-gradient(135deg, rgba(237,224,248,0.4), rgba(255,248,240,0.6))"
          : "rgba(255,255,255,0.75)",
        boxShadow: isOpen
          ? "0 4px 24px rgba(107,63,160,0.08)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Number badge */}
          <span
            className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all duration-300"
            style={{
              background: isOpen
                ? "linear-gradient(135deg, #6B3FA0, #8B5CC0)"
                : "rgba(200,180,232,0.25)",
              color: isOpen ? "white" : "#6B3FA0",
            }}
          >
            {index + 1}
          </span>
          <span
            className="font-semibold text-sm sm:text-base transition-colors duration-200"
            style={{ color: isOpen ? "#6B3FA0" : "#2D2D2D" }}
          >
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4"
          style={{ color: isOpen ? "#6B3FA0" : "#999" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-[4.5rem]">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(200,180,232,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
              color: "#6B3FA0",
            }}
          >
            FAQ
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#2D2D2D" }}
          >
            คำถามที่พบบ่อย
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            มีข้อสงสัยเพิ่มเติม? สามารถติดต่อทีมงานได้ตลอด 24 ชั่วโมง
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center rounded-3xl p-8"
          style={{
            background: "linear-gradient(135deg, #EDE0F8, #F4D9E4)",
            border: "1px solid rgba(200,180,232,0.4)",
          }}
        >
          <p
            className="font-playfair font-semibold text-xl mb-2"
            style={{ color: "#2D2D2D" }}
          >
            ยังมีคำถามเพิ่มเติม?
          </p>
          <p className="text-gray-500 text-sm mb-5">
            ทีมงานของเราพร้อมตอบทุกคำถาม ติดต่อเราได้เลยค่ะ
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                const el = document.querySelector("#courses");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-purple-200 transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6B3FA0, #8B5CC0)" }}
            >
              สมัครเรียนเลย
            </button>
            <button
              className="px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:bg-white/60"
              style={{ borderColor: "#6B3FA0", color: "#6B3FA0" }}
            >
              ติดต่อ Line @volumetraderpro
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
