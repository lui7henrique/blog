/* eslint-disable @next/next/no-img-element */
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { GetProjectsQuery } from "graphql/generated/graphql"
import { useRef } from "react"

import { AboutMe } from "./AboutMe"
import { HeroSection } from "./HeroSection"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import * as S from "./styles"

type HomeTemplateProps = {
  projects: GetProjectsQuery["projects"]
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { projects } = props

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

      <Projects projects={projects} />

      <Footer />
    </>
  )
}
