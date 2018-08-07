import * as canvasColorsWeb from '@workday/canvas-colors-web'
import { BrandingColors } from './lib/colors.types'
import depth, { CanvasDepth } from './lib/depth'
import spacing, { CanvasSpacing } from './lib/spacing'
import fonts, { CanvasFonts } from './lib/fonts'
import type, { CanvasType } from './lib/type'
import { CSSProperties } from './lib/types'

const { default: colors, ...semanticColors } = canvasColorsWeb
const canvas = {
  colors,
  depth,
  spacing,
  fonts,
  type,
  ...semanticColors,
}

export * from '@workday/canvas-colors-web'
export {
  colors,
  depth,
  spacing,
  fonts,
  type,
  BrandingColors,
  CanvasDepth,
  CanvasSpacing,
  CanvasFonts,
  CanvasType,
  CSSProperties,
}
export default canvas
