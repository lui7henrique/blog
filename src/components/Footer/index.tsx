import { useRouter } from "next/router"
import { footerContent } from "./content"
import { IconType } from "react-icons"
import { useCallback } from "react"

import * as S from "./styles"

type ExploreLinkProps = {
  href: string
  label: string
}

type SocialLink = {
  href?: string
  label: string
  icon: IconType
}

export const Footer = () => {
  const { locale } = useRouter()

  const { title, description, subDescription, home, social, copyright } =
    footerContent[locale as "pt-BR" | "en-US"]

  const ExploreLink = useCallback((props: ExploreLinkProps) => {
    const { href, label } = props

    return (
      <S.Link href={href}>
        <S.LinkLabel href={href}>{label}</S.LinkLabel>
      </S.Link>
    )
  }, [])

  const SocialLink = useCallback((props: SocialLink) => {
    const { href, label, icon: Icon } = props

    return href ? (
      <S.SocialLink href={href} target="blank">
        <Icon size={16} />
        <S.SocialLinkLabel>{label}</S.SocialLinkLabel>
      </S.SocialLink>
    ) : (
      <S.Social>
        <Icon size={16} />
        <S.SocialLinkLabel>{label}</S.SocialLinkLabel>
      </S.Social>
    )
  }, [])

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterSections>
          <S.FooterBasicInfo>
            <S.FooterTitle>{title}</S.FooterTitle>
            <S.FooterDescription>
              {description}{" "}
              <S.FooterSubDescription>{subDescription}</S.FooterSubDescription>
            </S.FooterDescription>

            <S.FooterCopyright>{copyright}</S.FooterCopyright>
          </S.FooterBasicInfo>

          <S.FooterHome>
            <S.FooterHomeTitle>{home.title}</S.FooterHomeTitle>
            {home.links.map((link) => (
              <ExploreLink
                key={JSON.stringify(link)}
                href={link.href}
                label={link.label}
              />
            ))}
          </S.FooterHome>

          <S.FooterSocial>
            <S.FooterSocialTitle>{social.title}</S.FooterSocialTitle>
            {social.links.map((link) => (
              <SocialLink
                key={JSON.stringify(link)}
                href={link?.href}
                label={link.label}
                icon={link.icon}
              />
            ))}
          </S.FooterSocial>
        </S.FooterSections>
      </S.FooterContainer>
    </S.Footer>
  )
}
