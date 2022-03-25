import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { format, formatDistance } from "date-fns"
import pt from "date-fns/locale/pt"
import { GetPostBySlugQuery } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { useCallback, useState } from "react"
import { FaCalendar, FaClock } from "react-icons/fa"

import * as S from "./styles"

type PostsTemplateProps = {
  post: {
    other_slug: string
  } & GetPostBySlugQuery["posts"][0]
}

export const PostTemplate = (props: PostsTemplateProps) => {
  const { post } = props

  const { locale } = useRouter()
  const [authorImage, setAuthorImage] = useState(
    post.updatedBy?.picture as string
  )

  const formatDateByLocale = useCallback(() => {
    if (locale === "pt-BR") {
      return format(new Date(post.updatedAt), "dd 'de' MMMM 'de' yyyy", {
        locale: pt
      })
    }

    return format(new Date(post.updatedAt), "MMMM dd, yyyy")
  }, [locale, post.updatedAt])

  return (
    <>
      <Header isPost postSlug={post.other_slug} />
      <S.Banner backgroundImage={post.banner.url}></S.Banner>

      <S.Post>
        <S.PostInfos>
          <S.PostHeading>{post.heading}</S.PostHeading>
          <S.BasicInfos>
            <S.AuthorContainer>
              <S.AuthorImageWrapper>
                <S.AuthorImage
                  src={authorImage}
                  layout="fill"
                  onError={() => {
                    setAuthorImage("https://github.com/lui7henrique.png")
                  }}
                  alt={post.updatedBy!.name || "author"}
                />
              </S.AuthorImageWrapper>
              <S.AuthorName>{post.updatedBy?.name}</S.AuthorName>
            </S.AuthorContainer>
            <S.PostDateContainer>
              <FaCalendar size={20} />
              <S.PostDate>{formatDateByLocale()}</S.PostDate>
            </S.PostDateContainer>

            <S.PostTimeContainer>
              <FaClock size={20} />
              <S.PostTime>
                {formatDistance(new Date(post.updatedAt), new Date(), {
                  addSuffix: true,
                  locale: locale === "pt-BR" ? pt : undefined
                })}
              </S.PostTime>
            </S.PostTimeContainer>
          </S.BasicInfos>
        </S.PostInfos>
        <S.PostContent
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </S.Post>

      <Footer />
    </>
  )
}
