import { useMemo } from "react"

import * as S from "./styles"

export const AboutMe = () => {
  const sections = useMemo(
    () => [
      {
        title: "🤔 Who am I?",
        content:
          "I'm 19y brazilian software developer focused on front-end and mobile. I really enjoy sharing knowledge, so I often make <a href='/posts'>posts</a> here reporting something new that I learned or that I find interesting. Apart from software development, I really like playing games (mainly League of Legends), as well as really enjoying cinema."
      },
      {
        title: "🔥 What am I currently doing? ",
        content:
          "I'm currently working as a front-end and mobile developer in a <a href='https://www.linkedin.com/company/hubxp/' target='blank'>software house</a> from São paulo, Brazil. I develop amazing projects using wonderful technologies, such as <a href='https://reactjs.org/' target='_blank'>ReactJS</a>, <a href='https://reactnative.dev/' target='_blank'>ReactNative</a>, <a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a>, <a href='https://graphql.org/' target='_blank'>GraphQL</a> and others tech's of this ecosystem!"
      },
      {
        title: "🤝 How to contact me?",
        content:
          "<a href='https://www.linkedin.com/in/luiz-henrique7/' target='_blank'>Linkedin</a>, <a href='https://github.com/lui7henrique' target='_blank'>Github</a> or <a href='mailto:7henrique18@gmail.com' target='_blank'>E-mail</a>. I'm always open to new ideas and collaborations (hates are also welcome). If you want to contact me, please feel free to send me an email in <a href='mailto:7henrique18@gmail.com'>7henrique18@gmail.com</a>."
      }
    ],
    []
  )

  return (
    <S.Container id="about-me">
      <S.Content>
        <S.ContentInfo>
          <S.ContentTitles>
            <div>
              <S.ContentSubTitle data-aos="fade-right" data-aos-delay="200">
                My name&apos;s{" "}
              </S.ContentSubTitle>
              <S.ContentTitle data-aos="fade-right" data-aos-delay="100">
                Luiz Henrique
              </S.ContentTitle>
            </div>
          </S.ContentTitles>
        </S.ContentInfo>

        <S.ContentSections>
          {sections.map((section, index) => {
            return (
              <S.ContentSection
                key={section.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <S.ContentSectionTitle>{section.title}</S.ContentSectionTitle>
                <S.ContentSectionDescription
                  dangerouslySetInnerHTML={{
                    __html: section.content
                  }}
                ></S.ContentSectionDescription>
              </S.ContentSection>
            )
          })}
        </S.ContentSections>
      </S.Content>
    </S.Container>
  )
}
