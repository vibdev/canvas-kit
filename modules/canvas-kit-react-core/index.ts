import * as canvasColorsWeb from '@workday/canvas-colors-web';
import {BrandingColors} from './lib/colors.types';
import depth, {CanvasDepth} from './lib/depth';
import spacing, {CanvasSpacing} from './lib/spacing';
import type, {fontFamily, monoFontFamily, CanvasType} from './lib/type';
import {CSSProperties} from './lib/types';

const {default: colors, ...semanticColors} = canvasColorsWeb;
const canvas = {
  colors,
  depth,
  spacing,
  type,
  ...semanticColors,
};

export * from '@workday/canvas-colors-web';
export {
  colors,
  depth,
  spacing,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColors,
  CanvasDepth,
  CanvasSpacing,
  CanvasType,
  CSSProperties,
};
export default canvas;
