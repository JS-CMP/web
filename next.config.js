/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/web/',
  assetPrefix: '/web/',
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig