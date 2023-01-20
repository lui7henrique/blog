import { GetPostsQuery } from "graphql/generated/graphql"

import * as S from "./styles"

type PostsListProps = {
  posts: GetPostsQuery["posts"]
}

export const PostsList = (props: PostsListProps) => {
  const { posts } = props

  return (
    <S.Main>
      <S.PostsListHeader>
        <S.PostListTitle>{}</S.PostListTitle>
      </S.PostsListHeader>

      {posts.map((post) => {
        return <h1>{post.heading}</h1>
      })}
    </S.Main>
  )
}
