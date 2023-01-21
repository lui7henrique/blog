import { styled } from "styles"

export const Limiter = styled("div", {
  width: "100%",

  maxWidth: "$280",
  margin: "0 auto",

  paddingRight: "$10",
  paddingLeft: "$10",

  "@xl": {
    paddingRight: "$4",
    paddingLeft: "$4"
  }
})
