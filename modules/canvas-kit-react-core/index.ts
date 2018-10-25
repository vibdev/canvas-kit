import * as canvasColorsWeb from '@workday/canvas-colors-web';
import {BrandingColors} from './lib/colors.types';
import depth, {CanvasDepth} from './lib/depth';
import spacing, {spacingNumbers, CanvasSpacingNumbers, CanvasSpacing} from './lib/spacing';
import type, {fontFamily, monoFontFamily, CanvasType} from './lib/type';
import {CSSProperties} from './lib/types';

const {default: colors, ...semanticColors} = canvasColorsWeb;
const canvas = {
  colors,
  depth,
  spacing,
  type,
  fontFamily,
  monoFontFamily,
  ...semanticColors,
};

export * from '@workday/canvas-colors-web';
export {
  colors,
  depth,
  spacing,
  spacingNumbers,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColors,
  CanvasDepth,
  CanvasSpacing,
  CanvasSpacingNumbers,
  CanvasType,
  CSSProperties,
};
export default canvas;
