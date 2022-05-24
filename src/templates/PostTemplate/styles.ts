import Image from "next/image"
import styled from "styled-components"

export const Banner = styled.div<{
  backgroundImage: string
}>`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.3) 110%
    ),
    url(${(props) => props.backgroundImage});

  margin-top: -${({ theme }) => theme.sizes.headerHeight};
  /* background-image: url(${(props) => props.backgroundImage}); */
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 80vh;

  z-index: -1;
`

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;

  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};
  padding-bottom: ${({ theme }) => theme.space["10"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};
  }
`

export const PostInfos = styled.div`
  margin-top: ${({ theme }) => theme.space["10"]};
`

export const PostHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
`

export const BasicInfos = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space["2"]};
`

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["2"]};
  border-right: 1px solid ${({ theme }) => theme.colors.shape};
  padding-right: ${({ theme }) => theme.space["4"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border: none;
  }
`

export const AuthorName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`

export const AuthorImageWrapper = styled.figure`
  width: ${({ theme }) => theme.space["10"]};
  height: ${({ theme }) => theme.space["10"]};

  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

export const AuthorImage = styled(Image)``

export const PostDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["2"]};
  padding: 0 ${({ theme }) => theme.space["4"]};

  border-right: 1px solid ${({ theme }) => theme.colors.shape};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const PostDate = styled.sup``

export const PostTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["2"]};
  padding: 0 ${({ theme }) => theme.space["4"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const PostTime = styled.sup``

export const PostContentContainer = styled.div``

export const PostContent = styled.div`
  line-height: 1.8;

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    margin-bottom: ${({ theme }) => theme.space["4"]};
  }

  h1,
  h2 {
    margin: ${({ theme }) => theme.space["2"]} 0;
  }

  ul,
  ol {
    padding: ${({ theme }) => theme.space["4"]}
      ${({ theme }) => theme.space["8"]};
  }

  code {
    font-family: MyFancyCustomFont, monospace;
    font-size: inherit;
  }

  p > code,
  li > code,
  dd > code,
  td > code {
    background: #ffeff0;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.secondary};
    padding: ${({ theme }) => theme.space["2"]}
      ${({ theme }) => theme.space["4"]};
    margin: ${({ theme }) => theme.space["4"]} 0;

    font-style: italic;
  }
`
