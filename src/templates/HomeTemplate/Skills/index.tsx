import { ProgressBar } from "components/ProgressBar"
import { useRouter } from "next/router"
import { useState } from "react"
import { useTheme } from "styled-components"

import { skillsContent } from "./content"
import * as S from "./styles"

export const Skills = () => {
  const theme = useTheme()
  const { locale } = useRouter()

  const content = skillsContent[locale as "pt-BR" | "en-US"]

  const [activeSkill, setActiveSkill] = useState<typeof content.skills[0]>()

  return (
    <S.Container id="skills">
      <S.Content>
        <S.Skills>
          {content.skills.map((skill, index) => {
            return (
              <>
                <S.Skill
                  key={skill.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={
                    skill === activeSkill
                      ? () => setActiveSkill(undefined)
                      : () => setActiveSkill(skill)
                  }
                >
                  <S.SkillAllInfos>
                    <skill.icon size={25} color={theme.colors.title} />
                    <S.SkillBasicInfos>
                      <S.SkillTitle>{skill.title}</S.SkillTitle>
                      <ProgressBar total={10} value={skill.score} />
                    </S.SkillBasicInfos>
                  </S.SkillAllInfos>
                  {skill.content && (
                    <S.SkillButtonIcon isOpen={skill === activeSkill} />
                  )}
                </S.Skill>
                {skill.content && (
                  <S.SkillsStuff isOpen={skill === activeSkill}>
                    {skill.content}
                  </S.SkillsStuff>
                )}
              </>
            )
          })}
        </S.Skills>

        <S.Aside>
          <S.ContentTitles>
            <div>
              <S.ContentSubTitle data-aos="fade-left" data-aos-delay="200">
                {content.subtitle}
              </S.ContentSubTitle>
              <S.ContentTitle data-aos="fade-left" data-aos-delay="100">
                {content.title}
              </S.ContentTitle>
            </div>
          </S.ContentTitles>
        </S.Aside>
      </S.Content>
    </S.Container>
  )
}
