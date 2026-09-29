import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/content";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // Lint runs as its own step (npm run lint); TypeScript type-checking still gates the build.
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    // Retired / merged routes → current cases. 308 (permanent) preserves SEO equity.
    return Object.entries(legacyRedirects).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
    ];
  },
};

export default nextConfig;
