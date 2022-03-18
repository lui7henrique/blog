import { Button } from "components/Button"
import { useDownload } from "hooks/useDownload"
import { useRouter } from "next/router"

import { heroContent } from "./content"
import * as S from "./styles"

export const HeroSection = () => {
  const { handleNavigate } = useDownload()
  const { locale } = useRouter()
  const content = heroContent[locale as "pt-BR" | "en-US"]

  return (
    <S.Container>
      <S.Article>
        <S.ArticleTitle data-aos="fade-right" data-aos-delay="0">
          {content.article.title}
        </S.ArticleTitle>
        <S.ArticleDescription data-aos="fade-right" data-aos-delay="200">
          {content.article.description}{" "}
          <span>{content.article.subDescription}</span>
        </S.ArticleDescription>
        <S.ArticleActions>
          <Button
            label={content.article.buttons[0].label}
            onClick={() => handleNavigate(content.article.buttons[0].link!)}
            data-aos="fade-right"
            data-aos-delay="400"
          />
          <Button
            label={content.article.buttons[1].label}
            backgroundColor="transparent"
            fontSize="lg"
            data-aos="fade-right"
            data-aos-delay="400"
          />
        </S.ArticleActions>
      </S.Article>
    </S.Container>
  )
}
