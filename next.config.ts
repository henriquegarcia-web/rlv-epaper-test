import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_DB_URL: process.env.NEXT_PUBLIC_DB_URL
  }
}

export default nextConfig
