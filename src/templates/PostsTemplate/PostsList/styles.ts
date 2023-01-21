import Image from "next/image"
import Link from "next/link"
import { styled } from "styles"

export const Main = styled("main", {
  padding: "$10 0 0 $10",

  borderLeftWidth: "1px",
  borderLeftColor: "$gray800",
  borderLeftStyle: "solid"
})

export const PostsListHeader = styled("section", {
  borderBottomColor: "$gray800",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",

  paddingBottom: "$4"
})

export const PostListTitle = styled("h1", {
  color: "$gray50",
  fontSize: "$4xl"
})

export const PostsList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  padding: "$4 0"
})

export const PostItem = styled(Link, {
  borderColor: "$gray800",
  borderWidth: "1px",
  borderStyle: "solid",

  borderRadius: "$sm",

  display: "grid",
  gridTemplateColumns: "3fr 2fr",
  overflow: "hidden",

  cursor: "pointer"
})

export const PostImageContainer = styled("figure", {
  width: "100%",

  position: "relative",
  aspectRatio: 16 / 9
})

export const PostImage = styled(Image, {
  objectFit: "cover"
})

export const PostInfos = styled("div", {
  padding: "$4",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
})

export const PostHeader = styled("div", {})

export const PostHeading = styled("h3", {
  color: "$gray50",
  fontSize: "lg"
})

export const PostAbstract = styled("p", {
  color: "$gray400",
  fontSize: "$sm",

  display: "-webkit-box",
  "-webkit-line-clamp": 2,
  " -webkit-box-orient": "vertical",
  overflow: "hidden"
})

export const PostFooter = styled("div", {
  display: "flex",
  justifyContent: "space-between"
})

export const PostAuthor = styled("div", {
  display: "flex",
  gap: "$2"
})

export const PostAuthorInfos = styled("div", {
  display: "flex",
  flexDirection: "column"
})

export const PostAuthorName = styled("h5", {
  color: "$gray50"
})

export const PostAuthorImageWrapper = styled("figure", {
  width: "$8",
  aspectRatio: 1,

  position: "relative",
  overflow: "hidden",

  borderRadius: "50%"
})

export const PostAuthorImage = styled(Image, { objectFit: "cover" })

export const PostUpdatedAt = styled("sup", {})
