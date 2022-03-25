import localeClient from "graphql/client"
import { GetMinimalPostsQuery, GetPostsQuery } from "graphql/generated/graphql"
import { GET_MINIMAL_POSTS, GET_POSTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { PostsTemplate } from "templates/PostsTemplate"
import { heroContent } from "templates/PostsTemplate/HeroSection/content"

type PostsTemplate = {
  posts: GetPostsQuery["posts"]
  minimalPosts: GetMinimalPostsQuery["posts"]
}

export default function Home(props: PostsTemplate) {
  const { posts, minimalPosts } = props

  const { locale } = useRouter()
  const content = heroContent[locale as "pt-BR" | "en-US"]

  const url = `https://lui7henrique.vercel.app/${
    locale === "pt-BR" ? "" : "en-US"
  }`

  return (
    <>
      <NextSeo
        title={`Posts`}
        description={content.article.description}
        canonical={url}
        openGraph={{
          url: url,
          title: `Posts`,
          description: content.article.description,
          images: [
            {
              url: "https://lui7henrique.vercel.app/posts.png",
              width: 1280,
              height: 720,
              alt: "Posts"
            }
          ]
        }}
      />
      <PostsTemplate posts={posts} minimalPosts={minimalPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const { posts } = await localeClient(formattedLocale).request<GetPostsQuery>(
    GET_POSTS
  )

  const { posts: minimalPosts } = await localeClient(
    formattedLocale
  ).request<GetMinimalPostsQuery>(GET_MINIMAL_POSTS)

  return {
    props: {
      posts,
      minimalPosts
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
