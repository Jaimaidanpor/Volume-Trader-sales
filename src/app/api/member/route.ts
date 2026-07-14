import { NextResponse } from "next/server";

// รับข้อมูลจากฟอร์มหน้า /member แล้วส่งต่อไปเก็บใน Google Sheets
// ตั้งค่า GOOGLE_SCRIPT_URL ใน Environment Variables ของ Vercel
// (ดูวิธีทำใน MEMBER_SETUP.md)

type MemberPayload = {
  facebookName?: string;
  phone?: string;
  gmail?: string;
  discord?: string;
};

export async function POST(request: Request) {
  let data: MemberPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const facebookName = (data.facebookName ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const gmail = (data.gmail ?? "").trim();
  const discord = (data.discord ?? "").trim();

  // Validate ฝั่ง server กันข้อมูลว่าง/ปลอม
  if (!facebookName || !phone || !gmail || !discord) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL is not set");
    return NextResponse.json(
      { error: "server not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        facebookName,
        phone,
        gmail,
        discord,
        // เวลาที่ส่ง (บันทึกฝั่ง Apps Script ด้วย new Date() ก็ได้)
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script อาจ redirect — ให้ fetch ตามไป
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("Google Script responded", res.status);
      return NextResponse.json({ error: "sheet error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward to Google Script", err);
    return NextResponse.json({ error: "network error" }, { status: 502 });
  }
}
