/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-domain-if-image-is-hosted-externally.com'],
  },
}

module.exports = nextConfig