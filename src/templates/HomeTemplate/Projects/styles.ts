import Image from "next/image"
import styled from "styled-components"

import theme from "../../../styles/theme"

export const ProjectsContainer = styled.section`
  width: 100vw;

  border-top: 1px solid ${({ theme }) => theme.colors.shape};

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.title};
  }
`

export const ProjectsContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;

  display: flex;
  gap: ${({ theme }) => theme.space["4"]};
  justify-content: space-between;

  padding-top: ${({ theme }) => theme.space["20"]};
  padding-bottom: ${({ theme }) => theme.space["20"]};

  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.space["10"]};
    padding-bottom: ${({ theme }) => theme.space["10"]};

    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};

    flex-direction: column;
  }
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  div {
    position: sticky;
    top: ${({ theme }) => theme.space["4"]};
  }
`

export const Subtitle = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
`

export const Projects = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["8"]};

  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const Project = styled.div<{
  index: number
  top: keyof typeof theme["space"]
}>`
  display: flex;
  flex-direction: column;
  position: relative;

  position: sticky;

  .NextJS {
    filter: invert(1);
  }

  .GraphCMS {
    filter: invert(0.9);
  }

  .ChakraUI {
    border-radius: 50%;
  }
`

export const ProjectThumbnailWrapper = styled.figure`
  width: 100%;
  position: relative;
  overflow: hidden;

  aspect-ratio: 16 / 9;

  background: #121214;
  background-image: linear-gradient(
    to right,
    #121214 0%,
    #171719 20%,
    #121214 40%,
    #121214 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const ProjectThumbnail = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`

export const ProjectInfos = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.space["4"]} 0;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["2"]};
`

export const ProjectHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`

export const ProjectAbstract = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 30px;
`

export const ProjectTechs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: ${({ theme }) => theme.space["2"]};

  margin-top: ${({ theme }) => theme.space["2"]};
`

export const ProjectTech = styled.li`
  background: ${({ theme }) => theme.colors.shape};

  padding: ${({ theme }) => theme.space["2"]} ${({ theme }) => theme.space["4"]};

  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["2"]};

  transition: all 0.2s ease-in-out;
`

export const ProjectTechIcon = styled(Image)``

export const ProjectTechLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const ProjectLinks = styled.div`
  z-index: 99;
  position: absolute;
  top: ${({ theme }) => theme.space["4"]};
  right: ${({ theme }) => theme.space["4"]};
  display: flex;
  gap: ${({ theme }) => theme.space["2"]};
`

export const GithubLink = styled.a`
  svg {
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const ProjectLink = styled.a`
  svg {
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
