import Image from "next/image"
import styled from "styled-components"

export const ProjectsContainer = styled.section`
  width: 100vw;

  border-top: 1px solid ${({ theme }) => theme.colors.shape};
  border-bottom: 1px solid ${({ theme }) => theme.colors.shape};

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const ProjectsContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["4"]};

  padding-top: ${({ theme }) => theme.space["20"]};
  padding-bottom: ${({ theme }) => theme.space["20"]};

  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.space["10"]};
    padding-bottom: ${({ theme }) => theme.space["10"]};

    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};
  }
`

export const Project = styled.a`
  position: relative;
  display: flex;
`

export const ProjectTitles = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: sticky;
    top: ${({ theme }) => theme.space["4"]};
  }
`

export const ProjectsSubtitle = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
`

export const ProjectsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
`

export const ProjectThumbnailWrapper = styled.figure`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50vh;
  }
`

export const ProjectThumbnail = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`

export const ProjectAbstract = styled.p`
  border-top: 1px solid ${({ theme }) => theme.colors.shape};
  padding: ${({ theme }) => theme.space["8"]} ${({ theme }) => theme.space["4"]};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  position: absolute;
  bottom: 0;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background}80;
  backdrop-filter: blur(5px);

  padding-bottom: ${({ theme }) => theme.space["10"]};
`

export const GithubLink = styled.a`
  position: absolute;
  top: ${({ theme }) => theme.space["4"]};
  right: ${({ theme }) => theme.space["4"]};
  z-index: 99;
`
