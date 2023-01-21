import { Limiter } from "components/Limiter"
import Link from "next/link"
import { styled } from "styles"

export const Wrapper = styled("header", {
  borderBottomWidth: "1px",
  borderBottomColor: "$gray800",
  borderBottomStyle: "solid",

  height: "$20"
})

export const Container = styled(Limiter, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  height: "100%",

  zIndex: 99,
  width: "auto"
})

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  height: "100%",

  "@lg": {
    gap: 0
  }
})

export const Logo = styled("h1", {
  fontSize: "$lg",
  display: "flex",
  color: "$gray50",

  "@lg": {
    display: "none"
  }
})

export const LogoMobile = styled("h1", {
  fontSize: "$5xl",
  padding: "$16 0",
  display: "none",

  "@lg": {
    display: "flex"
  }
})

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  borderLeftWidth: "1px",
  borderLeftColor: "$gray800",
  borderLeftStyle: "solid",

  paddingLeft: "$4",
  marginTop: "4px",

  height: "50%",

  "@lg": {
    a: {
      display: "none"
    }
  }
})

export const NavItem = styled(Link, {
  variants: {
    active: {
      true: {
        color: "$gray50"
      },
      false: {
        color: "$gray400"
      }
    }
  },

  fontSize: "$sm",
  transition: "border 0.2s ease-in-out",

  "&:hover": {
    color: "$gray50"
  },

  "&:hover::after": {
    width: "100%"
  }
})

export const Buttons = styled("div", {
  display: "flex",
  gap: "$4"
})
