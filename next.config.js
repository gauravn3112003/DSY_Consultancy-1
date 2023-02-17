/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.node = {
      crypto: false,
      tls: false,
      net: false,
      fs: false,
    }
    return config
  }
};
