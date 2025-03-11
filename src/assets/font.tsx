import { Be_Vietnam_Pro, Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const be_Vietnam_Pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
