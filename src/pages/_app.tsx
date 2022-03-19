import "aos/dist/aos.css" // You can also use <link> for styles
import AOS from "aos"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/global"
import theme from "styles/theme"

import SEO from "../../next-seo.config"
// ..

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath, push } = useRouter()

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250
    })

    const locale = localStorage.getItem("locale")

    if (locale) push(asPath, asPath, { locale: locale })
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#8257E6" />
      </Head>

      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <NextNprogress
        color="#8257E6"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
