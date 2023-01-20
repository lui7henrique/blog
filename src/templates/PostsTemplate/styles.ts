import { Limiter } from "components/Limiter"
import { styled } from "styles"

export const Container = styled(Limiter, {
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  gap: "$4",

  minHeight: "200vh"
})
