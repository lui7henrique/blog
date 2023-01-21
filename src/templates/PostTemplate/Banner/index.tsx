import { format } from "date-fns"
import pt from "date-fns/locale/pt"
import { Categories } from "graphql/generated/graphql"
import { usePostsCategories } from "hooks/usePostsCategories"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { FiChevronLeft } from "react-icons/fi"

import * as S from "./styles"

type BannerProps = {
  categories: Categories[]
  heading: string
  updatedAt: string
}

export const Banner = (props: BannerProps) => {
  const { categories, heading, updatedAt } = props

  const { locale, back } = useRouter()
  const { translateCategory } = usePostsCategories()

  const formatDateByLocale = useMemo(() => {
    if (locale === "pt-BR") {
      return format(new Date(updatedAt), "EEEE, dd 'de' MMMM 'de' yyyy", {
        locale: pt
      })
    }

    return format(new Date(updatedAt), "EEEE, MMMM dd, yyyy")
  }, [locale, updatedAt])

  const category = useMemo(
    () =>
      locale === "pt-BR" ? translateCategory(categories[0]) : categories[0],
    [categories, locale, translateCategory]
  )

  return (
    <S.BannerContainer>
      <S.BannerContent>
        <S.Back onClick={back}>
          <FiChevronLeft size={16} /> {locale === "pt-BR" ? "Voltar" : "Back"}
        </S.Back>

        <S.BannerInfos>
          <S.BannerInfosHeader>
            <S.BannerCategory>{category}</S.BannerCategory>
            <S.BannerTime>{formatDateByLocale}</S.BannerTime>
          </S.BannerInfosHeader>
          <S.BannerTitle>{heading}</S.BannerTitle>
        </S.BannerInfos>
      </S.BannerContent>
    </S.BannerContainer>
  )
}
