/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_IMAGE_DOMAIN],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'app.tsx', 'app.ts', 'app.jsx', 'app.js'],
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
}

module.exports = nextConfig
