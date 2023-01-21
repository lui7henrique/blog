import { useTheme } from "next-themes"
import NextNProgress from "nextjs-progressbar"
import { ReactNode } from "react"

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  const { resolvedTheme } = useTheme()

  return (
    <>
      <NextNProgress
        color={resolvedTheme === "dark" ? "#222222" : "#b9b9b9"}
        startPosition={0.3}
        stopDelayMs={300}
        height={4}
        showOnShallow={true}
      />

      {props.children}
    </>
  )
}
