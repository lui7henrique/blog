/* eslint-disable @next/next/no-img-element */
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

      <footer
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>footer (in development...)</h2>
      </footer>
    </>
  )
}
