import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import { aboutMeContent } from "./content"
import * as S from "./styles"

export const AboutMe = () => {
  const { locale, locales, defaultLocale } = useRouter()
  const content = aboutMeContent[locale as "pt-BR" | "en-US"]

  return (
    <S.Container id="about-me">
      <S.Content>
        <S.ContentInfo>
          <S.ContentTitles>
            <div>
              <S.ContentSubTitle data-aos="fade-right" data-aos-delay="200">
                {content.subtitle}
              </S.ContentSubTitle>
              <S.ContentTitle data-aos="fade-right" data-aos-delay="100">
                {content.title}
              </S.ContentTitle>
            </div>
          </S.ContentTitles>
        </S.ContentInfo>

        <S.ContentSections>
          {content.sections.map((section, index) => {
            return (
              <S.ContentSection
                key={section.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <S.ContentSectionTitle>{section.title}</S.ContentSectionTitle>
                <S.ContentSectionDescription
                  dangerouslySetInnerHTML={{
                    __html: section.description
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { context }
  }
}
