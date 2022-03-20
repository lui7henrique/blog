import { Header } from "components/Header"
import { useRef } from "react"

import * as S from "./styles"

export const PostsTemplate = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      <S.VideoOverlay />
      <S.VideoBanner muted autoPlay loop ref={videoRef}>
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </S.VideoBanner>
      <Header />
    </>
  )
}
