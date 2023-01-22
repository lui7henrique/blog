import { Limiter } from "components/Limiter"
import Image from "next/image"
import { styled } from "styles"

export const PostContainer = styled(Limiter, {
  width: "auto",

  display: "grid",
  gridTemplateColumns: "5fr 2fr"
})

export const PostContent = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",

  marginRight: "$20"
})

export const PostImageWrapper = styled("figure", {
  aspectRatio: 16 / 9,
  position: "relative",
  overflow: "hidden",

  borderRadius: "$md",

  borderWidth: "1px",
  borderColor: "$gray800",
  borderStyle: "solid",

  marginTop: "-$20"
})

export const PostImage = styled(Image, {
  objectFit: "cover",
  pointerEvents: "none"
})

export const PostArticle = styled("article", {
  lineHeight: "1.8",

  a: {
    color: "$gray100"
  },

  p: {
    marginBottom: "$4"
  },

  code: {
    backgroundColor: "#282a36 !important",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
  },

  "h1, h2, h3, h4, h5, h6": {
    color: "$gray50"
  },

  h1: {
    margin: "$2 0"
  },

  h2: {
    margin: "$2 0"
  },

  ul: {
    padding: "$4 $8"
  },

  ol: {
    padding: "$4 $8"
  },

  "p > code, li > code, dd > code, td > code": {
    background: "#ffeff0",
    wordWrap: "break-word",
    boxDecorationBreak: "clone",
    padding: "0.1rem 0.3rem 0.2rem",
    borderRadius: "0.2rem",

    color: "white"
  },

  blockquote: {
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderLeftColor: "#F26F63",

    padding: "$2 $4",
    margin: "$4 0",
    fontStyle: "italic"
  }
})

export const PostAsideContainer = styled("aside", {
  borderLeftWidth: "1px",
  borderLeftColor: "$gray800",
  borderLeftStyle: "solid",

  position: "relative",
  padding: "$8"
})

export const PostAsideContent = styled("div", {
  position: "sticky",
  top: "$8",

  display: "flex",
  flexDirection: "column",
  gap: "$8"
})
