import { useTheme } from "styled-components"
import theme from "styles/theme"

import * as S from "./styles"

type ButtonProps = {
  label: string
  backgroundColor?: string
  textColor?: string
  fontSize?: keyof typeof theme["fontSizes"]
  borderRadius?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const theme = useTheme()
  const {
    label,
    backgroundColor = theme.colors.primary,
    textColor = theme.colors.title,
    fontSize = "md",
    borderRadius = "5px",
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
      {label}
    </S.Button>
  )
}
