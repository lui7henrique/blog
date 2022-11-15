import { createStitches, defaultThemeMap } from "@stitches/react"

import * as tokens from "./tokens"

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
    maxWidth: "space",
    maxHeight: "space"
  },

  theme: {
    colors: tokens.colors,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    lineHeights: tokens.lineHeights,
    space: tokens.space
  }
})
