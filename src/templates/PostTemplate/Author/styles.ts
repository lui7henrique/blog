import Image from "next/image"
import { styled } from "styles"

export const PostAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8"
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

export const Spotify = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2"
})

export const SpotifyLabel = styled("sup", {
  display: "flex",
  alignItems: "center",
  gap: "$2",

  color: "$gray200"
})

export const SpotifyTrack = styled("a", {
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  alignItems: "flex-start",

  borderWidth: "1px",
  borderColor: "$gray800",
  borderStyle: "solid",

  borderRadius: "$sm",
  overflow: "hidden",

  padding: "$2"
})

export const SpotifyTrackImageWrapper = styled("figure", {
  width: "100%",
  aspectRatio: 1,
  position: "relative",

  borderRadius: "$sm",
  overflow: "hidden"
})

export const SpotifyTrackImage = styled(Image, {
  objectFit: "cover"
})

export const SpotifyTrackInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$0",

  padding: "0 $2"
})

export const SpotifyTrackTitle = styled("h5", {
  color: "$gray50",

  display: "-webkit-box",
  "-webkit-line-clamp": 2,
  " -webkit-box-orient": "vertical",
  overflow: "hidden",

  fontSize: "$md"
})

export const SpotifyTrackAuthor = styled("h6", {
  color: "$gray400",
  fontSize: "$xxs",
  fontWeight: "$medium"
})
