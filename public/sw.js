if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js")
      let s = Promise.resolve()
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script")
              ;(n.src = e), document.head.appendChild(n), (n.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`)
          return n[e]
        })
      )
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e))
    },
    n = { require: Promise.resolve(s) }
  self.define = (s, a, i) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {}
        const r = { uri: location.origin + s.slice(1) }
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case "exports":
                return n
              case "module":
                return r
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = i(...e)
          return n.default || (n.default = s), n
        })
      }))
  }
}
define("./sw.js", ["./workbox-72c9c03f"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/server/middleware-build-manifest.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/server/middleware-react-loadable-manifest.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/124-664f2c7382659da1.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/1bfc9850-89d538a37179f453.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/203.6e56db03d3d481c8.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/286-3e61ea8b2031a912.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/395-dcc5defe9d22af68.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/397-9dc3ecb66da2b88f.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/815-5017ef70703100fa.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/894.9242ca9b40e7b391.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/d0447323-5a976bb8cdba7532.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/d64684d8-cb2025a1a8a8b9d8.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/framework-ffee79c6390da51e.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/main-963ebf6ab2a1ad5e.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/pages/_app-9507193d8ee60cfd.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/pages/_error-a9c647b4fb08e695.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/pages/index-b8419445f36e2708.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/pages/posts-9532dac0b660d6e7.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/pages/posts/%5Bslug%5D-9e2bf4b06f25997b.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/chunks/webpack-0a9c759912366772.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/css/0a4ec652d6028205.css",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/css/b0a217e4eed08cc0.css",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/r-5X50KUCMDyXs-Z4QMR1/_buildManifest.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        {
          url: "/_next/static/r-5X50KUCMDyXs-Z4QMR1/_ssgManifest.js",
          revision: "r-5X50KUCMDyXs-Z4QMR1"
        },
        { url: "/banner.jpg", revision: "e6daa805c1efb287690c73d64b3c7c69" },
        { url: "/home.png", revision: "7688dcbbba52dfb668fc808f6105788a" },
        { url: "/icon.svg", revision: "4f5622bd4befad189d38c2d3e779a939" },
        {
          url: "/logos/chakra-ui.png",
          revision: "07c925e6c5b4838979a8833acac35996"
        },
        {
          url: "/logos/firebase.png",
          revision: "24caa7afa6db01dd6b1ba41b376eeabc"
        },
        {
          url: "/logos/general.png",
          revision: "c9d43805eee1fe0fa4dd415633d8cbe4"
        },
        {
          url: "/logos/graph-cms.png",
          revision: "941205165b7ddc8676ccd465f8f190f6"
        },
        {
          url: "/logos/graphql.png",
          revision: "9ffe258ca1e3ae3e5e6ce273618e6e54"
        },
        {
          url: "/logos/imbd.png",
          revision: "a79e542523c4b3a09eb62c511fee0c88"
        },
        {
          url: "/logos/javascript.png",
          revision: "89b9da620de6a1a6eeb0aca2ba293e87"
        },
        {
          url: "/logos/nasa.png",
          revision: "408e94c078ed4d5f0cfd02e3b99e2507"
        },
        {
          url: "/logos/next-js.png",
          revision: "02dfdac16100b40337b156a95ab4b1fe"
        },
        {
          url: "/logos/react-js.png",
          revision: "71295e869e0b8bd17601c2ce3d20893e"
        },
        {
          url: "/logos/styled-components.png",
          revision: "fddb6b0a315b81b8851ccdb709792902"
        },
        {
          url: "/logos/typescript.png",
          revision: "5415b1a30925e87169fec0801e47840f"
        },
        { url: "/manifest.json", revision: "8d58d59db54b8aa16c62d1dba203db00" },
        { url: "/posts.png", revision: "f239ba9229a04e4a766abe6dd198bdd2" },
        { url: "/robots.txt", revision: "e8fc5bcb143a7adb2ca36ee0a2f2aa10" },
        { url: "/sitemap-0.xml", revision: "d653a7ca0e21e7a8a662ebff4c8c2f96" },
        { url: "/sitemap.xml", revision: "0d42999db861ae0163a92e7d853dcfaf" },
        {
          url: "/videos/galaxy.mp4",
          revision: "1d5d60c947a51ac9e93b4e76e5877f76"
        },
        {
          url: "/videos/rocket.mp4",
          revision: "8a3e2f79429c7bafa1c8f6e3016af15a"
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      "GET"
    )
})
