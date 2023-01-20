import { styled } from "styles"
import { rounded } from "styles/tokens/rounded"

export const StyledButton = styled("button", {
  variants: {
    color: {
      gray: {
        background: "$gray800"
      }
    },
    rounded: rounded
  },

  defaultVariants: {
    color: "gray",
    rounded: "xs"
  },

  display: "flex",
  alignItems: "center",
  justifycontent: "center",
  gap: "$4",

  padding: "$2 $4",
  fontSize: "$sm",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  color: "$gray200",
  border: "none",
  outline: "none",

  "&:hover": {
    filter: "brightness(0.9)"
  }
})
