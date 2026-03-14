"use client";

import { openLine, LINE_URL } from "@/lib/openLine";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "ฉันไม่มีพื้นฐานเลย เรียนได้ไหม?",
    answer:
      "ได้เลยค่ะ! Phase 1 ออกแบบมาสำหรับคนที่เริ่มต้นจากศูนย์ เริ่มจากพื้นฐานที่สุดก่อนค่ะ ไม่ต้องกังวลเลยนะคะ",
  },
  {
    question: "โปรแกรม Sierra Chart มีค่าใช้จ่ายไหม?",
    answer:
      "สำหรับนักเรียนในคอร์สเรา มีสอนเทคนิคให้สามารถใช้งานได้ฟรีเลยค่ะ หากติดปัญหาการติดตั้ง มีทีมแอดมินคอยดูแลรีโมทช่วยได้เลยค่ะ",
  },
  {
    question: "ฉันทำงานประจำ จะมีเวลาเรียนไหม?",
    answer:
      "วิดีโอดูได้ตอนไหนก็ได้ ไม่มีหมดเวลา เรียนช้าเร็วได้ตามสะดวกเลยค่ะ เรียนตอนเย็น วันหยุด หรือตอนดึกก็ได้ค่ะ",
  },
  {
    question: "ราคา ฿ 5,900 แพงเกินไปสำหรับฉัน",
    answer:
      "ลองคิดดูนะคะ ถ้าการเรียนรู้ครั้งนี้ช่วยให้หยุดขาดทุนได้แค่เดือนเดียว คุ้มกว่ามากค่ะ และเทียบกับ indicator ราคาแพงหรือ signal ที่ไม่ work ที่เคยซื้อไปแล้ว ฿ 5,900 นี้ถือว่าคุ้มมากๆ ค่ะ",
  },
  {
    question: "มั่นใจได้แค่ไหนว่าจะใช้ได้จริง?",
    answer:
      "เนื้อหาทุกบทมาจากการเทรดในตลาดจริง ไม่ใช่ทฤษฎีในห้องแล็บ และมี Workshop live จากตลาดจริงด้วยค่ะ ทั้ง Gold, Forex และ Futures",
  },
  {
    question: "ถ้าเรียนแล้วไม่เข้าใจทำอย่างไร?",
    answer:
      "ถามได้ในกลุ่ม LINE Community ที่มีทั้งผู้สอนและเพื่อนนักเรียนคอยช่วยตอบค่ะ และดูวิดีโอซ้ำได้ไม่จำกัดค่ะ ไม่มีหมดอายุ",
  },
  {
    question: "ชำระเงินแล้วได้รับเนื้อหาเมื่อไหร่?",
    answer:
      "ได้รับ link เข้าเรียนทันทีหลังยืนยันการชำระค่ะ ไม่ต้องรอค่ะ เข้าเรียนได้เลยภายในไม่กี่นาที",
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
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: isOpen
          ? "1.5px solid rgba(27,94,32,0.4)"
          : "1.5px solid rgba(76,175,80,0.2)",
        background: isOpen
          ? "linear-gradient(135deg, rgba(232,245,233,0.55), rgba(241,248,233,0.65))"
          : "rgba(255,255,255,0.8)",
        boxShadow: isOpen
          ? "0 4px 24px rgba(27,94,32,0.1)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span
            className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all duration-300"
            style={{
              background: isOpen
                ? "linear-gradient(135deg, #FFB300, #FFA000)"
                : "rgba(76,175,80,0.15)",
              color: isOpen ? "#1A2E1A" : "#1B5E20",
            }}
          >
            {index + 1}
          </span>
          <span
            className="font-semibold text-sm sm:text-base transition-colors duration-200 text-left"
            style={{ color: isOpen ? "#1B5E20" : "#1A2E1A" }}
          >
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-3"
          style={{ color: isOpen ? "#1B5E20" : "#999" }}
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
            <div className="px-5 sm:px-6 pb-5 pl-16 sm:pl-[4.5rem]">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{answer}</p>
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
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(76,175,80,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
              color: "#1B5E20",
            }}
          >
            FAQ
          </span>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#1A2E1A" }}
          >
            ข้อสงสัยที่พบบ่อย
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            ก่อนตัดสินใจสมัคร — ตอบทุกข้อสงสัยเลยค่ะ
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-10">
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
          className="text-center rounded-3xl p-8"
          style={{
            background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
            border: "1px solid rgba(76,175,80,0.3)",
          }}
        >
          <p
            className="font-playfair font-semibold text-xl mb-2"
            style={{ color: "#1A2E1A" }}
          >
            ยังมีคำถามเพิ่มเติม?
          </p>
          <p className="text-gray-500 text-sm mb-5">
            ทีมงานของเราพร้อมตอบทุกคำถาม ติดต่อผ่าน LINE ได้เลยค่ะ
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openLine(e)}
              className="px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #FFB300, #FFA000)", color: "#1A2E1A" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              สมัครเรียนเลย ฿ 5,900
            </motion.a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openLine(e)}
              className="px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:bg-white/60"
              style={{ borderColor: "#1B5E20", color: "#1B5E20" }}
            >
              ติดต่อผ่าน LINE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
