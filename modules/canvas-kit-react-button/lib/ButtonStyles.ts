import canvas from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';

export const highlightColors = {
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
  focusText: canvas.colors.blueberry500,
  focusRing: focusRing(2, 2),
  hoverBackground: canvas.colors.soap400,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blueberry500,
  iconColors: {
    color: canvas.colors.blueberry500,
    colorHover: canvas.colors.blueberry500,
    colorActive: canvas.colors.blueberry500,
    colorFocus: canvas.colors.blueberry500,
  },
};

export const outlineBlueColors = {
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
  iconColors: {
    color: canvas.colors.blueberry400,
    colorHover: canvas.colors.frenchVanilla100,
    colorActive: canvas.colors.frenchVanilla100,
    colorFocus: canvas.colors.frenchVanilla100,
  },
};

export const outlineDarkColors = {
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
  iconColors: {
    color: canvas.colors.licorice200,
    colorHover: canvas.colors.frenchVanilla100,
    colorActive: canvas.colors.frenchVanilla100,
    colorFocus: canvas.colors.frenchVanilla100,
  },
};

export const outlineWhiteColors = {
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
  iconColors: {
    color: canvas.colors.frenchVanilla100,
    colorHover: canvas.colors.licorice500,
    colorActive: canvas.colors.licorice500,
    colorFocus: canvas.colors.licorice500,
  },
};

export const textColors = {
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
  focusBorder: null,
  focusText: canvas.colors.blueberry400,
  focusRing: null,
  hoverBackground: 'transparent',
  hoverBorder: 'transparent',
  hoverText: canvas.colors.blueberry500,
  iconColors: {
    color: canvas.colors.blueberry400,
    colorHover: canvas.colors.blueberry500,
    colorActive: canvas.colors.blueberry500,
    colorFocus: canvas.colors.blueberry400,
  },
};

export const textDarkColors = {
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
  focusBorder: null,
  focusRing: null,
  hoverBackground: 'transparent',
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  iconColors: {
    color: canvas.colors.frenchVanilla100,
    colorHover: canvas.colors.frenchVanilla100,
    colorActive: canvas.colors.frenchVanilla100,
    colorFocus: canvas.colors.licorice500,
  },
};

export const udePrimaryColors = {
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
  focusRing: focusRing(2, 2),
  focusText: canvas.colors.frenchVanilla100,
  hoverBackground: canvas.colors.blueberry500,
  hoverBorder: 'transparent',
  hoverText: canvas.colors.frenchVanilla100,
  iconColors: {
    color: canvas.colors.frenchVanilla100,
    colorHover: canvas.colors.frenchVanilla100,
    colorActive: canvas.colors.frenchVanilla100,
    colorFocus: canvas.colors.frenchVanilla100,
  },
};

export const udeSecondaryColors = {
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
  iconColors: {
    color: canvas.colors.licorice200,
    colorHover: canvas.colors.licorice500,
    colorActive: canvas.colors.licorice500,
    colorFocus: canvas.colors.blueberry200,
  },
};

export const canvasBaseStyles = {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '13px',
  borderRadius: '999px',
  border: '1px solid transparent',
  boxShadow: 'none',
  position: 'relative',
  cursor: 'pointer',
  outline: 'none',
  transition: 'all 120ms ease-in',
  '&:hover:active': {transitionDuration: '40ms'}, // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
  '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
};

export const textBaseStyles = {
  ...canvasBaseStyles,
  borderRadius: '3px;',
  '&:hover': {textDecoration: 'underline'},
};

export const labelBaseStyles = {
  position: 'relative', // Fixes an IE issue with text within button moving on click
  ':hover:active': {
    backgroundColor: 'transparent',
  },
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: 500,
  fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

export const dataLabelBaseStyles = {
  ...labelBaseStyles,
  paddingLeft: '12px',
  fontWeight: 'initial',
};

export const iconBaseStyles = {
  padding: '0 8px',
};
