import styled from "styled-components"

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding: 0 ${({ theme }) => theme.space["4"]};
  margin: 0 auto;

  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.headerHeight})`};

  display: flex;
  align-items: center;
`

export const Article = styled.article`
  width: 50%;
`

export const ArticleTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["8xl"]};
  line-height: ${({ theme }) => theme.fontSizes["8xl"]};
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
  gap: ${({ theme }) => theme.space["8"]};
  margin-top: ${({ theme }) => theme.space["8"]};
`
