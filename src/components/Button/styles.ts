import { styled } from "styles"

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
    rounded: {
      px: { borderRadius: "$px" },
      xs: { borderRadius: "$xs" },
      sm: { borderRadius: "$sm" },
      md: { borderRadius: "$md" },
      lg: { borderRadius: "$lg" },
      full: { borderRadius: "$full" }
    }
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
