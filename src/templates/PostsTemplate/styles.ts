import styled from "styled-components"

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  pointer-events: none;
`

export const VideoBanner = styled.video`
  width: 100%;
  height: 100vh;
  filter: brightness(1);

  object-fit: cover;
  object-position: center;

  z-index: -1;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`
