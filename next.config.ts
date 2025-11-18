/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← هذا هو الحل!
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // إزالة turbopack تماماً
}

module.exports = nextConfig