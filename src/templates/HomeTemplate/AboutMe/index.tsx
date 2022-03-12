import Link from "next/image"
import { useMemo } from "react"

import * as S from "./styles"

export const AboutMe = () => {
  const sections = useMemo(
    () => [
      {
        title: "🤔 Who am I?",
        content:
          "I'm a software developer focused on front-end and mobile, but studying back-end. I really enjoy sharing knowledge, so I often make posts here reporting something new that I learned or that I find interesting. Apart from software development, I really like playing games (mainly league of legends), as well as really enjoying cinema."
      },
      {
        title: "🔥 What am I currently doing? ",
        content:
          "I'm currently working as a front end and mobile developer in a software house  from São paulo, Brazil. I develop amazing projects using wonderful technologies, such as ReactJS, ReactNative, Typescript, GraphQL, and others tech's of this ecosystem!"
      },
      {
        title: "🤝 How to contact me?",
        content:
          "Linkedin, Twitter, Github, E-mail, etc. I'm always open to new ideas and collaborations. If you want to contact me, please feel free to send me an email 7henrique18@gmail.com"
      }
    ],
    []
  )

  return (
    <S.Container>
      <S.Content>
        <S.ContentInfo>
          <S.ContentTitles>
            <S.ContentSubTitle>My name&apos;s </S.ContentSubTitle>
            <S.ContentTitle>Luiz Henrique</S.ContentTitle>
          </S.ContentTitles>
        </S.ContentInfo>

        <S.ContentSections>
          {sections.map((section) => {
            return (
              <S.ContentSection key={section.title}>
                <S.ContentSectionTitle>{section.title}</S.ContentSectionTitle>
                <S.ContentSectionDescription>
                  {section.content}
                </S.ContentSectionDescription>
              </S.ContentSection>
            )
          })}
        </S.ContentSections>
      </S.Content>
    </S.Container>
  )
}
