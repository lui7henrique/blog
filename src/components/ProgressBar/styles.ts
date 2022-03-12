import styled, { css } from "styled-components"

export const Progress = styled.div<{
  total: number
}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 1fr);
  gap: ${({ theme }) => theme.space[2]};
`

export const ProgressBar = styled.div<{
  empty?: boolean
}>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 10px;
  height: 10px;
  border-radius: 5px;

  ${({ empty }) =>
    empty &&
    css`
      background-color: ${({ theme }) => theme.colors.background};
      border: 1px solid ${({ theme }) => theme.colors.shape};
    `}
`
