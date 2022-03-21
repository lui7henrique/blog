import styled, { css } from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  width: 100%;
  height: ${({ theme }) => theme.sizes.headerHeight};

  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};

  z-index: 99;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};
  }
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.space["16"]} 0;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & {
      display: none;
    }
  }
`

export const LogoMobile = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  padding: ${({ theme }) => theme.space["16"]} 0;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & {
      display: flex;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space["8"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    a {
      display: none;
    }
  }
`

export const NavItem = styled.a<{
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
    border-radius: 5px;
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
