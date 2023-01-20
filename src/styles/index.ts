import { createStitches, defaultThemeMap } from "@stitches/react"

import { darkThemeColors, lightThemeColors } from "./tokens/colors"
import { fonts } from "./tokens/fonts"
import { fontSizes } from "./tokens/fontSizes"
import { fontWeights } from "./tokens/fontWeights"
import { lineHeights } from "./tokens/lineHeights"
import { media } from "./tokens/media"
import { radii } from "./tokens/radii"
import { space } from "./tokens/space"

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
    maxHeight: "space",
    borderRadius: "radii"
  },

  theme: {
    colors: lightThemeColors,

    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    space: space,
    radii: radii
  },

  media: media
})

export const darkTheme = createTheme("darkTheme", {
  colors: darkThemeColors
})
