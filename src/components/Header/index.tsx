import { ButtonLanguage } from "components/ButtonLanguage"
import { IconButton } from "components/IconButton"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

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

        <S.Buttons>
          <ButtonLanguage isPost={isPost} postSlug={postSlug} />

          <IconButton
            variant="unstyled"
            icon={<FaGithub size={20} color="#fff" />}
            href="https://github.com/lui7henrique"
            blank
          />

          <IconButton
            variant="unstyled"
            icon={<FaLinkedin size={20} color="#fff" />}
            href="https://www.linkedin.com/in/luiz-henrique7/"
            blank
          />
        </S.Buttons>
      </S.Container>
    </>
  )
}
