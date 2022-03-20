import localeClient from "graphql/client"
import { GET_POSTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { PostsTemplate } from "templates/PostsTemplate"

type PostsTemplate = {}

export default function Home(props: PostsTemplate) {
  return <PostsTemplate />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const formattedLocale = locale!.replace("-", "_") as "pt_BR" | "en_US"

  const { posts } = await localeClient(formattedLocale).request(GET_POSTS)

  console.log(posts)

  return {
    props: {},
    revalidate: 60 * 60 * 24 // 1 day
  }
}
