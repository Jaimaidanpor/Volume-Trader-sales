# 📋 คู่มือตั้งค่าหน้า /member → Google Sheets

หน้า `/member` (สำหรับคนที่โอนเงินแล้ว) จะเก็บข้อมูลลง Google Sheets ของคุณ Big
ทำตาม 4 ขั้นตอนนี้ครั้งเดียว เสร็จแล้วใช้ได้ตลอดค่ะ

---

## ขั้นที่ 1 — สร้าง Google Sheet

1. เปิด https://sheets.google.com สร้าง Sheet ใหม่ ตั้งชื่อว่า **"สมาชิก Volume Trader"**
2. แถวแรก (หัวตาราง) พิมพ์หัวข้อไว้ 6 ช่อง:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| เวลา | ชื่อจริง | นามสกุล | เบอร์โทร | Gmail | Discord |

> ไม่ต้องพิมพ์ก็ได้ สคริปต์จะสร้างหัวตารางให้อัตโนมัติถ้ายังว่าง

---

## ขั้นที่ 2 — วางโค้ด Apps Script

1. ใน Sheet นั้น กดเมนู **Extensions → Apps Script**
2. ลบโค้ดเดิมทั้งหมด แล้ววางโค้ดนี้แทน:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // สร้างหัวตารางอัตโนมัติถ้ายังว่าง
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["เวลา", "ชื่อจริง", "นามสกุล", "เบอร์โทร", "Gmail", "Discord"]);
    }

    sheet.appendRow([
      new Date(),
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.gmail || "",
      data.discord || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. กด **Save** (ไอคอนแผ่นดิสก์ 💾)

---

## ขั้นที่ 3 — Deploy เป็น Web App

1. กดปุ่ม **Deploy → New deployment** (มุมขวาบน)
2. กดไอคอนเฟือง ⚙️ ข้าง "Select type" → เลือก **Web app**
3. ตั้งค่า:
   - **Description:** member form
   - **Execute as:** `Me` (อีเมลคุณ Big)
   - **Who has access:** **`Anyone`** ⬅️ สำคัญมาก! ต้องเลือกอันนี้
4. กด **Deploy**
5. ครั้งแรกจะขึ้นให้ **Authorize access** → เลือกบัญชี Google → กด "Advanced" → "Go to (project) unsafe" → Allow
6. จะได้ **Web app URL** หน้าตาแบบนี้ ➡️ ก็อปเก็บไว้:
   ```
   https://script.google.com/macros/s/AKfycb.....xxxxx/exec
   ```

---

## ขั้นที่ 4 — ใส่ URL ลง Vercel

1. เปิด https://vercel.com → เลือกโปรเจกต์ **Volume-Trader-sales**
2. ไปที่ **Settings → Environment Variables**
3. เพิ่มตัวแปรใหม่:
   - **Key:** `GOOGLE_SCRIPT_URL`
   - **Value:** วาง Web app URL จากขั้นที่ 3
   - **Environments:** ติ๊กทั้ง Production, Preview, Development
4. กด **Save**
5. ไปที่แท็บ **Deployments** → กด **Redeploy** ที่ตัวล่าสุด (เพื่อให้ค่าใหม่มีผล)

> 💻 ถ้าทดสอบในเครื่อง (localhost) ให้สร้างไฟล์ `.env.local` ในโฟลเดอร์ `app/`
> แล้วใส่บรรทัด: `GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/....../exec`

---

## ✅ ทดสอบ

1. เข้า `www.volumetalkspro.com/member`
2. กรอกข้อมูลทดสอบ แล้วกดยืนยัน
3. เปิด Google Sheet — ต้องเห็นแถวใหม่โผล่มาทันที 🎉

---

## 🔧 แก้ไขทีหลัง (ถ้าปรับโค้ด Apps Script)

ทุกครั้งที่แก้โค้ด Apps Script ต้อง **Deploy → Manage deployments → แก้ไข (ดินสอ) → Version: New version → Deploy**
URL เดิมจะใช้ได้ต่อ ไม่ต้องเปลี่ยนใน Vercel ค่ะ
