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
        <S.NavItem href={href} passHref active={isActive ? "true" : "false"}>
          {label}
        </S.NavItem>
      )
    },
    [asPath]
  )

  return (
    <>
      <S.Container>
        <S.Content>
          <Link href="/" passHref>
            <S.Logo>lui⚡️henrique</S.Logo>
            <S.LogoMobile>⚡️</S.LogoMobile>
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
          </S.Nav>
        </S.Content>

        <ButtonLanguage isPost={isPost} postSlug={postSlug} />
      </S.Container>
    </>
  )
}
