import { GetPostsQuery } from "graphql/generated/graphql"

type PostsTemplateProps = {
  posts: GetPostsQuery["posts"]
}

export const PostTemplate = (props: PostsTemplateProps) => {
  console.log(props)

  return <></>
}
