import Link from "next/link"
import { styled } from "styles"
import { rounded } from "styles/tokens/rounded"

const styles = {
  variants: {
    color: {
      emerald: {
        background: "$emerald600"
      },
      gray: {
        background: "$gray500"
      },
      zinc: {
        background: "$zinc900"
      }
    },
    variant: {
      unstyled: {
        background: "transparent",
        padding: 0
      }
    },
    rounded: rounded
  },

  defaultVariants: {
    rounded: "full",
    color: "zinc"
  },

  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "$2"
}

export const LinkContainer = styled(Link, styles)

export const Container = styled("button", styles)
