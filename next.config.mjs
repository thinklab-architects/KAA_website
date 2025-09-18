/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export for GitHub Pages or static hosting
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
