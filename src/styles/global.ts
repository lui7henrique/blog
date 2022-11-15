import { createGlobalStyle } from "styled-components"
import { globalCss } from "."

export const GlobalStyles = createGlobalStyle`


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
    scroll-behavior: smooth !important;
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

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$black",
    color: "$gray300",
    overflowX: "hidden"
  },

  "body, input, textarea, button": {
    fontFamily: "Space Grotesk",
    fontWeight: 400
  },

  "h1, h2, h3, h4, h5, h6": {
    color: "white"
  },

  a: {
    textDecoration: "none",
    color: "$gray300"
  },

  p: {
    color: "$gray300"
  }
})
