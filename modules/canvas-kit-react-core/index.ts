import colors from './lib/colors'
import { CanvasColors } from './lib/colors.types'
import depth, { CanvasDepth } from './lib/depth'
import spacing, { CanvasSpacing } from './lib/spacing'
import fonts, { CanvasFonts } from './lib/fonts'
import type, { CanvasType } from './lib/type'

/* eslint-disable no-undef, no-use-before-define */
export interface CanvasCore {
  colors: CanvasColors
  depth: CanvasDepth
  spacing: CanvasSpacing
  fonts: CanvasFonts
  type: CanvasType
}
/* eslint-enable no-undef, no-use-before-define */

const canvas: CanvasCore = {
  colors,
  depth,
  spacing,
  fonts,
  type,
}

export default canvas
