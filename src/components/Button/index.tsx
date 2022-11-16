import { IconType } from "react-icons"

import { StyledButton } from "./styles"

import * as S from "./styles"

export type ButtonProps = {
  label: string
  rightIcon?: IconType
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  typeof StyledButton.defaultProps

export const Button = (props: ButtonProps) => {
  const { label, rightIcon: RightIcon, ...rest } = props

  console.log("oi")

  return (
    <S.StyledButton {...rest}>
      {RightIcon && <RightIcon size={20} />}
      {label}
    </S.StyledButton>
  )
}
