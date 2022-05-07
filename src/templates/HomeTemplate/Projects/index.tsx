import { GetProjectsQuery } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { FaGithub } from "react-icons/fa"
import { useTheme } from "styled-components"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { v4 } from "uuid"

import { projectsContent } from "./content"
import * as S from "./styles"

import "swiper/css"
import "swiper/css/pagination"
import { useCallback } from "react"
import Link from "next/link"

type ProjectsProps = {
  projects: GetProjectsQuery["projects"]
}

type Technologies = GetProjectsQuery["projects"][0]["technologies"][0]

export const Projects = (props: ProjectsProps) => {
  const { projects } = props

  const theme = useTheme()
  const { locale } = useRouter()

  const {
    title,
    subtitle,
    url: { label, link }
  } = projectsContent[locale as "pt-BR" | "en-US"]

  const getIconByTech = useCallback((tech: Technologies) => {
    const icons: any = {
      ReactJS: "react-js",
      NodeJS: "node-js",
      GraphQL: "graphql",
      StyledComponents: "styled-components",
      NextJS: "next-js",
      GraphCMS: "graph-cms",
      Javascript: "javascript",
      Typescript: "typescript",
      ChakraUI: "chakra-ui",
      IMDb: "imbd",
      APOD: "nasa",
      Firebase: "firebase"
    }

    return icons[tech] ? icons[tech] : "react-js"
  }, [])

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
                {project.repositoryUrl && (
                  <S.GithubLink target="blank" href={project.repositoryUrl}>
                    <FaGithub size={25} />
                  </S.GithubLink>
                )}

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

                  {project.projectUrl && (
                    <S.ProjectUrl data-aos="fade-right" data-aos-delay="120">
                      {label}
                      <Link
                        href={project.projectUrl}
                        aria-label={project.heading}
                      >
                        <a target="_blank" aria-label={project.heading}>
                          {" "}
                          {link}
                        </a>
                      </Link>
                    </S.ProjectUrl>
                  )}

                  <S.ProjectTechs>
                    {project.technologies.map((tech, index) => (
                      <S.ProjectTech
                        key={v4()}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                      >
                        <S.ProjectTechIcon
                          src={`/logos/${getIconByTech(tech)}.png`}
                          width={16}
                          height={16}
                          className={tech}
                          alt={tech}
                        />
                        <S.ProjectTechLabel>{tech}</S.ProjectTechLabel>
                      </S.ProjectTech>
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
