import { useEffect, useRef } from "react"

import * as S from "./styles"

export const Comments = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("async", "true")
    scriptEl.setAttribute("repo", "lui7henrique/blog")
    scriptEl.setAttribute("issue-term", "pathname")
    scriptEl.setAttribute("theme", "github-dark")
    scriptEl.setAttribute("crossorigin", "anonymous")

    if (ref) {
      ref.current?.appendChild(scriptEl)
    }
  }, [])

  return <S.Container ref={ref} />
}
