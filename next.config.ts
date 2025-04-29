/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/web',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
