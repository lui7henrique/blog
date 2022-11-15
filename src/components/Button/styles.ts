import { styled } from "styles"
import { rounded } from "styles/tokens"

export const StyledButton = styled("button", {
  variants: {
    color: {
      emerald: {
        background: "$emerald600"
      },
      gray: {
        background: "$gray500"
      },
      zinc: {
        background: "$zinc900",

        borderWidth: "1px",
        borderColor: "$zinc800",
        borderStyle: "solid"
      }
    },
    rounded: rounded
  },
  defaultVariants: {
    color: "zinc",
    rounded: "md"
  },

  display: "flex",
  alignItems: "center",
  justifycontent: "center",
  gap: "$4",

  padding: "$2 $4",
  fontSize: "$sm",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  color: "$gray100",

  "&:hover": {
    filter: "brightness(0.8)"
  }
})
