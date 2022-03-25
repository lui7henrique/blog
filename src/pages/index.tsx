import localeClient from "graphql/client"
import {
  GetProjectsQuery,
  GetMinimalPostsQuery
} from "graphql/generated/graphql"
import { GET_MINIMAL_POSTS, GET_PROJECTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { HomeTemplate } from "templates/HomeTemplate"
import { heroContent } from "templates/HomeTemplate/HeroSection/content"

type HomeProps = {
  projects: GetProjectsQuery["projects"]
  posts: GetMinimalPostsQuery["posts"]
}

export default function Home(props: HomeProps) {
  const { projects, posts } = props

  const { locale } = useRouter()
  const content = heroContent[locale as "pt-BR" | "en-US"]

  const url = `https://lui7henrique.vercel.app/${
    locale === "pt-BR" ? "" : "en-US"
  }`

  return (
    <>
      <NextSeo
        title={locale === "pt-BR" ? "Início" : "Home"}
        description={`${content.article.description}${content.article.subDescription}`}
        canonical={url}
        openGraph={{
          url: url,
          title: locale === "pt-BR" ? "Início" : "Home",
          description: `${content.article.description}${content.article.subDescription}`,
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
      <HomeTemplate projects={projects} posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const { projects } = await localeClient(
    formattedLocale
  ).request<GetProjectsQuery>(GET_PROJECTS)

  const { posts } = await localeClient(
    formattedLocale
  ).request<GetMinimalPostsQuery>(GET_MINIMAL_POSTS)

  return {
    props: {
      projects,
      posts
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
