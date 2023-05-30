import { globalCss } from "."

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0
  },

  "html, body, #__next": {
    height: "100%",
    scrollBehavior: "smooth !important"
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "var(--colors-gray900)",
    color: "var(--colors-gray300)",
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

  // "body::-webkit-scrollbar": {
  //   width: "3px"
  // },

  // "body::-webkit-scrollbar-track": {
  //   background: "$gray900"
  // },

  // "body::-webkit-scrollbar-thumb": {
  //   backgroundColor: "$gray500",
  //   borderRadius: "0px"
  // }
})
