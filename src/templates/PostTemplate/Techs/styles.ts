import { styled } from "styles"

export const PostsTech = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
})

export const PostTechsLabel = styled("sup", {
  color: "$gray100"
})

export const PostTechsList = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  gap: "$1",
  marginBottom: "$2"
})
