import styled from "styled-components"

export const HeroContainer = styled.div`
  height: 100vh;
`

export const FakeBox = styled.div``

export const BannerWrapper = styled.div`
  width: 50%;
  height: 100%;

  background-image: url("/banner.jpg");
  background-size: contain;
  background-position: 80%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: fixed;
  right: 0;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`
