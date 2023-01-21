import { Categories } from "graphql/generated/graphql"
import { usePostsCategories } from "hooks/usePostsCategories"
import { useRouter } from "next/router"
import { useMemo } from "react"

import * as S from "./styles"

type PostsCategoriesProps = {
  categories: Categories[]
}

export const PostsCategories = (props: PostsCategoriesProps) => {
  const { getIconByCategory, translateCategory } = usePostsCategories()
  const { asPath, locale } = useRouter()

  const { categories } = props

  const isAllPosts = useMemo(() => asPath === "/posts", [asPath])

  return (
    <S.Aside>
      <S.AsideContent>
        <S.AsideButton href="/posts" active={isAllPosts}>
          <S.AsideButtonIcon
            src={`/logos/categories/general.png`}
            width={24}
            height={24}
            className="general"
            alt="general"
          />

          {locale === "pt-BR" ? "Tudo" : "All"}
        </S.AsideButton>

        {categories.map((category) => {
          const isActive =
            asPath === `/posts/category/${category.toLowerCase()}`

          const label =
            locale === "pt-BR" ? translateCategory(category) : category

          return (
            <S.AsideButton
              key={category}
              href={`/posts/category/${category.toLowerCase()}`}
              active={isActive}
            >
              <S.AsideButtonIcon
                src={`/logos/categories/${getIconByCategory(category)}.png`}
                width={24}
                height={24}
                className={category}
                alt={category}
              />

              {label}
            </S.AsideButton>
          )
        })}
      </S.AsideContent>
    </S.Aside>
  )
}
