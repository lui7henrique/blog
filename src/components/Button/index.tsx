import { IconType } from "react-icons"
import { useTheme } from "styled-components"
import theme from "styles/theme"

import * as S from "./styles"

export type ButtonProps = {
  label: string
  backgroundColor?: string
  textColor?: string
  fontSize?: keyof typeof theme["fontSizes"]
  borderRadius?: string
  rightIcon?: IconType
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const theme = useTheme()

  const {
    label,
    backgroundColor = theme.colors.primary,
    textColor = theme.colors.title,
    fontSize = "md",
    borderRadius = "0px",
    rightIcon: RightIcon,
    ...rest
  } = props

  return (
    <S.Button
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {RightIcon && <RightIcon size={20} />}

      {label}
    </S.Button>
  )
}
