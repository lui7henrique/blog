import localeClient from "graphql/client"
import { GetPostsQuery } from "graphql/generated/graphql"
import { GET_POSTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { PostsTemplate } from "templates/PostsTemplate"

type PostsTemplate = {
  posts: GetPostsQuery["posts"]
}

export default function Home(props: PostsTemplate) {
  const { posts } = props

  return <PostsTemplate posts={posts} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const { posts } = await localeClient(formattedLocale).request<GetPostsQuery>(
    GET_POSTS
  )

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
