import localeClient from "graphql/client"
import { GetPostsQuery } from "graphql/generated/graphql"
import { GET_POSTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { PostsTemplate, PostsTemplateProps } from "templates/PostsTemplate"

export default function Posts(props: PostsTemplateProps) {
  const { locale } = useRouter()

  const url = `https://lui7henrique.vercel.app/${
    locale === "pt-BR" ? "" : "en-US"
  }`

  return (
    <>
      <NextSeo
        title={`Luiz Henrique | Posts`}
        description=""
        canonical={url}
        openGraph={{
          url: url,
          title: `Posts`,
          description: "",
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

      <PostsTemplate {...props} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const stage = process.env.POSTS_STAGE || "DRAFT"

  const { posts } = await localeClient(formattedLocale).request<GetPostsQuery>(
    GET_POSTS,
    {
      stage
    }
  )

  const categories = [
    ...new Set(
      posts.map((post) => post.categories).flatMap((category) => category)
    )
  ]

  return {
    props: {
      posts: posts.reverse(),
      categories
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
