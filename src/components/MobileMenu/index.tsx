import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useEffect, useCallback } from "react"

import { headerContent } from "../Header/content"
import * as S from "./styles"

type MobileMenuProps = {
  isOpen: boolean
  handleClose: () => void
  isPost?: boolean
  postSlug?: string
}

type ActiveLinkProps = {
  href: string
  label: string
  subLinks?: Array<{
    href: string
    label: string
  }>
}

export const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen, handleClose } = props
  const { locale, asPath } = useRouter()

  const { nav } = headerContent[locale as "pt-BR" | "en-US"]

  const ActiveLink = useCallback(
    (props: ActiveLinkProps) => {
      const { href, label, subLinks } = props

      let isActive =
        asPath.split("#")[0] === href ||
        asPath.split("/")[1] === href.replace("/", "")

      return (
        <>
          <S.ActiveLink href={href}>
            <S.ActiveLinkLink isActive={isActive}>
              <S.ActiveLinkLabel>{label}</S.ActiveLinkLabel>
            </S.ActiveLinkLink>
          </S.ActiveLink>

          <S.SubLinks>
            {subLinks?.map((subLink) => (
              <S.SubLink href={subLink.href} key={JSON.stringify(subLink)}>
                <S.SubLinkLink onClick={handleClose}>
                  <S.SubLinkLabel>{subLink.label}</S.SubLinkLabel>
                </S.SubLinkLink>
              </S.SubLink>
            ))}
          </S.SubLinks>
        </>
      )
    },
    [asPath, handleClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isOpen, asPath])

  return (
    <S.Container isOpen={isOpen}>
      <S.Content>
        <S.Header>
          <Link href="/" passHref>
            <S.Profile onClick={handleClose}>
              <S.ProfileImageWrapper>
                <S.ProfileImage
                  src="https://github.com/lui7henrique.png"
                  width={100}
                  height={100}
                />
              </S.ProfileImageWrapper>
              <S.ProfileTexts>
                <S.ProfileTitle>lui⚡️henrique</S.ProfileTitle>
                <S.ProfileDescription>
                  {locale === "pt-BR"
                    ? "Desenvolvedor Front-end e Mobile."
                    : "Front-end and Mobile developer."}
                </S.ProfileDescription>
              </S.ProfileTexts>
            </S.Profile>
          </Link>

          <S.CloseButton onClick={handleClose} />
        </S.Header>

        <S.Nav>
          {nav.map((item) => (
            <ActiveLink
              href={item.href}
              label={item.label}
              subLinks={item.subLinks}
              key={item.label}
            />
          ))}
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}
