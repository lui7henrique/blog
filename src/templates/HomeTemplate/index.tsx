/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header"
import { useRef } from "react"

import { AboutMe } from "./AboutMe"
import { HeroSection } from "./HeroSection"
import { Skills } from "./Skills"
import * as S from "./styles"

export const HomeTemplate = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      <S.VideoBanner muted autoPlay loop ref={videoRef}>
        <source src="/videos/rocket.mp4" type="video/mp4" />
      </S.VideoBanner>

      <S.HeroContainer>
        <Header />
        <HeroSection />
      </S.HeroContainer>

      <AboutMe />
      <Skills />
    </>
  )
}
