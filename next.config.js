/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: {
    appDir: true,
    reactRoot: true, // Enables React 18 concurrent features (when available)
    serverComponents: true, // Enables experimental server components (when available)
    optimizeCss: true, // Enables experimental CSS optimizations
    // ... other experimental features
  },

  // Webpack configurations
  webpack: (config, options) => {
    // Your webpack configurations go here
    return config;
  },
};

module.exports = nextConfig;
