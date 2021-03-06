import { ButtonLanguage } from "components/ButtonLanguage"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"

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
  const { asPath, locale } = useRouter()
  const content = headerContent[locale as "pt-BR" | "en-US"]

  const NavLink = useCallback(
    ({ href, label }: NavLinkProps) => {
      let isActive =
        asPath.split("#")[0] === href ||
        asPath.split("/")[1] === href.replace("/", "")

      return (
        <Link href={href} passHref>
          <S.NavItem isActive={isActive}>{label}</S.NavItem>
        </Link>
      )
    },
    [asPath]
  )

  return (
    <>
      <S.Header>
        <S.Principal>
          <Link href="/" passHref>
            <a>
              <S.Logo>lui⚡️henrique</S.Logo>
              <S.LogoMobile>⚡️</S.LogoMobile>
            </a>
          </Link>
        </S.Principal>

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
          <ButtonLanguage isPost={isPost} postSlug={postSlug} />
        </S.Nav>
      </S.Header>
    </>
  )
}
