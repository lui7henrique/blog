import Image from "next/image"
import Link from "next/link"
import { MdClose } from "react-icons/md"
import styled, { css } from "styled-components"

export const Container = styled.div<{
  isOpen: boolean
}>`
  height: 100vh;
  width: 100vw;

  overflow: hidden;

  background: ${({ theme }) => ` linear-gradient(
    320deg,
    ${theme.colors.background}E6 50%,
    ${theme.colors.shape}E6 120%
  );`};
  backdrop-filter: blur(10px);
  border-right: solid 1px ${({ theme }) => theme.colors.shape};

  position: fixed;
  top: 0;

  z-index: 999;

  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: all 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.sizes.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.shape};
`

export const Profile = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space["2"]};
  align-items: center;
`

export const ProfileImageWrapper = styled.figure`
  width: 3.5rem;
  height: 3.5rem;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
`

export const ProfileTitle = styled.span`
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
`

export const ProfileTexts = styled.div``

export const ProfileDescription = styled.p`
  font-size: 0.9rem;
`

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CloseButton = styled(MdClose).attrs({
  size: 30
})``

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};

  padding: ${({ theme }) => theme.space[4]} 0;
`

export const ActiveLink = styled(Link)``

export const ActiveLinkLink = styled.a<{
  isActive: boolean
}>`
  border-left: 5px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      border-left: 5px solid ${({ theme }) => theme.colors.primary_dark};
    `}

  padding: ${({ theme }) => theme.space[4]};
`

export const ActiveLinkLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`

export const ButtonContainer = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  width: 100%;
`
