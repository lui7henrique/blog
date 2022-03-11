import styled from "styled-components"
import theme from "styles/theme"

export const Button = styled.button<{
  backgroundColor: string
  textColor: string
  fontSize: keyof typeof theme["fontSizes"]
  borderRadius: string
}>`
  background-color: ${(props) => props.backgroundColor};

  color: ${(props) => props.textColor};
  font-size: ${(props) => props.theme.fontSizes[props.fontSize]};
  font-weight: bold;

  padding: 1rem;
  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-radius: ${(props) => props.borderRadius};

  &:hover {
    filter: brightness(0.8);
  }
`
