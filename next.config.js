const withPWA = require("next-pwa")
const isProd = process.env.NODE_ENV === "production"

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: !isProd
  },
  images: {
    domains: [
      "media.graphcms.com",
      "github.com",
      "picsum.photos",
      "avatars.githubusercontent.com"
    ]
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR"
  },
  experimental: { esmExternals: true }
})
