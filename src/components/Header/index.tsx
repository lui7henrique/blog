import { ButtonLanguage } from "components/ButtonLanguage"
import { MobileMenu } from "components/MobileMenu"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback, useState } from "react"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

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

  const handleClose = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      <S.Header>
        <S.Principal>
          <Link href="/" passHref>
            <a>
              <S.Logo>lui⚡️henrique</S.Logo>
            </a>
          </Link>

          {/* TODO */}
          {/* <SpotifyStatus /> */}
          <S.Menu
            onClick={() =>
              setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
            }
          />
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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleClose={handleClose}
        isPost={isPost}
        postSlug={postSlug}
      />
    </>
  )
}
