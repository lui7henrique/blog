import { GetProjectsQuery } from "graphql/generated/graphql"
import { FaGithub } from "react-icons/fa"
import { useTheme } from "styled-components"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { projectsContent } from "./content"
import * as S from "./styles"

import "swiper/css"
import "swiper/css/pagination"
import { useRouter } from "next/router"

type ProjectsProps = {
  projects: GetProjectsQuery["projects"]
}

export const Projects = (props: ProjectsProps) => {
  const { projects } = props

  const theme = useTheme()
  const { locale } = useRouter()

  const { title, subtitle } = projectsContent[locale as "pt-BR" | "en-US"]

  return (
    <S.ProjectsContainer>
      <S.ProjectsContent>
        <S.ProjectTitles>
          <S.ProjectsSubtitle>{subtitle}</S.ProjectsSubtitle>
          <S.ProjectsTitle>{title}</S.ProjectsTitle>
        </S.ProjectTitles>

        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            width: "100%",
            border: `1px solid ${theme.colors.shape}`,
            borderRadius: "5px"
          }}
          pagination={{ clickable: true }}
          centeredSlides
        >
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <S.Project href={project.projectUrl!} target="blank">
                  {project.repositoryUrl && (
                    <S.GithubLink target="blank" href={project.repositoryUrl}>
                      <FaGithub size={25} />
                    </S.GithubLink>
                  )}
                  <S.ProjectThumbnailWrapper>
                    <S.ProjectThumbnail
                      src={project.thumbnail?.url ?? project.images[0].url}
                      layout="fill"
                      quality={100}
                    />
                  </S.ProjectThumbnailWrapper>
                  <S.ProjectAbstract>{project.abstract}</S.ProjectAbstract>
                </S.Project>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </S.ProjectsContent>
    </S.ProjectsContainer>
  )
}
