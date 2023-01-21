import { GetPostBySlugQuery } from "graphql/generated/graphql"
import { AUTHOR_IMAGE } from "utils/author/img"

import * as S from "./styles"

type AuthorProps = {
  updatedBy: GetPostBySlugQuery["posts"][0]["updatedBy"]
}

export const Author = (props: AuthorProps) => {
  const { updatedBy } = props

  return (
    <S.PostAuthor>
      <S.PostAuthorValue>
        <S.PostAuthorImageWrapper>
          <S.PostAuthorImage
            src={AUTHOR_IMAGE}
            fill
            alt={updatedBy?.name || "Luiz Henrique"}
          />
        </S.PostAuthorImageWrapper>

        <S.PostAuthorInfos>
          <S.PostAuthorName>{updatedBy?.name}</S.PostAuthorName>
          <S.PostAuthorSocialMedia
            href="https://twitter.com/lui7henrique"
            target="_blank"
          >
            @lui7henrique
          </S.PostAuthorSocialMedia>
        </S.PostAuthorInfos>
      </S.PostAuthorValue>
    </S.PostAuthor>
  )
}
