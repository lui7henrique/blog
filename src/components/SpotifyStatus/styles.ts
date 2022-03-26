import styled, { css } from "styled-components"

export const SpotifyStatus = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h6`
  font-weight: normal;
`

export const ActiveStatus = styled.h5`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`

export const ActiveStatusArtistsContainer = styled.div`
  width: 25ch;
  white-space: nowrap;
  overflow: hidden;
  font-size: 12px;

  position: relative;

  &:before {
    content: "";
    position: absolute;
    right: 0;

    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    width: 50px;
  }
`

export const ActiveStatusArtists = styled.p<{
  hasFadeRight: boolean
}>`
 ${({ hasFadeRight }) =>
   hasFadeRight &&
   css`
     &:hover {
       animation: fadeRight 5s linear;
     }
   `})}

  @keyframes fadeRight {
    0% {
      margin-left: 0;
    }

    50% {
      margin-left: -100%;
    }

    100% {
      margin-left: 0;
    }
  }
`
