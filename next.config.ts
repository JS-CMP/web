/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/web/',
  assetPrefix: '/web/',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
