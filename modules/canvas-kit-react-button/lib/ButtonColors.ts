import canvas, {typeColors} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';

export interface GenericButtonColors {
  activeBackground: string;
  activeBorder: string;
  activeText: string;
  background: string;
  border: string;
  disabledBackground: string;
  disabledBorder: string;
  disabledText: string;
  focusBackground: string;
  focusText: string;
  hoverBorder: string;
  text: string;
  focusBorder?: string;
  focusRing?: CSSObject;
  hoverBackground?: string;
  hoverText?: string;
  labelData?: string;
  labelDataActive?: string;
  labelDataDisabled?: string;
  labelDataFocus?: string;
  labelDataHover?: string;
  labelIcon?: string;
  labelIconActive?: string;
  labelIconDisabled?: string;
  labelIconFocus?: string;
  labelIconHover?: string;
}

export const udeDeleteColors: GenericButtonColors = {
  background: canvas.colors.cinnamon500,
  border: canvas.colors.cinnamon500,
  text: canvas.colors.frenchVanilla100,
  activeBackground: '#80160E',
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.cinnamon100,
  disabledBorder: 'transparent',
  disabledText: canvas.colors.frenchVanilla100,
  focusBackground: canvas.colors.cinnamon500,
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.frenchVanilla100,
  hoverBackground: canvas.colors.cinnamon600,
  hoverBorder: canvas.colors.cinnamon600,
  hoverText: canvas.colors.frenchVanilla100,
};

export const highlightColors: GenericButtonColors = {
  background: canvas.colors.soap200,
  border: canvas.colors.soap200,
  text: canvas.colors.blueberry500,
  activeBackground: canvas.colors.soap500,
  activeBorder: 'transparent',
  activeText: canvas.colors.blueberry500,
  disabledBackground: canvas.colors.soap100,
  disabledBorder: 'transparent',
  disabledText: typeColors.hint,
  focusBackground: canvas.colors.soap200,
  focusBorder: 'transparent',
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.blueberry500,
  hoverBackground: canvas.colors.soap400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blueberry500,
  labelIcon: canvas.colors.blueberry500,
  labelIconHover: canvas.colors.blueberry500,
  labelIconActive: canvas.colors.blueberry500,
  labelIconFocus: canvas.colors.blueberry500,
  labelIconDisabled: canvas.colors.soap600,
};

export const outlineBlueColors: GenericButtonColors = {
  background: 'transparent',
  border: canvas.colors.blueberry400,
  text: canvas.colors.blueberry400,
  activeBackground: canvas.colors.blueberry500,
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: typeColors.hint,
  focusBackground: canvas.colors.blueberry400,
  focusBorder: 'transparent',
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.frenchVanilla100,
  hoverBackground: canvas.colors.blueberry400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  labelIcon: canvas.colors.blueberry400,
  labelIconHover: canvas.colors.frenchVanilla100,
  labelIconActive: canvas.colors.frenchVanilla100,
  labelIconFocus: canvas.colors.frenchVanilla100,
  labelIconDisabled: canvas.colors.soap600,
};

export const outlineDarkColors: GenericButtonColors = {
  background: 'transparent',
  border: canvas.colors.soap500,
  text: canvas.colors.blackPepper400,
  activeBackground: canvas.colors.licorice600,
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: typeColors.hint,
  focusBackground: canvas.colors.licorice500,
  focusBorder: 'transparent',
  focusText: canvas.colors.frenchVanilla100,
  focusRing: focusRing(2, 2),
  hoverBackground: canvas.colors.licorice500,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  labelIcon: canvas.colors.licorice200,
  labelIconHover: canvas.colors.frenchVanilla100,
  labelIconActive: canvas.colors.frenchVanilla100,
  labelIconFocus: canvas.colors.frenchVanilla100,
  labelIconDisabled: canvas.colors.soap600,
};

