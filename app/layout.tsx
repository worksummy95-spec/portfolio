import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import MotionRoot from "@/components/providers/MotionRoot";
import Preloader from "@/components/providers/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { meta, site } from "@/lib/content";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const ogImage = { url: "/og/og-home.png", width: 1200, height: 630, alt: site.title };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s — Sumanth Manjunath" },
  description: site.description,
  applicationName: meta.name,
  keywords: ["Digital Strategy", "Digital Transformation", "Digital Platforms", "Website Governance", "SEO", "Business Process Improvement", "Marketing Operations", "Governance", "AI-assisted systems", "Sumanth Manjunath", "Bengaluru"],
  authors: [{ name: meta.name, url: site.url }],
  creator: meta.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_IN", siteName: meta.name, url: "/",
    title: site.title, description: site.description, images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [ogImage.url] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#12100f", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-ink antialiased" suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:font-mono focus:text-[0.72rem] focus:uppercase focus:tracking-[0.16em] focus:text-bg">
          Skip to content
        </a>
        <MotionRoot>
          <Preloader />
          <ScrollProgress />
          <SmoothScroll>
            <Navbar />
            <main id="main" tabIndex={-1} className="outline-none">{children}</main>
            <Footer />
          </SmoothScroll>
        </MotionRoot>
      </body>
    </html>
  );
}
