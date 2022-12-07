import localeClient from "graphql/client"
import {
  GetPostsQuery,
  GetPostBySlugQuery,
  GetPostSlugByIdQuery
} from "graphql/generated/graphql"
import {
  GET_POSTS,
  GET_POST_BY_SLUG,
  GET_POST_SLUG_BY_ID
} from "graphql/queries"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { PostTemplate } from "templates/PostTemplate"

type PostTemplate = {
  post: {
    other_slug: string
  } & GetPostBySlugQuery["posts"][0]
}

export default function Post(props: PostTemplate) {
  const { post } = props

  const { locale } = useRouter()

  const postURL = `https://lui7henrique.vercel.app/${
    locale === "en-US" ? "en-US/" : ""
  }posts/${post.slug}`

  return (
    <>
      <NextSeo
        title={`Luiz Henrique | ${post.heading}`}
        description={post.abstract!}
        canonical={postURL}
        openGraph={{
          url: postURL,
          title: post.heading,
          description: post.abstract!,
          images: [
            {
              url: post.thumbnail.url!,
              width: post.thumbnail.width!,
              height: post.thumbnail.height!,
              alt: post.heading
            }
          ]
        }}
      />

      <PostTemplate post={post} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const env = process.env.NODE_ENV || "development"

  const draftEnvs = ["development", "preview", "PREVIEW"]
  const stage = draftEnvs.includes(env) ? "DRAFT" : "PUBLISHED"

  const { posts } = await localeClient("pt_BR").request<GetPostsQuery>(
    GET_POSTS,
    {
      stage
    }
  )

  const paths = posts.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const { posts } = await localeClient(
    formattedLocale
  ).request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  const { posts: postSlugOtherLanguage } = await localeClient(
    formattedLocale === "pt_BR" ? "en_US" : "pt_BR"
  ).request<GetPostSlugByIdQuery>(GET_POST_SLUG_BY_ID, {
    id: posts[0]?.id
  })

  const post = {
    ...posts[0],
    other_slug: postSlugOtherLanguage[0].slug
  }

  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
