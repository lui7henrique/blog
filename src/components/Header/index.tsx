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
      <Link href="/" passHref>
        <a>
          <S.Logo>lui⚡️henrique</S.Logo>
        </a>
      </Link>

      <S.Nav>
        <NavLink href="/" label="Home" />
        <NavLink href="/posts" label="Posts" />
        {/* <Button label="Contact-me" borderRadius="25px" /> */}
      </S.Nav>
    </S.Header>
  )
}
