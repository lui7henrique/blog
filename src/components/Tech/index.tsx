import { useCallback } from "react"
import * as S from "./styles"

type TechProps = {
  tech: string
  rounded?: boolean
}

export const Tech = (props: TechProps) => {
  const { tech, rounded = true } = props

  const getIconByTech = useCallback((tech: string) => {
    const icons: Record<string, string> = {
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
      Firebase: "firebase",

      // fallback
      General: "general",
      Geral: "general"
    }

    return icons[tech] ? icons[tech] : "react-js"
  }, [])

  return (
    <S.ProjectTech rounded={rounded}>
      <S.ProjectTechIcon
        src={`/logos/${getIconByTech(tech)}.png`}
        width={16}
        height={16}
        className={tech}
        alt={tech}
      />
      <S.ProjectTechLabel>{tech}</S.ProjectTechLabel>
    </S.ProjectTech>
  )
}
