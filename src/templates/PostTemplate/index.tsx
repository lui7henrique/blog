import { Comments } from "components/Comments"
import { Header } from "components/Header"
import { GetPostBySlugQuery } from "graphql/generated/graphql"
import { useEffect, useRef, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula"
import { v4 } from "uuid"

import { Author } from "./Author"
import { Banner } from "./Banner"
import * as S from "./styles"
import { languages } from "./types"

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
    post: {
      other_slug,
      heading,
      categories,
      updatedAt,
      banner,
      content,
      updatedBy
    }
  } = props

  const [currentContent, setCurrentContent] = useState([] as Content)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const formattedContent = () => {
      const children = Array.from(contentRef.current?.children!)

      const newChildren = children.map((c) => {
        if (c.nodeName === "PRE") {
          return {
            element: (c as HTMLElement).innerText!,
            code: true,
            language: "javascript"
          }
        }

        if (c.nodeName === "DIV" && languages.includes(c.className)) {
          return {
            element: (c.children[0] as HTMLElement).innerText,
            code: true,
            language: c.className
          }
        }

        if (c.nodeName !== "PRE") {
          return {
            element: c.outerHTML,
            code: false
          }
        }
      })

      setCurrentContent(newChildren as Element[])
    }

    formattedContent()
  }, [content.html])

  return (
    <>
      <Header isPost postSlug={other_slug} />

      <Banner categories={categories} updatedAt={updatedAt} heading={heading} />

      <S.PostContainer>
        <S.PostContent>
          <S.PostImageWrapper>
            <S.PostImage src={banner.url} fill alt={`${heading} banner`} />
          </S.PostImageWrapper>

          <div
            style={{
              display: "none"
            }}
            dangerouslySetInnerHTML={{ __html: content.html }}
            ref={contentRef}
          />

          <S.PostArticle>
            {currentContent.map(({ element, code, language }) => {
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
                <S.PostArticle dangerouslySetInnerHTML={{ __html: element }} />
              )
            })}
          </S.PostArticle>

          <Comments />
        </S.PostContent>

        <S.PostAsideContainer>
          <S.PostAsideContent>
            <Author updatedBy={updatedBy} />

            {/* {!!techs.length && <Techs techs={techs} />} */}
          </S.PostAsideContent>
        </S.PostAsideContainer>
      </S.PostContainer>
    </>
  )
}
