import { formatDistance } from "date-fns"
import { pt } from "date-fns/locale"
import { GetPostsQuery } from "graphql/generated/graphql"
import { PostURLCategory, usePostsCategories } from "hooks/usePostsCategories"
import { useRouter } from "next/router"

import * as S from "./styles"

const AUTHOR_IMAGE =
  "https://media.graphassets.com/resize=h:600,w:600,f:crop/security=policy:eyJleHBpcnkiOjE4MzIwMjY1MjMsInBhdGgiOiIvNzBiYWVhN2EtMzA0OS00ZDM4LThhYzAtMmQ2YzBiNDNkNWMwLyIsImNvbnRhaW5lciI6ImNvbW1vbi1maWxlc3RhY2stYWU2NTM5OSIsImNhbGwiOlsicmVhZCIsImNvbnZlcnQiXSwibWF4U2l6ZSI6MTAyNDAwMDB9,signature:bb1a6e70314bd16a8da4847953bec68e8970e139589741c7a8197b3c447f10c6/D1iBcfjQfKBqIdIErwqq"

type PostsListProps = {
  posts: GetPostsQuery["posts"]
}

export const PostsList = (props: PostsListProps) => {
  const { posts } = props

  const {
    query: { category },
    locale
  } = useRouter()

  const { getTitleByCategory } = usePostsCategories()

  return (
    <S.Main>
      <S.PostsListHeader>
        <S.PostListTitle>
          {getTitleByCategory(category as PostURLCategory)}
        </S.PostListTitle>
      </S.PostsListHeader>

      <S.PostsList>
        {posts.map((post) => {
          const { heading, thumbnail, slug, abstract, updatedBy, updatedAt } =
            post

          const updateAtTime = formatDistance(new Date(updatedAt), new Date(), {
            addSuffix: true,
            locale: locale === "pt-BR" ? pt : undefined
          })

          return (
            <S.PostItem key={post.id} href={`/posts/${slug}`}>
              <S.PostInfos>
                <S.PostHeader>
                  <S.PostHeading>{heading}</S.PostHeading>
                  <S.PostAbstract>{abstract}</S.PostAbstract>
                </S.PostHeader>

                <S.PostFooter>
                  <S.PostAuthor>
                    <S.PostAuthorImageWrapper>
                      <S.PostAuthorImage
                        src={AUTHOR_IMAGE}
                        alt={updatedBy?.name || "Luiz Henrique"}
                        fill
                      />
                    </S.PostAuthorImageWrapper>

                    <S.PostAuthorInfos>
                      <S.PostAuthorName>{updatedBy?.name}</S.PostAuthorName>
                      <S.PostUpdatedAt>{updateAtTime}</S.PostUpdatedAt>
                    </S.PostAuthorInfos>
                  </S.PostAuthor>
                </S.PostFooter>
              </S.PostInfos>

              <S.PostImageContainer>
                <S.PostImage
                  src={thumbnail.url}
                  alt={`${heading} thumbnail`}
                  fill
                  quality={0}
                />
              </S.PostImageContainer>
            </S.PostItem>
          )
        })}
      </S.PostsList>
    </S.Main>
  )
}
