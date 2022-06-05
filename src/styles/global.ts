import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  html, body, #__next {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Space Grotesk', serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    color: ${({ theme }) => theme.colors.text}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0px;
    width: 5px;
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`
