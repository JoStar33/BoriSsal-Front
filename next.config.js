/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'app.tsx', 'app.ts', 'app.jsx', 'app.js'],
}

module.exports = nextConfig
