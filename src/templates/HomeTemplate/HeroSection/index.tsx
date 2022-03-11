import { Button } from "components/Button"

import * as S from "./styles"

export const HeroSection = () => {
  return (
    <S.Container>
      <S.Article>
        <S.ArticleTitle>Hello 🌍!</S.ArticleTitle>
        <S.ArticleDescription>
          🧑‍💻 I'm a Front-end developer in love with making beautiful and
          useful things! <span>(sometimes)</span>
        </S.ArticleDescription>
        <S.ArticleActions>
          <Button label="Know more" />
          <Button
            label="Read my posts"
            backgroundColor="transparent"
            fontSize="lg"
          />
        </S.ArticleActions>
      </S.Article>
    </S.Container>
  )
}
