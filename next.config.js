/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "media.graphcms.com",
      "github.com",
      "picsum.photos",
      "avatars.githubusercontent.com",
      "media.graphassets.com"
    ]
  },

  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR"
  },

  experimental: { esmExternals: true },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://lui7henrique.vercel.app/api/:path*"
      }
    ]
  }
}

module.exports = nextConfig
