/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your existing config
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      }
    }
    return config
  },

  output: 'standalone',
  
  // Optionally specify static pages
  generateStaticParams: async () => {
    return {
      // List any static paths here
      '/': { dynamic: false },
      '/auth/sign-in': { dynamic: false },
      '/auth/sign-up': { dynamic: false },
    }
  },

  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
  },
  
  // Specify which routes should NOT use Edge Runtime
  serverRuntimeConfig: {
    excludedRoutes: ['/api/stripe/connect'],
  },
}

module.exports = nextConfig 