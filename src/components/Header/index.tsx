import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"

import * as S from "./styles"

type NavLinkProps = {
  href: string
  label: string
}

export const Header = () => {
  const { asPath } = useRouter()

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

  return (
    <S.Header>
      <S.Logo>lui7henrique</S.Logo>
      <S.Nav>
        <NavLink href="/" label="Ínicio" />
        <NavLink href="/blog" label="Blog" />
      </S.Nav>
    </S.Header>
  )
}
