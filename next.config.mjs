/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    process.env.REPLIT_DEV_DOMAIN,
    `.${process.env.REPLIT_DEV_DOMAIN?.split('.').slice(1).join('.')}`,
  ].filter(Boolean),
}

export default nextConfig
