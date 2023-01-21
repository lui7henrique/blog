import Image from "next/image"
import { styled } from "styles"

export const PostAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
})

export const PostAuthorValue = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2"
})

export const PostAuthorImageWrapper = styled("figure", {
  position: "relative",

  width: "$16",
  aspectRatio: 1 / 1,

  overflow: "hidden",
  borderRadius: "$full"
})

export const PostAuthorImage = styled(Image, {
  pointerEvents: "none"
})

export const PostAuthorInfos = styled("div", {
  display: "flex",
  flexDirection: "column"
})

export const PostAuthorName = styled("h4", {
  color: "$gray50"
})

export const PostAuthorSocialMedia = styled("a", {
  color: "$gray500",
  fontSize: "$sm"
})
