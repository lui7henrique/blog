import Image from "next/image"
import Link from "next/link"
import { styled } from "styles"

export const Aside = styled("aside", {
  width: "100%",
  padding: "$4 $4 0 0"
})

export const AsideContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  position: "sticky",
  top: "$2"
})

export const AsideButton = styled(Link, {
  variants: {
    active: {
      true: {
        background: "$gray800"
      }
    }
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$2",

  background: "none",
  border: "none",

  padding: "$2",

  color: "$gray300",
  cursor: "pointer",

  borderRadius: "$xs",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    color: "$gray50",
    background: "$gray800"
  }
})

export const AsideButtonIcon = styled(Image, {})
