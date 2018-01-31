import canvasDepthWeb from '@workday/canvas-depth-web'
import { CSSProperties } from './types'
import colors from './colors'

export interface CanvasDepth {
  inset: CSSProperties
  1: CSSProperties
  2: CSSProperties
  3: CSSProperties
  4: CSSProperties
}

const depth: CanvasDepth = canvasDepthWeb

export default depth
