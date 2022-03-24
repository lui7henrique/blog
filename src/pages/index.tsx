import localeClient from "graphql/client"
import { GetProjectsQuery } from "graphql/generated/graphql"
import { GET_PROJECTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { HomeTemplate } from "templates/HomeTemplate"
import { heroContent } from "templates/HomeTemplate/HeroSection/content"

type HomeProps = {
  projects: GetProjectsQuery["projects"]
}

export default function Home(props: HomeProps) {
  const { projects } = props

  const { locale } = useRouter()
  const content = heroContent[locale as "pt-BR" | "en-US"]

  const url = `https://lui7henrique.vercel.app/${
    locale === "pt-BR" ? "" : "en-US"
  }`

  return (
    <>
      <NextSeo
        title={locale === "pt-BR" ? "Início" : "Home"}
        description={content.article.description}
        canonical={url}
        openGraph={{
          url: url,
          title: locale === "pt-BR" ? "Início" : "Home",
          description: content.article.description,
          images: [
            {
              url: "https://lui7henrique.vercel.app/home.png",
              width: 1280,
              height: 720,
              alt: "Home"
            }
          ]
        }}
      />
      <HomeTemplate projects={projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const { projects } = await localeClient(
    formattedLocale
  ).request<GetProjectsQuery>(GET_PROJECTS)

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
