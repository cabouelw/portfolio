/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_URL: process.env?.EMAIL_URL
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
