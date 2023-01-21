import { Comments } from "components/Comments"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Tech } from "components/Tech"
import { GetPostBySlugQuery } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { FiChevronLeft } from "react-icons/fi"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula"
import { v4 } from "uuid"

import { Banner } from "./Banner"
import * as S from "./styles"

type PostsTemplateProps = {
  post: {
    other_slug: string
  } & GetPostBySlugQuery["posts"][0]
}

type Element = {
  element: string
  code: boolean
  language?: string
}

type Content = Array<Element>

export const PostTemplate = (props: PostsTemplateProps) => {
  const {
    post: { other_slug, heading, categories, updatedAt, banner }
  } = props

  // const [authorImage, setAuthorImage] = useState(
  //   post.updatedBy?.picture as string
  // )

  // const [content, setContent] = useState([] as Content)
  // const contentRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const formattedContent = () => {
  //     const children = Array.from(contentRef.current?.children!)

  //     const newChildren = children.map((c) => {
  //       if (c.nodeName === "PRE") {
  //         return {
  //           element: (c as HTMLElement).innerText!,
  //           code: true,
  //           language: "javascript"
  //         }
  //       }

  //       if (c.nodeName === "DIV" && languages.includes(c.className)) {
  //         return {
  //           element: (c.children[0] as HTMLElement).innerText,
  //           code: true,
  //           language: c.className
  //         }
  //       }

  //       if (c.nodeName !== "PRE") {
  //         return {
  //           element: c.outerHTML,
  //           code: false
  //         }
  //       }
  //     })

  //     setContent(newChildren as Element[])
  //   }

  //   formattedContent()
  // }, [post.content.html])

  return (
    <>
      <Header isPost postSlug={other_slug} />

      <Banner categories={categories} updatedAt={updatedAt} heading={heading} />

      <S.PostContainer>
        <S.PostImageWrapper>
          <S.PostImage src={banner.url} fill alt={`${heading} banner`} />
        </S.PostImageWrapper>
      </S.PostContainer>

      {/* <S.Banner backgroundImage={post.banner.url}></S.Banner>

      <S.Post>
        <S.PostInfos>
          <S.PostTechs>
            {post.techs.length ? (
              post.techs.map((tech) => (
                <div key={v4()}>
                  <Tech tech={tech} rounded={false} />
                </div>
              ))
            ) : (
              <div data-aos="fade-up" data-aos-delay={150}>
                <Tech
                  tech={locale === "pt-BR" ? "Geral" : "General"}
                  rounded={false}
                />
              </div>
            )}
          </S.PostTechs>
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

        <div
          style={{
            display: "none"
          }}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
          ref={contentRef}
        />

        <S.PostContentContainer>
          {content.map(({ element, code, language }) => {
            return code ? (
              <SyntaxHighlighter
                language={language}
                style={dracula}
                customStyle={{
                  margin: "16px 0"
                }}
                key={v4()}
                showInlineLineNumbers={true}
                wrapLongLines={true}
              >
                {element}
              </SyntaxHighlighter>
            ) : (
              <S.PostContent dangerouslySetInnerHTML={{ __html: element }} />
            )
          })}
        </S.PostContentContainer>

        <Comments />
      </S.Post> */}
    </>
  )
}
