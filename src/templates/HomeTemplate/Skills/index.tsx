import { ProgressBar } from "components/ProgressBar"
import { useMemo, useState } from "react"
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiGraphql
} from "react-icons/si"
import { useTheme } from "styled-components"

import * as S from "./styles"

export const Skills = () => {
  const theme = useTheme()

  const skills = useMemo(
    () => [
      {
        name: "HTML5",
        icon: SiHtml5,
        score: 9
      },
      {
        name: "CSS3",
        icon: SiCss3,
        score: 9
      },
      {
        name: "Javascript",
        icon: SiJavascript,
        score: 9
      },
      {
        name: "ReactJS",
        icon: SiReact,
        score: 9
      },
      {
        name: "ReactNative",
        icon: SiReact,
        score: 8
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        score: 7
      },
      {
        name: "NodeJS",
        icon: SiNodedotjs,
        score: 7
      }
    ],
    []
  )

  const [activeSkill, setActiveSkill] = useState(
    skills.find((sk) => sk.name === "ReactJS")
  )

  return (
    <S.Container>
      <S.Content>
        <S.Skills>
          {skills.map((skill, index) => {
            return (
              <>
                <S.Skill
                  key={JSON.stringify(skill)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => setActiveSkill(skill)}
                >
                  <S.SkillAllInfos>
                    <skill.icon size={25} color={theme.colors.title} />
                    <S.SkillBasicInfos>
                      <S.SkillName>{skill.name}</S.SkillName>
                      <ProgressBar total={10} value={skill.score} />
                    </S.SkillBasicInfos>
                  </S.SkillAllInfos>
                  <S.SkillButtonIcon isOpen={skill === activeSkill} />
                </S.Skill>
                <S.SkillsStuff isOpen={skill === activeSkill}></S.SkillsStuff>
              </>
            )
          })}
        </S.Skills>
        <S.ContentInfo>
          <S.ContentTitles>
            <S.ContentSubTitle data-aos="fade-left" data-aos-delay="200">
              My current
            </S.ContentSubTitle>
            <S.ContentTitle data-aos="fade-left" data-aos-delay="100">
              Skills
            </S.ContentTitle>
          </S.ContentTitles>
        </S.ContentInfo>
      </S.Content>
    </S.Container>
  )
}
