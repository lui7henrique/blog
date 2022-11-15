import { FiMenu } from "react-icons/fi"
import styledComponent, { css } from "styled-components"
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
  paddingLeft: "$10"
})

export const Header = styledComponent.header`





  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};
  }
`

export const Principal = styledComponent.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["4"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 0;
  }
`

export const Menu = styledComponent(FiMenu).attrs({
  size: 35
})`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`

export const Logo = styledComponent.h1`
  font-size: 1.5rem;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const LogoMobile = styledComponent.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  padding: ${({ theme }) => theme.space["16"]} 0;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & {
      display: flex;
    }
  }
`

export const Nav = styledComponent.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["8"]};
  margin-top: ${({ theme }) => theme.space["3"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    a {
      display: none;
    }
  }
`

export const NavItem = styledComponent(Link)<{
  isActive: boolean
}>`
  transition: border 0.2s ease-in-out;
  margin-top: 5px;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    transition: width 0.2s;
    border-radius: 0px;
    margin-top: ${({ theme }) => theme.space["2"]};
    background: ${({ theme }) => theme.colors.primary_dark};
  }

  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        width: 100%;
        background: ${({ theme }) => theme.colors.primary};

        //transition: width .3s;
      }
    `}
`
