/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,   // <-- required for next/image in static export
  },
};

module.exports = nextConfig;
