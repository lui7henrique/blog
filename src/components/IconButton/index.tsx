import { LinkProps } from "next/link"
import { ReactElement } from "react"

import { Container, LinkContainer } from "./styles"

type IconButtonProps = {
  icon: ReactElement
  href?: string
  blank?: boolean
} & typeof Container.defaultProps

export const IconButton = (props: IconButtonProps) => {
  const { icon, href, blank, ...containerProps } = props

  const Component = href ? (
    <LinkContainer
      href={href}
      target={blank ? "_blank" : ""}
      {...(containerProps as Omit<LinkProps, "href">)}
    >
      {icon}
    </LinkContainer>
  ) : (
    <Container {...containerProps}>{icon}</Container>
  )

  return Component
}
