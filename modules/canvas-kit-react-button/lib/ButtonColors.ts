import canvas from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';

export interface GenericButtonColors {
  background: string;
  border: string;
  text: string;
  activeBackground: string;
  activeBorder: string;
  activeText: string;
  disabledBackground: string;
  disabledBorder: string;
  disabledText: string;
  focusBackground: string;
  focusBorder?: string;
  focusText: string;
  hoverBackground: string;
  hoverBorder: string;
  hoverText: string;
  iconColor?: string;
  iconColorHover?: string;
  iconColorActive?: string;
  iconColorFocus?: string;
  focusRing?: CSSObject;
}

export const highlightColors: GenericButtonColors = {
  background: canvas.colors.soap200,
  border: canvas.colors.soap200,
  text: canvas.colors.blueberry500,
  activeBackground: canvas.colors.soap500,
  activeBorder: 'transparent',
  activeText: canvas.colors.blueberry500,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.soap200,
  focusBorder: 'tansparent',
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.blueberry500,
  hoverBackground: canvas.colors.soap400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blueberry500,
  iconColor: canvas.colors.blueberry500,
  iconColorHover: canvas.colors.blueberry500,
  iconColorActive: canvas.colors.blueberry500,
  iconColorFocus: canvas.colors.blueberry500,
};

export const outlineBlueColors: GenericButtonColors = {
  background: 'transparent',
  border: canvas.colors.blueberry400,
  text: canvas.colors.blueberry400,
  activeBackground: canvas.colors.blueberry500,
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.blueberry400,
  focusBorder: 'transparent',
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.frenchVanilla100,
  hoverBackground: canvas.colors.blueberry400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  iconColor: canvas.colors.blueberry400,
  iconColorHover: canvas.colors.frenchVanilla100,
  iconColorActive: canvas.colors.frenchVanilla100,
  iconColorFocus: canvas.colors.frenchVanilla100,
};

export const outlineDarkColors: GenericButtonColors = {
  background: 'transparent',
  border: canvas.colors.soap500,
  text: canvas.colors.blackPepper400,
  activeBackground: canvas.colors.licorice600,
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.licorice500,
  focusBorder: 'transparent',
  focusText: canvas.colors.frenchVanilla100,
  focusRing: focusRing(2, 2),
  hoverBackground: canvas.colors.licorice500,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  iconColor: canvas.colors.licorice200,
  iconColorHover: canvas.colors.frenchVanilla100,
  iconColorActive: canvas.colors.frenchVanilla100,
  iconColorFocus: canvas.colors.frenchVanilla100,
};

export const outlineWhiteColors: GenericButtonColors = {
  background: 'transparent',
  border: canvas.colors.frenchVanilla100,
  text: canvas.colors.frenchVanilla100,
  activeBackground: canvas.colors.soap200,
  activeBorder: 'transparent',
  activeText: canvas.colors.blackPepper400,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.frenchVanilla100,
  focusBorder: 'transparent',
  focusText: canvas.colors.blackPepper400,
  focusRing: focusRing(2, 2, true, false, 'currentColor', canvas.colors.frenchVanilla100),
  hoverBackground: canvas.colors.frenchVanilla100,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blackPepper400,
  iconColor: canvas.colors.frenchVanilla100,
  iconColorHover: canvas.colors.licorice500,
  iconColorActive: canvas.colors.licorice500,
  iconColorFocus: canvas.colors.licorice500,
};

export const textColors: GenericButtonColors = {
  background: 'transparent',
  border: 'transparent',
  text: canvas.colors.blueberry400,
  activeBackground: 'transparent',
  activeBorder: 'transparent',
  activeText: canvas.colors.blueberry500,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.blueberry100,
  focusBorder: undefined,
  focusText: canvas.colors.blueberry400,
  focusRing: undefined,
  hoverBackground: 'transparent',
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blueberry500,
  iconColor: canvas.colors.blueberry400,
  iconColorHover: canvas.colors.blueberry500,
  iconColorActive: canvas.colors.blueberry500,
  iconColorFocus: canvas.colors.blueberry400,
};

export const textDarkColors: GenericButtonColors = {
  background: 'transparent',
  border: 'transparent',
  text: canvas.colors.frenchVanilla100,
  activeBackground: 'transparent',
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.frenchVanilla100,
  focusText: canvas.colors.licorice500,
  focusBorder: undefined,
  focusRing: undefined,
  hoverBackground: 'transparent',
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  iconColor: canvas.colors.frenchVanilla100,
  iconColorHover: canvas.colors.frenchVanilla100,
  iconColorActive: canvas.colors.frenchVanilla100,
  iconColorFocus: canvas.colors.licorice500,
};

export const udePrimaryColors: GenericButtonColors = {
  background: canvas.colors.blueberry400,
  border: 'transparent',
  text: canvas.colors.frenchVanilla100,
  activeBackground: canvas.colors.blueberry600,
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.blueberry200,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.frenchVanilla100,
  focusBackground: canvas.colors.blueberry400,
  focusBorder: 'transparent',
  focusText: canvas.colors.frenchVanilla100,
  focusRing: focusRing(2, 2),
  hoverBackground: canvas.colors.blueberry500,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  iconColor: canvas.colors.frenchVanilla100,
  iconColorHover: canvas.colors.frenchVanilla100,
  iconColorActive: canvas.colors.frenchVanilla100,
  iconColorFocus: canvas.colors.frenchVanilla100,
};

export const udeSecondaryColors: GenericButtonColors = {
  background: canvas.colors.soap200,
  border: 'transparent',
  text: canvas.colors.blackPepper400,
  activeBackground: canvas.colors.soap500,
  activeBorder: 'transparent',
  activeText: canvas.colors.blackPepper400,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.soap200,
  focusBorder: 'transparent',
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.blackPepper400,
  hoverBackground: canvas.colors.soap400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blackPepper400,
  iconColor: canvas.colors.licorice200,
  iconColorHover: canvas.colors.licorice500,
  iconColorActive: canvas.colors.licorice500,
  iconColorFocus: canvas.colors.licorice200,
};
