import { useRouter } from "next/router"
import { footerContent } from "./content"
import { IconType } from "react-icons"
import { useCallback } from "react"

import { GetMinimalPostsQuery } from "graphql/generated/graphql"

import * as S from "./styles"

type FooterProps = {
  posts: GetMinimalPostsQuery["posts"]
}

type ExploreLinkProps = {
  href: string
  label: string
}

type SocialLink = {
  href?: string
  label: string
  icon: IconType
}

export const Footer = (props: FooterProps) => {
  const { locale } = useRouter()

  const { title, description, subDescription, home, social, copyright } =
    footerContent[locale as "pt-BR" | "en-US"]

  const { posts } = props

  const ExploreLink = useCallback((props: ExploreLinkProps) => {
    const { href, label } = props

    return (
      <S.Link href={href}>
        <S.LinkLabel>• {label}</S.LinkLabel>
      </S.Link>
    )
  }, [])

  const SocialLink = useCallback((props: SocialLink) => {
    const { href, label, icon: Icon } = props

    return (
      <S.SocialLink href={href} target="blank">
        <Icon size={16} />
        <S.SocialLinkLabel>{label}</S.SocialLinkLabel>
      </S.SocialLink>
    )
  }, [])

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterSections>
          <S.FooterBasicInfo data-aos="fade-up" data-aos-delay="100">
            <S.FooterTitle>{title}</S.FooterTitle>
            <S.FooterDescription>
              {description}{" "}
              <S.FooterSubDescription>{subDescription}</S.FooterSubDescription>
            </S.FooterDescription>
          </S.FooterBasicInfo>

          <S.FooterHome data-aos="fade-up" data-aos-delay="200">
            <S.FooterHomeTitle>{home.title}</S.FooterHomeTitle>
            {home.links.map((link) => (
              <ExploreLink
                key={JSON.stringify(link)}
                href={link.href}
                label={link.label}
              />
            ))}
          </S.FooterHome>

          {posts && !!posts.length && (
            <S.FooterBlog data-aos="fade-up" data-aos-delay="300">
              <S.FooterBlogTitle>Posts</S.FooterBlogTitle>
              {posts.map((post) => (
                <ExploreLink
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  label={post.heading}
                />
              ))}
            </S.FooterBlog>
          )}

          <S.FooterSocial data-aos="fade-up" data-aos-delay="400">
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

        <S.FooterCopyright data-aos="fade-up" data-aos-delay="500">
          {copyright}
        </S.FooterCopyright>
      </S.FooterContainer>
    </S.Footer>
  )
}
