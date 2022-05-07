import NextLink from "next/link"
import styled from "styled-components"

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.shape};
`

export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;

  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};

  padding-top: ${({ theme }) => theme.space["20"]};
  padding-bottom: ${({ theme }) => theme.space["20"]};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["16"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space["8"]};

    padding-top: ${({ theme }) => theme.space["10"]};
    padding-bottom: ${({ theme }) => theme.space["10"]};

    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};
  }
`

export const FooterSections = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.space["16"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space["8"]};
  }
`

export const FooterBasicInfo = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`

export const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};

  line-height: 32px;
`

export const FooterSubDescription = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-decoration: line-through;
`

export const FooterHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["2"]};

  width: 100%;
`

export const FooterHomeTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`

export const Link = styled(NextLink)``

export const LinkLabel = styled.a`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const FooterBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["2"]};

  width: 100%;
`

export const FooterBlogTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["2"]};

  width: 100%;
`

export const FooterSocialTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["2"]};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["2"]};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const SocialLinkLabel = styled.span``

export const FooterCopyright = styled.div`
  opacity: 0.5;
`
