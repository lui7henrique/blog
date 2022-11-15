import { Tech } from "components/Tech"
import { formatDistance } from "date-fns"
import pt from "date-fns/locale/pt"
import { GetPostsQuery } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { useCallback, useState } from "react"
import { v4 } from "uuid"

import * as S from "./styles"

type PostsListsProps = {
  posts: GetPostsQuery["posts"]
}

type PostProps = {
  post: GetPostsQuery["posts"][number]
  index: number
}

export const PostsList = (props: PostsListsProps) => {
  const { locale } = useRouter()

  const { posts } = props

  const [authorImage, setAuthorImage] = useState(
    posts[0].updatedBy?.picture as string
  )

  const Post = useCallback(
    (props: PostProps) => {
      const { post, index } = props

      const updateAtTime = formatDistance(
        new Date(post.updatedAt),
        new Date(),
        {
          addSuffix: true,
          locale: locale === "pt-BR" ? pt : undefined
        }
      )

      return (
        <S.PostContainer
          data-aos="fade-down"
          data-aos-delay={index > 10 ? index * 10 : index * 100}
        >
          <S.Post href={`/posts/${post.slug}`}>
            <S.PostThumbnailWrapper>
              <S.PostThumbnail
                src={post.thumbnail.url}
                layout="fill"
                alt={post.heading}
              />
            </S.PostThumbnailWrapper>

            <S.PostTechs>
              {post.technologies.length ? (
                post.technologies.map((tech, index) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    key={v4()}
                  >
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

            {post.updatedBy && (
              <S.PostAuthor>
                <S.PostAuthorAvatarWrapper
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <S.PostAuthorAvatar
                    src={authorImage}
                    layout="fill"
                    onError={() => {
                      setAuthorImage("https://github.com/lui7henrique.png")
                    }}
                    alt={post.updatedBy.name}
                  />
                </S.PostAuthorAvatarWrapper>
                <S.PostAuthorInfos>
                  <S.PostAuthorName data-aos="fade-up" data-aos-delay={300}>
                    {post.updatedBy.name}
                  </S.PostAuthorName>
                  <S.PostUpdateAtTime data-aos="fade-up" data-aos-delay={400}>
                    {updateAtTime}
                  </S.PostUpdateAtTime>
                </S.PostAuthorInfos>
              </S.PostAuthor>
            )}

            <S.PostInfos>
              <S.PostHeading data-aos="fade-right" data-aos-delay={450}>
                {post.heading}
              </S.PostHeading>
              <S.PostAbstract data-aos="fade-right" data-aos-delay={500}>
                {post.abstract}
              </S.PostAbstract>
            </S.PostInfos>
          </S.Post>
        </S.PostContainer>
      )
    },
    [authorImage, locale]
  )

  return (
    <S.Container id="posts">
      {!!posts.length &&
        posts.map((post, index) => {
          return <Post key={post.id} post={post} index={index} />
        })}
    </S.Container>
  )
}
