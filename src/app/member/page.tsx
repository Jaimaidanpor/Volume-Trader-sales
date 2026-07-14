"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LINE_URL } from "@/lib/openLine";

type FormState = {
  facebookName: string;
  phone: string;
  gmail: string;
  discord: string;
};

const EMPTY: FormState = {
  facebookName: "",
  phone: "",
  gmail: "",
  discord: "",
};

const fields: {
  name: keyof FormState;
  label: string;
  placeholder: string;
  type?: string;
  hint?: string;
  emoji: string;
}[] = [
  {
    name: "facebookName",
    label: "ชื่อ Facebook ที่ทักหาเรา",
    placeholder: "เช่น Somchai Jaidee",
    emoji: "📘",
    hint: "ใส่ชื่อ Facebook เดียวกับที่ใช้ทักแชทมาสมัคร เพื่อให้เราจับคู่ข้อมูลได้ถูกคน",
  },
  {
    name: "phone",
    label: "เบอร์โทรศัพท์",
    placeholder: "08X-XXX-XXXX",
    type: "tel",
    emoji: "📱",
    hint: "ใช้สำหรับติดต่อกลับและยืนยันตัวตน",
  },
  {
    name: "gmail",
    label: "Gmail สำหรับเข้าเรียน",
    placeholder: "yourname@gmail.com",
    type: "email",
    emoji: "📧",
    hint: "ต้องเป็น Gmail เพราะใช้ให้สิทธิ์เข้าดูวิดีโอบทเรียน",
  },
  {
    name: "discord",
    label: "ชื่อ Discord (เข้าเรียน + ห้องวางแผน)",
    placeholder: "เช่น somchai_trade",
    emoji: "💬",
    hint: "ชื่อผู้ใช้ Discord ของคุณ เพื่อเชิญเข้ากลุ่มเรียนและห้องวางแผนเทรด",
  },
];

const MAX_UPLOAD_MB = 10; // จำกัดขนาดไฟล์ก่อนย่อ
const MAX_DIMENSION = 1400; // ย่อด้านยาวสุดไม่เกิน 1400px

// ข้อมูลบัญชีรับโอน
const BANK = {
  name: "ธนาคารกสิกรไทย",
  accountNo: "028-1-78003-4",
  accountName: "ชัชชัย ศรีคำลือ",
};

// ย่อรูปในเครื่องก่อนอัปโหลด → คืนค่าเป็น data URL (JPEG)
// ช่วยกันไฟล์ใหญ่เกิน limit ของ Vercel/Apps Script และอัปโหลดเร็วขึ้น
function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new window.Image();
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("canvas unsupported"));
        return;
      }
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("decode failed"));
    };
    img.src = objectUrl;
  });
}

