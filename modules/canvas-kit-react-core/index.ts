import colors from './lib/colors'
import { CanvasColors, BrandingColors } from './lib/colors.types'
import depth, { CanvasDepth } from './lib/depth'
import spacing, { CanvasSpacing } from './lib/spacing'
import fonts, { CanvasFonts } from './lib/fonts'
import type, { CanvasType } from './lib/type'

export interface CanvasCore {
  colors: CanvasColors
  depth: CanvasDepth
  spacing: CanvasSpacing
  fonts: CanvasFonts
  type: CanvasType
}

const canvas: CanvasCore = {
  colors,
  depth,
  spacing,
  fonts,
  type,
}

export { colors, depth, spacing, fonts, type, BrandingColors }
export default canvas
