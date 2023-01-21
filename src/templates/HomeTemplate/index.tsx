/* eslint-disable @next/next/no-img-element */

import { Header } from "components/Header"
import { GetProjectsQuery } from "graphql/generated/graphql"

type HomeTemplateProps = {
  projects: GetProjectsQuery["projects"]
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { projects } = props

  console.log({ projects })

  // const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      <Header />
      {/* <S.VideoBanner muted disablePictureInPicture autoPlay loop ref={videoRef}>
        <source src="/videos/rocket.mp4" type="video/mp4" />
      </S.VideoBanner>

      <S.HeroContainer>
        <Header />
        <HeroSection />
      </S.HeroContainer>

      <AboutMe />
      <Skills />

      <Projects projects={projects} />

      <Footer /> */}
    </>
  )
}
