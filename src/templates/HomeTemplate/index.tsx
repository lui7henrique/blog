/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header"

import { HeroSection } from "./HeroSection"
import * as S from "./styles"

export const HomeTemplate = () => {
  return (
    <S.HeroContainer>
      <S.BannerWrapper />
      <Header />
      <HeroSection />
    </S.HeroContainer>
  )
}
