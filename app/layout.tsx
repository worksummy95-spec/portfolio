import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CursorPreview from "@/components/providers/CursorPreview";
import MotionRoot from "@/components/providers/MotionRoot";
import Preloader from "@/components/providers/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { meta } from "@/lib/content";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumanthmanjunathportfolio.vercel.app"),
  title: { default: "Sumanth Manjunath — Brand & Corporate Communications", template: "%s — Sumanth Manjunath" },
  description: "I make complex organisations easier to understand, trust and remember. Brand strategy, corporate communications, digital and systems.",
  keywords: ["Brand Manager", "Corporate Communications", "Brand Strategy", "B2B", "Jindal Aluminium", "Sumanth Manjunath"],
  authors: [{ name: meta.name }],
  openGraph: {
    title: "Sumanth Manjunath — Brand & Corporate Communications",
    description: "I make complex organisations easier to understand, trust and remember.",
    type: "website", images: ["/assets/global/og-image.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-ink antialiased" suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:font-mono focus:text-[0.72rem] focus:uppercase focus:tracking-[0.16em] focus:text-bg">
          Skip to content
        </a>
        <MotionRoot>
          <Preloader />
          <ScrollProgress />
          <SmoothScroll>
            <CursorPreview>
              <Navbar />
              <main id="main">{children}</main>
              <Footer />
            </CursorPreview>
          </SmoothScroll>
        </MotionRoot>
      </body>
    </html>
  );
}
