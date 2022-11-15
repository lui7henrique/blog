import styled, { keyframes } from "styled-components"

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 90vh;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  pointer-events: none;
`

const brightness = keyframes`
  0% {
    filter: brightness(0.8) blur(1px);
    -webkit-filter: brightness(0.8) blur(1px);
  }

  50% {
    filter: brightness(0.6) blur(1px);
    -webkit-filter: brightness(0.6) blur(1px);
  }

  100% {
    filter: brightness(0.8) blur(1px);
    -webkit-filter: brightness(0.8) blur(1px);
  }
`

export const VideoBanner = styled.video`
  width: 100%;
  height: 90vh;

  object-fit: cover;
  object-position: center;

  z-index: -1;
  position: absolute;

  animation-name: ${brightness};
  animation-duration: 16s;
  animation-iteration-count: infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const HeroContainer = styled.div`
  height: 90vh;
  position: relative;
`
