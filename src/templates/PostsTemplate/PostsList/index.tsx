import { formatDistance } from "date-fns"
import { pt } from "date-fns/locale"
import { Categories, GetPostsQuery } from "graphql/generated/graphql"
import { PostURLCategory, usePostsCategories } from "hooks/usePostsCategories"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { AUTHOR_IMAGE } from "utils/author/img"
import { capitalize } from "utils/string/capitalize"

import * as S from "./styles"

type PostsListProps = {
  posts: GetPostsQuery["posts"]
}

export const PostsList = (props: PostsListProps) => {
  const { posts } = props

  const {
    query: { category },
    locale
  } = useRouter()

  const { getTitleByCategory, translateCategory } = usePostsCategories()

  const title = useMemo(() => {
    if (!category) {
      return locale === "pt-BR" ? "Tudo" : "All"
    }

    if (locale === "pt-BR") {
      return translateCategory(capitalize(category as string) as Categories)
    }

    return getTitleByCategory(category as PostURLCategory)
  }, [category, getTitleByCategory, locale, translateCategory])

  return (
    <S.Main>
      <S.PostsListHeader>
        <S.PostListTitle>{title}</S.PostListTitle>
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
