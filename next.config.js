/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/web',
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig