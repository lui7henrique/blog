import { formatDistance } from "date-fns"
import pt from "date-fns/locale/pt"
import { GetPostsQuery } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { useCallback } from "react"

import * as S from "./styles"

type PostsListsProps = {
  posts: GetPostsQuery["posts"]
}

type PostProps = {
  post: GetPostsQuery["posts"][number]
}

export const PostsList = (props: PostsListsProps) => {
  const { locale } = useRouter()

  const { posts } = props

  console.log(locale)

  const Post = useCallback(
    (props: PostProps) => {
      const { post } = props

      const updateAtTime = formatDistance(
        new Date(post.updatedAt),
        new Date(),
        {
          addSuffix: true,
          locale: locale === "pt-BR" ? pt : undefined
        }
      )

      return (
        <S.Post href={`/posts/${post.slug}`}>
          <a>
            <S.PostThumbnailWrapper>
              <S.PostThumbnail src={post.thumbnail.url} layout="fill" />
            </S.PostThumbnailWrapper>

            {post.updatedBy && (
              <S.PostAuthor>
                <S.PostAuthorAvatarWrapper>
                  <S.PostAuthorAvatar
                    src={post.updatedBy.picture!}
                    layout="fill"
                  />
                </S.PostAuthorAvatarWrapper>
                <S.PostAuthorInfos>
                  <S.PostAuthorName>{post.updatedBy.name}</S.PostAuthorName>
                  <S.PostUpdateAtTime>{updateAtTime}</S.PostUpdateAtTime>
                </S.PostAuthorInfos>
              </S.PostAuthor>
            )}

            <S.PostInfos>
              <S.PostHeading>{post.heading}</S.PostHeading>
              <S.PostAbstract>{post.abstract}</S.PostAbstract>
            </S.PostInfos>
          </a>
        </S.Post>
      )
    },
    [locale]
  )

  return (
    <S.Container>
      {!!posts.length &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
    </S.Container>
  )
}
