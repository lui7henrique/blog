import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"

import * as S from "./styles"

type NavLinkProps = {
  href: string
  label: string
}

export const Header = () => {
  const { asPath, locale, locales, defaultLocale, push } = useRouter()

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

  const handleChangeLocale = useCallback(
    (locale) => {
      push(asPath, asPath, { locale: locale })
    },
    [asPath, push]
  )

  return (
    <S.Header>
      <Link href="/" passHref>
        <a>
          <S.Logo>lui⚡️henrique</S.Logo>
        </a>
      </Link>

      <S.Nav>
        <NavLink href="/" label="Home" />
        <NavLink href="/posts" label="Posts" />

        <button onClick={() => handleChangeLocale("en-US")}>en-US</button>
        <button onClick={() => handleChangeLocale("pt-BR")}>pt-BR</button>
        {/* <Button label="Contact-me" borderRadius="25px" /> */}
      </S.Nav>
    </S.Header>
  )
}
