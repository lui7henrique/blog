import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { GetMinimalPostsQuery, GetPostsQuery } from "graphql/generated/graphql"
import { useRef } from "react"

import { HeroSection } from "./HeroSection"
import { PostsList } from "./PostsList"
import * as S from "./styles"

type PostsTemplateProps = {
  posts: GetPostsQuery["posts"]
  minimalPosts: GetMinimalPostsQuery["posts"]
}

export const PostsTemplate = (props: PostsTemplateProps) => {
  const { posts, minimalPosts } = props
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

      <Footer posts={minimalPosts} />
    </>
  )
}
