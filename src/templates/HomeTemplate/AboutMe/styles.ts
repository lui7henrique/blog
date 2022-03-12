import styled from "styled-components"

export const Container = styled.section`
  width: 100vw;
  padding-top: ${({ theme }) => theme.space["20"]};
  padding-bottom: ${({ theme }) => theme.space["20"]};

  padding-right: ${({ theme }) => theme.space["4"]};
  padding-left: ${({ theme }) => theme.space["4"]};

  background: linear-gradient(
    90deg,
    rgba(20, 9, 48, 1) 0%,
    rgba(45, 22, 107, 1) 100%
  );

  /* background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 45%,
    rgba(20, 9, 48, 1) 100%
  ); */
  /* background: ${({ theme }) => theme.colors.shape}; */

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.space["10"]};
    padding-bottom: ${({ theme }) => theme.space["10"]};
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;

  display: flex;
  gap: ${({ theme }) => theme.space["4"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
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

export const ContentSections = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space["12"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const ContentSection = styled.div``

export const ContentSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`

export const ContentSectionDescription = styled.div`
  line-height: 30px;
  margin-top: ${({ theme }) => theme.space["4"]};

  a {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary_dark};
    }
  }
`
