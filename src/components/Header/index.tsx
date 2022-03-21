import { Button } from "components/Button"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"
import { FaLanguage } from "react-icons/fa"

import { headerContent } from "./content"
import * as S from "./styles"

type HeaderProps = {
  isPost?: boolean
  postSlug?: string
}

type NavLinkProps = {
  href: string
  label: string
}

export const Header = ({ isPost, postSlug }: HeaderProps) => {
  const { asPath, push, locale } = useRouter()
  const content = headerContent[locale as "pt-BR" | "en-US"]

  const NavLink = useCallback(
    ({ href, label }: NavLinkProps) => {
      let isActive = href === asPath

      return (
        <Link href={href} passHref>
          <S.NavItem isActive={isActive}>{label}</S.NavItem>
        </Link>
      )
    },
    [asPath]
  )

  const handleChangeLocale = async (locale: "pt-BR" | "en-US") => {
    if (isPost) {
      push(`/posts/${postSlug}`, `/posts/${postSlug}`, { locale: locale })
      localStorage.setItem("locale", locale)

      return
    }

    localStorage.setItem("locale", locale)
    push(asPath, asPath, { locale: locale })
  }

  return (
    <S.Header>
      <Link href="/" passHref>
        <a>
          <S.Logo>lui⚡️henrique</S.Logo>
          <S.LogoMobile>⚡️</S.LogoMobile>
        </a>
      </Link>

      <S.Nav>
        {content.nav.map((item) => {
          return (
            <NavLink
              key={JSON.stringify(item)}
              href={item.href}
              label={item.label}
            />
          )
        })}

        <Button
          label={locale! === "en-US" ? "English" : "Português"}
          onClick={() =>
            handleChangeLocale(locale === "pt-BR" ? "en-US" : "pt-BR")
          }
          fontSize="sm"
          rightIcon={FaLanguage}
        />

        {/* <Button label="Contact-me" borderRadius="25px" /> */}
      </S.Nav>
    </S.Header>
  )
}
