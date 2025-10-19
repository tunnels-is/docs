
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  // Disable dynamic manifest and PWA features for static export
  experimental: {
    ppr: false,  // If using Partial Prerendering (Next.js 14+), disable it
  },
  // Generate static manifest.json if needed for PWA (place in app/ directory)
  // But disable any runtime fetches
  eslint: {
    ignoreDuringBuilds: true,  // Optional: Skip ESLint on build if causing issues
  },
};

export default nextConfig;

