/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  // Lint nits shouldn't fail a production build; TypeScript type-checking still runs.
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
