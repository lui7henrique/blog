import localeClient from "graphql/client"
import { GetPostsQuery, GetPostBySlugQuery } from "graphql/generated/graphql"
import { GET_POSTS, GET_POST_BY_SLUG } from "graphql/queries"
import { GetStaticPaths, GetStaticProps } from "next"

type PostTemplate = {
  post: GetPostBySlugQuery["posts"][0]
}

export default function Post(props: PostTemplate) {
  const { post } = props

  return <h1>{post.heading}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await localeClient("pt_BR").request<GetPostsQuery>(
    GET_POSTS
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

  return {
    props: {
      post: posts[0]
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
