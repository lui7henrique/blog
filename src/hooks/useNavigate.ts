import { useRouter } from "next/router"
import { useCallback } from "react"

export const useNavigate = () => {
  const { push } = useRouter()

  const handleNavigate = useCallback(
    (href: string) => {
      push(href)
    },
    [push]
  )

  return {
    handleNavigate
  }
}
