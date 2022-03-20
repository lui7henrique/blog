import styled from "styled-components"

export const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
`

export const FakeBox = styled.div``

export const VideoBanner = styled.video`
  width: 100%;
  height: 100%;
  filter: brightness(0.3);

  object-fit: cover;
  object-position: 30% 0;

  z-index: -1;
  position: absolute;
  right: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    object-position: 70% 0;
  }
`

// export const BannerWrapper = styled.div`
//   width: 50%;
//   height: 100%;

//   background-image: url("/rocket.jpg");
//   background-size: contain;
//   background-position: 80%;
//   background-repeat: no-repeat;
//   background-attachment: fixed;

//   position: absolute;
//   right: 0;
//   z-index: -1;

//   @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
//     width: 100%;
//   }
// `
