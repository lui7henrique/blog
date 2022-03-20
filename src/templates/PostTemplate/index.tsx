import { Header } from "components/Header"
import { GetPostsQuery } from "graphql/generated/graphql"
import { useRef } from "react"

import * as S from "./styles"

type PostsTemplateProps = {
  posts: GetPostsQuery["posts"]
}

export const PostTemplate = (props: PostsTemplateProps) => {
  const { posts } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      <S.VideoOverlay />
      <S.VideoBanner muted autoPlay loop ref={videoRef}>
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </S.VideoBanner>

      <S.HeroContainer>
        <Header />
        <HeroSection />
      </S.HeroContainer>

      <PostsList posts={posts} />
    </>
  )
}
