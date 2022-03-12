import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;

  padding-top: ${({ theme }) => theme.space["20"]};
  padding-bottom: ${({ theme }) => theme.space["20"]};

  padding-right: ${({ theme }) => theme.space["4"]};
  padding-left: ${({ theme }) => theme.space["4"]};

  gap: ${({ theme }) => theme.space["4"]};
  border-top: 1px solid ${({ theme }) => theme.colors.shape};
`

export const ContentInfo = styled.div`
  display: flex;
  width: 50%;
  gap: ${({ theme }) => theme.space["2"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const ContentTitles = styled.aside`
  display: flex;
  flex-direction: column;
`

export const ContentSubTitle = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
`

export const ContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
