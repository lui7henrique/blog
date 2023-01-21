import Aos from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import { AppProvider } from "context"
import { DefaultSeo } from "next-seo"
import { ThemeProvider, useTheme } from "next-themes"
import { AppProps as BasicAppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"
import { darkTheme } from "styles"
import { globalStyles } from "styles/global"

import SEO from "../../next-seo.config"

type AppProps = BasicAppProps

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  const {} = useTheme()

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

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: "light"
        }}
      >
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
