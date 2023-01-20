import { Header } from "components/Header"
import { Categories, GetPostsQuery } from "graphql/generated/graphql"

import { PostsCategories } from "./PostsCategories"
import { PostsList } from "./PostsList"
import * as S from "./styles"

export type PostsTemplateProps = {
  posts: GetPostsQuery["posts"]
  categories: Categories[]
}

export const PostsTemplate = (props: PostsTemplateProps) => {
  const { posts, categories } = props

  return (
    <>
      <Header />

      <S.Container>
        <PostsCategories categories={categories} />
        <PostsList posts={posts} />
      </S.Container>
    </>
  )
}
