import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annapurna Variety Stores | Kitchen Appliances & Home Utensils",
  description:
    "Your trusted neighbourhood store for premium kitchen appliances, pressure cookers, mixer grinders, gas stoves, cookware, and home utensils. Browse our catalog and inquire on WhatsApp.",
  keywords: [
    "kitchen appliances",
    "pressure cooker",
    "mixer grinder",
    "gas stove",
    "cookware",
    "Bhubaneswar",
    "Annapurna",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
