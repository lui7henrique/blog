import { Button } from "components/Button"
import { useDownload } from "hooks/useDownload"

import * as S from "./styles"

export const HeroSection = () => {
  const { handleNavigate } = useDownload()

  return (
    <S.Container>
      <S.Article>
        <S.ArticleTitle data-aos="fade-right" data-aos-delay="0">
          Hello World!
        </S.ArticleTitle>
        <S.ArticleDescription data-aos="fade-right" data-aos-delay="200">
          🧑‍💻 I&apos;m a Front-end developer in love with making beautiful and
          useful things! <span>(sometimes 🤣)</span>
        </S.ArticleDescription>
        <S.ArticleActions>
          <Button
            label="Know more"
            onClick={() => handleNavigate("#about-me")}
            data-aos="fade-right"
            data-aos-delay="400"
          />
          <Button
            label="Read my posts"
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
