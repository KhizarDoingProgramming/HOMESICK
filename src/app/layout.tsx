import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScallopDivider from "@/components/ScallopDivider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "HOMESICK — Creative Technology Studio",
  description: "We build digital experiences, automation systems and web products for businesses that want to move differently.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-dark">
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <ScallopDivider />
        <Footer />
      </body>
    </html>
  );
}
