import styled from 'react-emotion';
import {ButtonSizes, ButtonTypes} from './types';
import canvas from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {ButtonProps} from './Button';
// @ts-ignore: To appease the TS god
import {ButtonHTMLAttributes, ClassAttributes, HTMLAttributes} from 'react';
// @ts-ignore: To appease the TS god
import {StyledOtherComponent} from 'create-emotion-styled';

export const BUTTON_HEIGHT_LARGE: number = 40;
export const BUTTON_HEIGHT_MEDIUM: number = 24;
export const BUTTON_HEIGHT_SMALL: number = 18;

// TODO convert these to generic styles
const highlightStyles = {
  background: canvas.colors.soap200,
  border: canvas.colors.soap200,
  text: canvas.colors.blueberry500,
  activeBackground: canvas.colors.soap500,
  activeBorder: canvas.colors.soap500,
  activeText: canvas.colors.blueberry500,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap100,
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.soap200,
  focusBorder: canvas.colors.blueberry500,
  focusText: canvas.colors.blueberry500,
  hoverBackground: canvas.colors.soap400,
  hoverBorder: canvas.colors.soap400,
  hoverText: canvas.colors.blueberry500,
};

const outlineBlue = {
  background: 'transparent',
  border: canvas.colors.blueberry400,
  text: canvas.colors.blueberry400,
  activeBackground: canvas.colors.blueberry500,
  activeBorder: canvas.colors.blueberry500,
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.blueberry400,
  focusBorder: null,
  focusText: canvas.colors.frenchVanilla100,
  hoverBackground: canvas.colors.blueberry400,
  hoverBorder: canvas.colors.blueberry400,
  hoverText: canvas.colors.frenchVanilla100,
};

const outlineDark = {
  background: 'transparent',
  border: canvas.colors.soap500,
  text: canvas.colors.blackPepper400,
  activeBackground: canvas.colors.licorice600,
  activeBorder: null,
  activeText: canvas.colors.frenchVanilla100,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.licorice500,
  focusBorder: canvas.colors.blueberry500,
  focusText: canvas.colors.frenchVanilla100,
  hoverBackground: canvas.colors.licorice500,
  hoverBorder: null,
  hoverText: canvas.colors.frenchVanilla100,
};

const outlineWhite = {
  background: 'transparent',
  border: canvas.colors.frenchVanilla100,
  text: canvas.colors.frenchVanilla100,
  activeBackground: canvas.colors.soap200,
  activeBorder: canvas.colors.frenchVanilla100,
  activeText: canvas.colors.blackPepper400,
  disabledBackground: canvas.colors.frenchVanilla100,
  disabledBorder: canvas.colors.soap500,
  disabledText: canvas.colors.licorice300,
  focusBackground: canvas.colors.frenchVanilla100,
  focusBorder: canvas.colors.blueberry500,
  focusText: canvas.colors.blackPepper400,
  hoverBackground: canvas.colors.frenchVanilla100,
  hoverBorder: null,
  hoverText: canvas.colors.blackPepper400,
};

export const ButtonBaseCon = styled('button')<ButtonProps>(
  // TODO: Support data-whatinput='input'
  {
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
  },
  ({buttonType}) => {
    /* istanbul ignore next line for coverage */
    if (buttonType === undefined) {
      return {};
    }
    const buttonColors = getButtonColors(buttonType);
    return {
      backgroundColor: buttonColors.background,
      borderColor: buttonColors.border,
      color: buttonColors.text,
      ':focus, :hover:focus': {
        backgroundColor: buttonColors.focusBackground,
        borderColor: buttonColors.focusBorder,
        color: buttonColors.focusText,
      },
      ':active, :focus:active, :hover:active': {
        backgroundColor: buttonColors.activeBackground,
        borderColor: buttonColors.activeBorder,
        color: buttonColors.activeText,
      },
      ':hover': {
        backgroundColor: buttonColors.hoverBackground,
        borderColor: buttonColors.hoverBorder,
        color: buttonColors.hoverText,
      },
      ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
        backgroundColor: buttonColors.disabledBackground,
        borderColor: buttonColors.disabledBorder,
        color: buttonColors.disabledText,
      },
      '&:not([disabled])': {
        '&:focus, &:active': {
          ...(buttonType === ButtonTypes.Delete ? focusRing(2, 2) : focusRing(1)),
        },
      },
    };
  },
  ({buttonSize}) => {
    switch (buttonSize) {
      case ButtonSizes.Large:
        return {
          height: `${BUTTON_HEIGHT_LARGE}px`,
          padding: `0 ${canvas.spacing.l}`,
          minWidth: '112px',
          maxWidth: '288px',
        };
      case ButtonSizes.Medium:
        return {
          height: `${BUTTON_HEIGHT_MEDIUM}px`,
          padding: `0 ${canvas.spacing.m}`,
          minWidth: '80px',
          maxWidth: '200px',
        };
      case ButtonSizes.Small:
        return {
          height: `${BUTTON_HEIGHT_SMALL}px`,
          padding: `0 ${canvas.spacing.xxs}`,
          minWidth: '56px',
          maxWidth: '120px',
        };
      default:
        return {height: `${BUTTON_HEIGHT_LARGE}px`, padding: 0};
    }
  },
  ({grow}) => {
    if (grow) {
      return {width: '100%', maxWidth: '100%'};
    }
    return {};
  }
);

export const ButtonBaseLabel = styled('span')<ButtonProps>(
  {
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
  },
  ({buttonSize}) => {
    if (buttonSize === ButtonSizes.Medium) {
      return {
        fontSize: '13px',
      };
    } else if (buttonSize === ButtonSizes.Small) {
      return {
        fontSize: '10px',
      };
    } else {
      return {
        fontSize: '14px',
      };
    }
  }
);

function getButtonColors(buttonType: ButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
    default:
      return canvas.buttonColors.primary;
    case ButtonTypes.Secondary:
      return canvas.buttonColors.secondary;
    case ButtonTypes.Delete:
      return canvas.buttonColors.delete;
    case ButtonTypes.Highlight:
      return highlightStyles;
    case ButtonTypes.OutlineBlue:
      return outlineBlue;
    case ButtonTypes.OutlineDark:
      return outlineDark;
    case ButtonTypes.OutlineWhite:
      return outlineWhite;
  }
}
