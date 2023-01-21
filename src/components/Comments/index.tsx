import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

import * as S from "./styles"

export const Comments = () => {
  const { resolvedTheme } = useTheme()

  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useRouter()

  const theme = resolvedTheme === "dark" ? "github-dark" : "github-light"

  useEffect(() => {
    const scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("async", "true")
    scriptEl.setAttribute("repo", "lui7henrique/blog")
    scriptEl.setAttribute("issue-term", "title")
    scriptEl.setAttribute("theme", theme)
    scriptEl.setAttribute("crossorigin", "anonymous")

    if (ref) {
      ref.current?.appendChild(scriptEl)
    }
  }, [pathname])

  useEffect(() => {
    if (document.querySelector(".utterances-frame")) {
      const iframe =
        document.querySelector<HTMLIFrameElement>(".utterances-frame")

      if (!iframe) {
        return
      }

      iframe?.contentWindow?.postMessage(
        { type: "set-theme", theme: theme },
        "https://utteranc.es"
      )
    }
  }, [theme])

  return <S.Container ref={ref} />
}
