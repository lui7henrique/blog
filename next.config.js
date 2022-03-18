const withPWA = require("next-pwa")
const isProd = process.env.NODE_ENV === "production"

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: !isProd
  },
  images: {
    domains: ["media.graphcms.com", "github.com"]
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en-US", "pt-BR"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "pt-BR"
  }
})
