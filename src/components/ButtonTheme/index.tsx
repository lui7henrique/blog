import { Button } from "components/Button"
import { useTheme } from "next-themes"
import React, { useMemo } from "react"
import { IconType } from "react-icons"
import { FaMoon, FaSun } from "react-icons/fa"

type Theme = "dark" | "light"

export const ButtonTheme = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light"

    setTheme(targetTheme)
  }

  const Icon = useMemo(() => {
    const iconByTheme: Record<Theme, IconType> = {
      dark: FaMoon,
      light: FaSun
    }

    return iconByTheme[resolvedTheme as Theme] || FaMoon
  }, [resolvedTheme])

  return <Button label={<Icon />} onClick={toggleTheme}></Button>
}
