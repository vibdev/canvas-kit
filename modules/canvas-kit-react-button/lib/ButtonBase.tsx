import styled from 'react-emotion';
import {ButtonSizes, ButtonTypes} from './types';
import canvas from '@workday/canvas-kit-react-core';
import focusRing from '../../common/styles/focus_ring';
import {ButtonProps} from './Button';
// @ts-ignore: To appease the TS god
import {ButtonHTMLAttributes, ClassAttributes, HTMLAttributes} from 'react';
// @ts-ignore: To appease the TS god
import {StyledOtherComponent} from 'create-emotion-styled';

export const BUTTON_HEIGHT_LARGE: number = 40;
export const BUTTON_HEIGHT_MEDIUM: number = 24;
export const BUTTON_HEIGHT_SMALL: number = 18;

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
    '&:not([disabled])': {
      '&:focus, &:active': {...focusRing(1)},
    },
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
      ':active, :hover:active': {
        backgroundColor: buttonColors.activeBackground,
        borderColor: buttonColors.activeBorder,
        color: buttonColors.activeText,
      },
      ':focus, :hover:focus': {
        backgroundColor: buttonColors.focusBackground,
        borderColor: buttonColors.focusBorder,
        color: buttonColors.focusText,
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
  },
  ({buttonSize}) => {
    if (buttonSize === ButtonSizes.Medium) {
      return {
        fontSize: '13px',
      };
    } else if (buttonSize === ButtonSizes.Small) {
      return {
        fontWeight: 500,
        fontSize: '10px',
      };
    } else {
      return {
        fontWeight: 500,
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
  }
}