export default function MemberPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // สลิปการโอนเงิน
  const [slip, setSlip] = useState<string>(""); // data URL หลังย่อรูป
  const [slipName, setSlipName] = useState<string>("");
  const [slipError, setSlipError] = useState<string>("");
  const [slipBusy, setSlipBusy] = useState(false);

  async function handleSlipSelect(file: File | undefined) {
    setSlipError("");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setSlipError("กรุณาเลือกไฟล์รูปภาพ (JPG หรือ PNG)");
      return;
    }
    if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
      setSlipError(`ไฟล์ใหญ่เกินไป (เกิน ${MAX_UPLOAD_MB}MB) กรุณาเลือกรูปที่เล็กลง`);
      return;
    }
    setSlipBusy(true);
    try {
      const dataUrl = await compressImage(file);
      setSlip(dataUrl);
      setSlipName(file.name);
    } catch {
      setSlipError("เปิดไฟล์นี้ไม่ได้ กรุณาบันทึกเป็นรูปภาพ (JPG/PNG) แล้วลองใหม่");
    } finally {
      setSlipBusy(false);
    }
  }

  function removeSlip() {
    setSlip("");
    setSlipName("");
    setSlipError("");
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.facebookName.trim()) next.facebookName = "กรุณากรอกชื่อ Facebook";

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) next.phone = "กรุณากรอกเบอร์โทรศัพท์";
    else if (phoneDigits.length < 9 || phoneDigits.length > 10)
      next.phone = "เบอร์โทรไม่ถูกต้อง";

    if (!form.gmail.trim()) next.gmail = "กรุณากรอก Gmail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.gmail.trim()))
      next.gmail = "รูปแบบอีเมลไม่ถูกต้อง";

    if (!form.discord.trim()) next.discord = "กรุณากรอกชื่อ Discord";

    setErrors(next);

    let slipOk = true;
    if (!slip) {
      setSlipError("กรุณาแนบรูปสลิปการโอนเงิน");
      slipOk = false;
    }

    return Object.keys(next).length === 0 && slipOk;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          facebookName: form.facebookName.trim(),
          phone: form.phone.trim(),
          gmail: form.gmail.trim(),
          discord: form.discord.trim(),
          slip, // data URL (image/jpeg) หลังย่อรูป
          slipName,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function update(name: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <main
      className="min-h-screen py-10 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #1B5E20 0%, #2E7D32 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #A5D6A7, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C8E6C9, transparent)" }}
      />

      <div className="relative max-w-lg mx-auto">
        {/* Logo / back home */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Volume Trader"
              width={120}
              height={40}
              className="object-contain mx-auto brightness-0 invert opacity-90"
            />
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
                style={{ background: "#E8F5E9" }}
              >
                ✅
              </motion.div>
              <h1 className="font-playfair font-bold text-2xl sm:text-3xl text-brand-primary mb-3">
                ลงทะเบียนสำเร็จ!
              </h1>
              <p className="text-gray-600 mb-2 leading-relaxed">
                ขอบคุณค่ะ เราได้รับข้อมูลของคุณเรียบร้อยแล้ว 🎉
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                ทีมงานจะตรวจสอบและส่งสิทธิ์เข้าเรียนไปที่ <b>Gmail</b> ของคุณ
                พร้อมเชิญเข้ากลุ่ม <b>Discord</b> (ห้องเรียน + ห้องวางแผน) ภายใน 24 ชั่วโมง
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full font-bold text-base shadow-lg transition-transform hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #FFB300, #FFA000)", color: "#1A2E1A" }}
              >
                💬 ติดต่อทีมงานทาง LINE
              </a>
              <Link
                href="/"
                className="block mt-4 text-sm text-gray-400 hover:text-brand-medium transition-colors"
              >
                ← กลับหน้าหลัก
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-3xl p-6 sm:p-9 shadow-2xl"
            >
              {/* Header */}
              <div className="text-center mb-7">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
                  style={{ background: "#E8F5E9", color: "#1B5E20" }}
                >
                  สำหรับผู้ที่ชำระเงินแล้ว
                </span>
                <h1 className="font-playfair font-bold text-2xl sm:text-3xl text-brand-primary mb-2 leading-tight">
                  ลงทะเบียนเข้าเรียน
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed">
                  กรอกข้อมูลด้านล่างเพื่อรับสิทธิ์เข้าเรียน วิดีโอบทเรียน
                  และเข้ากลุ่ม Discord (ห้องเรียน + ห้องวางแผน)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {fields.map((f) => (
                  <FieldInput
                    key={f.name}
                    field={f}
                    value={form[f.name]}
                    error={errors[f.name]}
                    onChange={(v) => update(f.name, v)}
                  />
                ))}

                <BankInfo />

                <SlipUpload
                  slip={slip}
                  slipName={slipName}
                  busy={slipBusy}
                  error={slipError}
                  onSelect={handleSlipSelect}
                  onRemove={removeSlip}
                />

                {status === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
                    เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง
                    หรือติดต่อทีมงานทาง LINE ค่ะ
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base shadow-xl mt-2 disabled:opacity-60 disabled:cursor-not-allowed transition-shadow"
                  style={{ background: "linear-gradient(135deg, #FFB300, #FFA000)", color: "#1A2E1A" }}
                >
                  {status === "loading" ? "กำลังส่งข้อมูล..." : "ยืนยันลงทะเบียน →"}
                </motion.button>

                <p className="text-center text-xs text-gray-400 leading-relaxed pt-1">
                  🔒 ข้อมูลของคุณจะถูกเก็บเป็นความลับ ใช้เพื่อการเข้าเรียนเท่านั้น
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function FieldInput({
  field,
  value,
  error,
  onChange,
}: {
  field: (typeof fields)[number];
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        <span className="mr-1">{field.emoji}</span>
        {field.label}
      </label>
      <input
        type={field.type ?? "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/60 text-gray-800 text-sm outline-none transition-all focus:bg-white focus:ring-2 ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-gray-200 focus:border-brand-light focus:ring-green-100"
        }`}
      />
      {field.hint && !error && (
        <p className="text-xs text-gray-400 mt-1">{field.hint}</p>
      )}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function BankInfo() {
  const [copied, setCopied] = useState(false);

  async function copyAccount() {
    const digits = BANK.accountNo.replace(/\D/g, "");
    try {
      await navigator.clipboard.writeText(digits);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // เบราว์เซอร์บล็อกคลิปบอร์ด — ผู้ใช้ก็อปเองได้จากตัวเลขที่แสดง
    }
  }

  return (
    <div
      className="rounded-2xl p-4 sm:p-5"
      style={{ background: "#E8F5E9", border: "1px solid #A5D6A7" }}
    >
      <p className="text-xs font-bold tracking-wide text-brand-primary mb-3">
        💳 ยังไม่ได้โอน? โอนมาที่บัญชีนี้ก่อนนะคะ
      </p>

      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-gray-500">{BANK.name}</p>
          <p className="font-bold text-lg text-brand-primary tabular-nums tracking-wide">
            {BANK.accountNo}
          </p>
          <p className="text-sm text-gray-600">ชื่อบัญชี: {BANK.accountName}</p>
        </div>

        <button
          type="button"
          onClick={copyAccount}
          className="shrink-0 px-3.5 py-2 rounded-full text-xs font-bold shadow-sm transition-transform active:scale-95"
          style={{ background: "#1B5E20", color: "#fff" }}
        >
          {copied ? "✓ คัดลอกแล้ว" : "คัดลอกเลขบัญชี"}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-3 leading-relaxed">
        โอนแล้วแคปหน้าจอสลิป แล้วแนบด้านล่าง พร้อมกรอกข้อมูลเพื่อรับสิทธิ์เข้าเรียนค่ะ
      </p>
    </div>
  );
}

function SlipUpload({
  slip,
  slipName,
  busy,
  error,
  onSelect,
  onRemove,
}: {
  slip: string;
  slipName: string;
  busy: boolean;
  error: string;
  onSelect: (file: File | undefined) => void;
  onRemove: () => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        <span className="mr-1">🧾</span>
        แนบสลิปการโอนเงิน
      </label>

      {slip ? (
        <div
          className={`rounded-xl border p-3 flex items-center gap-3 ${
            error ? "border-red-400" : "border-green-200 bg-green-50/40"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slip}
            alt="สลิปการโอนเงิน"
            className="w-16 h-16 rounded-lg object-cover border border-gray-200 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-700 truncate">
              {slipName || "สลิปการโอนเงิน"}
            </p>
            <p className="text-xs text-green-600">✅ แนบรูปเรียบร้อย</p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="text-xs font-semibold text-red-500 hover:text-red-700 px-2 py-1 shrink-0"
          >
            เปลี่ยนรูป
          </button>
        </div>
      ) : (
        <label
          className={`flex flex-col items-center justify-center gap-1.5 w-full py-6 px-4 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${
            error
              ? "border-red-400 bg-red-50/40"
              : "border-gray-300 hover:border-brand-light hover:bg-green-50/40"
          }`}
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onSelect(e.target.files?.[0])}
          />
          {busy ? (
            <span className="text-sm text-gray-500">กำลังประมวลผลรูป...</span>
          ) : (
            <>
              <span className="text-2xl">📤</span>
              <span className="text-sm font-medium text-gray-600">
                แตะเพื่อเลือกรูปสลิป
              </span>
              <span className="text-xs text-gray-400">
                รองรับ JPG / PNG (ระบบจะย่อรูปให้อัตโนมัติ)
              </span>
            </>
          )}
        </label>
      )}

      {error ? (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      ) : (
        <p className="text-xs text-gray-400 mt-1">
          แนบรูปหลักฐานการโอนเงินเพื่อยืนยันการสมัคร
        </p>
      )}
    </div>
  );
}
