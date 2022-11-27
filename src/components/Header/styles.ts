import Link from "next/link"
import { styled } from "styles"

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "$30",
  maxWidth: "$280",
  margin: "0 auto",
  zIndex: 99,

  paddingRight: "$10",
  paddingLeft: "$10",

  "@md": {
    paddingRight: "$6",
    paddingLeft: "$6"
  }
})

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$8",

  "@lg": {
    gap: 0
  }
})

export const Logo = styled("h1", {
  fontSize: "$2xl",
  display: "flex",

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
  gap: "$8",
  marginTop: "$5",

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
        color: "white",
        "&::after": {
          width: "100%"
        }
      },
      false: {
        "&::after": {
          width: "0%"
        }
      }
    }
  },

  transition: "border 0.2s ease-in-out",
  marginTop: "$xxs",

  "&::after": {
    content: "",
    display: "block",
    width: 0,
    height: "3px",
    transition: "width 0.2s",
    borderRadius: "$sm",
    marginTop: "$2",
    background: "$zinc600"
  },

  "&:hover": {
    color: "$white"
  },

  "&:hover::after": {
    width: "100%"
  }
})

export const Buttons = styled("div", {
  display: "flex",
  gap: "$4"
})
