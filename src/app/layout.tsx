import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

export const be_Vietnam_Pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ByteForge",
  description:
    "Empowering businesses with cutting-edge technology solutions to drive digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${be_Vietnam_Pro.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
