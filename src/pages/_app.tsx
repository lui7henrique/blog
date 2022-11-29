import Aos from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import { DefaultSeo } from "next-seo"
import { AppProps as BasicAppProps } from "next/app"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { globalStyles, GlobalStyles } from "styles/global"
import theme from "styles/theme"
import { colors } from "styles/tokens"

import SEO from "../../next-seo.config"

globalStyles()

type AppProps = BasicAppProps

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250
    })
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#000000" />
      </Head>

      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <NextNProgress
          color={colors.zinc700}
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
