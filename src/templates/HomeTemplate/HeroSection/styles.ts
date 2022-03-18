import styled from "styled-components"

export const Container = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};
  margin: 0 auto;

  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.headerHeight})`};

  display: flex;
  align-items: center;
`

export const Article = styled.article`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const ArticleTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  line-height: ${({ theme }) => theme.fontSizes["7xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
    line-height: ${({ theme }) => theme.fontSizes["6xl"]};
  }
`

export const ArticleDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-decoration: line-through;
  }
`

export const ArticleActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space["4"]};
  margin-top: ${({ theme }) => theme.space["4"]};
`
