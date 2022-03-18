/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header"

import { AboutMe } from "./AboutMe"
import { HeroSection } from "./HeroSection"
import { Skills } from "./Skills"
import * as S from "./styles"

export const HomeTemplate = () => {
  return (
    <>
      <S.HeroContainer>
        <S.BannerWrapper />
        <Header />
        <HeroSection />
      </S.HeroContainer>
      <h1>oi</h1>
      <AboutMe />
      <Skills />
    </>
  )
}
