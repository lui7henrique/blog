import { useCallback } from "react"

export const useDownload = () => {
  const handleNavigate = useCallback((href: string) => {
    const a = document.createElement("a")
    a.href = href
    a.click()
  }, [])

  return {
    handleNavigate
  }
}
