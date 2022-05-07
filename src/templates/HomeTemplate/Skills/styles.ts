import { FaChevronDown } from "react-icons/fa"
import styled, { css } from "styled-components"

export const Container = styled.section`
  width: 100vw;
`

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;

  display: flex;
  gap: ${({ theme }) => theme.space["4"]};

  padding-top: ${({ theme }) => theme.space["20"]};
  padding-bottom: ${({ theme }) => theme.space["20"]};

  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column-reverse;

    padding-top: ${({ theme }) => theme.space["10"]};
    padding-bottom: ${({ theme }) => theme.space["10"]};

    padding-right: ${({ theme }) => theme.space["6"]};
    padding-left: ${({ theme }) => theme.space["6"]};
  }
`

export const Aside = styled.aside`
  display: flex;
  width: 50%;
  gap: ${({ theme }) => theme.space["2"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const ContentTitles = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: sticky;
    top: ${({ theme }) => theme.space["4"]};
  }
`

export const ContentSubTitle = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
`

export const ContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
`

export const Skills = styled.article`
  width: 50%;
  padding-right: ${({ theme }) => theme.space["8"]};

  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding-right: 0;
  }
`

export const Skill = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  justify-content: space-between;

  cursor: pointer;

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.space["4"]};
  }
`

export const SkillAllInfos = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`

export const SkillBasicInfos = styled.div`
  display: flex;
  flex-direction: column;
`

export const SkillTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  /* margin-bottom: ${({ theme }) => theme.space["2"]}; */
`

export const SkillButtonIcon = styled(FaChevronDown)<{
  isOpen: boolean
}>`
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`

export const SkillsStuff = styled.div<{
  isOpen?: boolean
}>`
  height: 0px;
  transition: all 0.3s ease-in-out;
  margin-top: 4px;
  border-radius: 5px;
  padding: ${({ theme }) => theme.space[4]};
  display: none;

  ul {
    padding: 0;
    margin: ${({ theme }) => theme.space[4]};

    li {
      font-size: ${({ theme }) => theme.fontSizes["md"]};
      margin-bottom: ${({ theme }) => theme.space[4]};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary_dark};
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
      height: auto;
    `}
`
