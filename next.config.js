/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SANITY_TOKEN: process.env.SANITY_TOKEN
  }
}

module.exports = nextConfig
