/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['www.autoevexpo.com']
  }
}

module.exports = nextConfig
