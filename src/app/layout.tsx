import type { Metadata } from "next";
import { ViewerProvider } from "@/context/ViewerContext";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VolumeTrader Pro — เรียนรู้การวิเคราะห์ Volume เพื่อทำกำไรในตลาดจริง",
  description:
    "คอร์สเรียนออนไลน์ด้าน Volume Trading สำหรับนักเทรดไทย เรียนรู้เทคนิคการวิเคราะห์ Volume ที่ใช้ได้จริงในตลาด Forex, Gold และหุ้นไทย โดยผู้เชี่ยวชาญมืออาชีพ",
  keywords:
    "Volume Trading, คอร์สเทรด, Forex, Gold, หุ้นไทย, Order Flow, Volume Profile, นักเทรด",
  openGraph: {
    title: "VolumeTrader Pro — เรียนรู้การวิเคราะห์ Volume",
    description:
      "คอร์สเรียนออนไลน์ด้าน Volume Trading สำหรับนักเทรดไทย",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${playfair.variable} ${poppins.variable} font-poppins antialiased`}
      >
        <ViewerProvider>{children}</ViewerProvider>
      </body>
    </html>
  );
}
