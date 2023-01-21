import { Limiter } from "components/Limiter"
import Link from "next/link"
import { styled } from "styles"

export const BannerContainer = styled("div", {
  "--gradient-from": "20 38 135",
  "--gradient-to": "0 45 225",

  height: "$80",

  borderBottomWidth: "1px",
  borderBottomColor: "$gray800",
  borderBottomStyle: "solid",

  background:
    "linear-gradient(180deg, var(--colors-gray900) 0,transparent 100%),linear-gradient(90deg,rgb(var(--gradient-from,85 85 85)/.2) 0,rgb(var(--gradient-to,85 85 85)/.2) 100%),linear-gradient(to right,hsla(0,0%,100%,0),hsla(0,0%,100%,.1) 10%,hsla(0,0%,100%,.1) 90%,hsla(0,0%,100%,0));",
  backgroundSize: "100% 100%,100% 100%,1440px 1px",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",

  display: "flex"
})

export const BannerContent = styled(Limiter, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "$4 0 $24 0",

  "@xl": {
    paddingRight: "$4",
    paddingLeft: "$4"
  }
})

export const Back = styled(Link, {
  display: "flex",
  alignItems: "center",
  gap: "$1",

  fontSize: "$sm",
  color: "$gray400"
})

export const BannerInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2"
})

export const BannerTitle = styled("h1", {
  fontSize: "$6xl",
  color: "$gray50"
})

export const BannerInfosHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4"
})

export const BannerCategory = styled("div", {
  "--gradient-from": "20 38 135",
  "--gradient-to": "0 45 225",

  background:
    "linear-gradient(135deg,rgba(var(--gradient-from)/.3) 0,rgba(var(--gradient-to)/.3) 100%);",

  padding: "$2 $4",
  color: "white",

  borderRadius: "$lg"
})

export const BannerTime = styled("sup", {
  fontSize: "$sm",
  color: "$gray400"
})
