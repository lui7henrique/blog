import { GetProjectsQuery } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { FaGithub } from "react-icons/fa"
import { HiLink } from "react-icons/hi"
import { useTheme } from "styled-components"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { v4 } from "uuid"

import { projectsContent } from "./content"
import * as S from "./styles"

import "swiper/css"
import "swiper/css/pagination"
import { Tech } from "components/Tech"

type ProjectsProps = {
  projects: GetProjectsQuery["projects"]
}

export const Projects = (props: ProjectsProps) => {
  const { projects } = props

  const theme = useTheme()
  const { locale } = useRouter()

  const { title, subtitle } = projectsContent[locale as "pt-BR" | "en-US"]

  return (
    <S.ProjectsContainer id="projects">
      <S.ProjectsContent>
        <S.Aside>
          <div>
            <S.Subtitle data-aos="fade-right" data-aos-delay="200">
              {subtitle}
            </S.Subtitle>
            <S.Title data-aos="fade-right" data-aos-delay="100">
              {title}
            </S.Title>
          </div>
        </S.Aside>

        <S.Projects>
          {projects.map((project, index) => {
            const images = [project.thumbnail, ...project.images]

            const top = (
              index === 0 ? 4 : index * 4
            ) as keyof typeof theme["space"]

            return (
              <S.Project key={project.id} index={index} top={top}>
                <S.ProjectLinks data-aos="fade-down" data-aos-delay="200">
                  {project.projectUrl && (
                    <S.ProjectLink href={project.projectUrl} target="blank">
                      <HiLink size={25} />
                    </S.ProjectLink>
                  )}

                  {project.repositoryUrl && (
                    <S.GithubLink target="blank" href={project.repositoryUrl}>
                      <FaGithub size={25} />
                    </S.GithubLink>
                  )}
                </S.ProjectLinks>

                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  style={{
                    width: "100%",
                    border: `1px solid ${theme.colors.shape}`,
                    borderRadius: "5px"
                  }}
                  pagination={{ clickable: true }}
                  centeredSlides
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  {images.map((image) => {
                    return (
                      <SwiperSlide key={image.id}>
                        <S.ProjectThumbnailWrapper>
                          <S.ProjectThumbnail
                            src={image.url}
                            layout="fill"
                            quality={100}
                            alt={project.heading}
                          />
                        </S.ProjectThumbnailWrapper>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>

                <S.ProjectInfos>
                  <S.ProjectHeading data-aos="fade-right" data-aos-delay="100">
                    {project.heading}
                  </S.ProjectHeading>

                  <S.ProjectAbstract data-aos="fade-right" data-aos-delay="100">
                    {project.abstract}
                  </S.ProjectAbstract>

                  <S.ProjectTechs>
                    {project.technologies.map((tech, index) => (
                      <div
                        data-aos="fade-up"
                        data-aos-delay={150 * index}
                        key={v4()}
                      >
                        <Tech tech={tech} />
                      </div>
                    ))}
                  </S.ProjectTechs>
                </S.ProjectInfos>
              </S.Project>
            )
          })}
        </S.Projects>
      </S.ProjectsContent>
    </S.ProjectsContainer>
  )
}