export const outlineWhiteColors: GenericButtonColors = {
  background: 'transparent',
  border: canvas.colors.frenchVanilla100,
  text: canvas.colors.frenchVanilla100,
  activeBackground: canvas.colors.soap200,
  activeBorder: 'transparent',
  activeText: canvas.colors.blackPepper400,
  disabledBackground: 'transparent',
  disabledBorder: 'rgba(255, 255, 255, 0.75)',
  disabledText: 'rgba(255, 255, 255, 0.75)',
  focusBackground: canvas.colors.frenchVanilla100,
  focusBorder: 'transparent',
  focusText: canvas.colors.blackPepper400,
  focusRing: focusRing(2, 2, true, false, 'currentColor', canvas.colors.frenchVanilla100),
  hoverBackground: canvas.colors.frenchVanilla100,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blackPepper400,
  labelIcon: canvas.colors.frenchVanilla100,
  labelIconHover: canvas.colors.licorice500,
  labelIconActive: canvas.colors.licorice500,
  labelIconFocus: canvas.colors.licorice500,
  labelIconDisabled: 'rgba(255, 255, 255, 0.75)',
  labelDataHover: typeColors.hint,
  labelDataActive: typeColors.hint,
  labelDataFocus: typeColors.hint,
  labelDataDisabled: 'rgba(255, 255, 255, 0.75)',
};

export const textColors: GenericButtonColors = {
  background: 'transparent',
  border: 'transparent',
  text: canvas.colors.blueberry400,
  activeBackground: 'transparent',
  activeBorder: 'transparent',
  activeText: canvas.colors.blueberry500,
  disabledBackground: 'transparent',
  disabledBorder: 'transparent',
  disabledText: 'rgba(8, 117, 225, 0.5)',
  focusBackground: canvas.colors.blueberry100,
  focusText: canvas.colors.blueberry400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blueberry500,
  labelIcon: canvas.colors.blueberry400,
  labelIconHover: canvas.colors.blueberry500,
  labelIconActive: canvas.colors.blueberry500,
  labelIconFocus: canvas.colors.blueberry400,
  labelIconDisabled: 'rgba(8, 117, 225, 0.5)',
};

export const textDarkColors: GenericButtonColors = {
  background: 'transparent',
  border: 'transparent',
  text: canvas.colors.frenchVanilla100,
  activeBackground: 'transparent',
  activeBorder: 'transparent',
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: 'transparent',
  disabledBorder: 'transparent',
  disabledText: 'rgba(255, 255, 255, 0.5)',
  focusBackground: canvas.colors.frenchVanilla100,
  focusText: canvas.colors.licorice500,
  hoverBorder: 'transparent',
  labelIcon: canvas.colors.frenchVanilla100,
  labelIconHover: 'currentColor',
  labelIconActive: canvas.colors.frenchVanilla100,
  labelIconFocus: canvas.colors.licorice500,
  labelIconDisabled: 'rgba(255, 255, 255, 0.5)',
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
  labelIcon: canvas.colors.frenchVanilla100,
  labelIconHover: canvas.colors.frenchVanilla100,
  labelIconActive: canvas.colors.frenchVanilla100,
  labelIconFocus: canvas.colors.frenchVanilla100,
  labelIconDisabled: canvas.colors.frenchVanilla100,
};

export const udeSecondaryColors: GenericButtonColors = {
  background: canvas.colors.soap200,
  border: 'transparent',
  text: canvas.colors.blackPepper400,
  activeBackground: canvas.colors.soap500,
  activeBorder: 'transparent',
  activeText: canvas.colors.blackPepper400,
  disabledBackground: canvas.colors.soap100,
  disabledBorder: 'transparent',
  disabledText: typeColors.hint,
  focusBackground: canvas.colors.soap200,
  focusBorder: 'transparent',
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.blackPepper400,
  hoverBackground: canvas.colors.soap400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blackPepper400,
  labelIcon: canvas.colors.licorice200,
  labelIconHover: canvas.colors.licorice500,
  labelIconActive: canvas.colors.licorice500,
  labelIconFocus: canvas.colors.licorice200,
  labelIconDisabled: canvas.colors.soap600,
  labelData: typeColors.hint,
};
