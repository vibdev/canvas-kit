import * as canvasColorsWeb from '@workday/canvas-colors-web';
import {BrandingColors} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import spacing, {
  spacingNumbers,
  space,
  CanvasSpacingNumbers,
  CanvasSpacing,
  CanvasSpacingValue,
} from './lib/spacing';
import type, {fontFamily, monoFontFamily, CanvasType} from './lib/type';
import InputProvider from './lib/InputProvider';
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
  space,
  spacingNumbers,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColors,
  CanvasDepth,
  CanvasDepthValue,
  CanvasSpacing,
  CanvasSpacingNumbers,
  CanvasSpacingValue,
  CanvasType,
  CSSProperties,
  InputProvider,
};
export default canvas;
