/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@pharma/ui'],
  images: {
    domains: ['cdn.sanity.io'],
  },
}

export default nextConfig

