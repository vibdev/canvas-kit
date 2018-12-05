import canvas from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';
import {ButtonTypes} from './types';
import * as ButtonColors from './ButtonColors';

export const CANVAS_BUTTON_HEIGHT_LARGE: number = 40;
export const CANVAS_BUTTON_HEIGHT_MEDIUM: number = 24;
export const CANVAS_BUTTON_HEIGHT_SMALL: number = 18;

export interface GenericStyles {
  styles: CSSObject;
  classname: string;
  variants: {
    types: {
      [key: string]: CSSObject;
    };
    sizes: {
      [key: string]: CSSObject;
    };
  };
}

export interface ButtonStyleColors {
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
  focusBorder: string;
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

export const canvasButtonStyles: GenericStyles = {
  classname: 'canvas-button',
  styles: {
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
  variants: {
    types: {
      primary: {
        ...getButtonStateStyle(ButtonTypes.Primary),
      },
      secondary: {
        ...getButtonStateStyle(ButtonTypes.Secondary),
      },
      delete: {
        ...getButtonStateStyle(ButtonTypes.Delete),
      },
    },
    sizes: {
      large: {
        height: `${CANVAS_BUTTON_HEIGHT_LARGE}px`,
        padding: `0 ${canvas.spacing.l}`,
        minWidth: '112px',
        maxWidth: '288px',
        fontSize: '14px',
      },
      medium: {
        height: `${CANVAS_BUTTON_HEIGHT_MEDIUM}px`,
        padding: `0 ${canvas.spacing.m}`,
        minWidth: '80px',
        maxWidth: '200px',
        fontSize: '13px',
      },
      small: {
        height: `${CANVAS_BUTTON_HEIGHT_SMALL}px`,
        padding: `0 ${canvas.spacing.xxs}`,
        minWidth: '56px',
        maxWidth: '120px',
        fontSize: '10px',
      },
    },
  },
};

export const udeButtonStyles: GenericStyles = {
  classname: 'ude-button',
  styles: {
    ...canvasButtonStyles.styles,
    border: '2px solid transparent',
  },
  variants: {
    types: {
      udePrimary: {
        ...getButtonStateStyle(ButtonTypes.UdePrimary),
      },
      udeSecondary: {
        ...getButtonStateStyle(ButtonTypes.UdeSecondary),
      },
      highlight: {
        ...getButtonStateStyle(ButtonTypes.Highlight),
      },
      outlineBlue: {
        ...getButtonStateStyle(ButtonTypes.OutlineBlue),
      },
      outlineDark: {
        ...getButtonStateStyle(ButtonTypes.OutlineDark),
      },
      outlineWhite: {
        ...getButtonStateStyle(ButtonTypes.OutlineWhite),
      },
    },
    sizes: {
      large: {
        minWidth: '112px',
        height: '48px',
        padding: '0 20px',
      },
      medium: {
        minWidth: '96px',
        height: '40px',
        padding: '0 16px',
      },
      small: {
        minWidth: '80px',
        height: '32px',
        padding: '0 14px',
      },
    },
  },
};

export const textButtonStyles: GenericStyles = {
  classname: 'text-button',
  styles: {
    ...canvasButtonStyles.styles,
    borderRadius: '3px;',
    '&:hover': {textDecoration: 'underline'},
  },
  variants: {
    types: {
      text: {
        ...getButtonStateStyle(ButtonTypes.Text),
      },
      textDark: {
        ...getButtonStateStyle(ButtonTypes.TextDark),
      },
    },
    sizes: {
      large: {
        minWidth: '64px',
        height: '40px',
        padding: '0 8px',
      },
      medium: {},
      small: {
        minWidth: '48px',
        height: '32px',
        padding: '0 8px',
      },
    },
  },
};

export const labelBaseStyles: GenericStyles = {
  classname: 'button-label',
  styles: {
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
  variants: {
    types: {},
    sizes: {
      large: {
        fontSize: '16px',
        padding: '0 12px',
      },
      medium: {
        fontSize: '14px',
        padding: '0 8px',
      },
      small: {
        fontSize: '14px',
        padding: '0',
      },
    },
  },
};

export const dataLabelBaseStyles: GenericStyles = {
  classname: 'button-data-label',
  styles: {
    ...labelBaseStyles.styles,
    fontWeight: 400,
    fontSize: '16px',
  },
  variants: {
    types: {},
    sizes: {
      large: {
        paddingRight: '12px',
      },
      medium: {
        paddingRight: '8px',
      },
    },
  },
};

export const iconLabelBaseStyles: GenericStyles = {
  classname: 'button-icon-label',
  styles: {},
  variants: {
    types: {},
    sizes: {
      large: {
        paddingLeft: '8px',
      },
      medium: {
        paddingLeft: '4px',
      },
    },
  },
};

export const iconButtonStyles: GenericStyles = {
  classname: 'icon-button',
  styles: {
    // TODO: Support data-whatinput='input' css
    borderRadius: '3px',
    width: '32px',
    height: '32px',
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    // Double parent selectors to ensure specificity to override original fill
    ['&&:disabled']: {
      '& .wd-icon-fill, &:hover .wd-icon-fill': {fill: canvas.iconColors.disabled},
    },
    ['&&:not([disabled])']: {
      '& .wd-icon-fill, &:hover .wd-icon-fill': {fill: canvas.iconColors.standard},
    },
  },
  variants: {
    types: {},
    sizes: {},
  },
};

function getButtonStateStyle(buttonType: ButtonTypes) {
  const buttonColors = getButtonColors(buttonType) as ButtonStyleColors;

  return {
    backgroundColor: buttonColors.background,
    borderColor: buttonColors.border,
    color: buttonColors.text,
    ...(buttonColors.iconColor && {'.wd-icon-fill': {fill: buttonColors.iconColor}}),
    ':focus, :hover:focus': {
      backgroundColor: buttonColors.focusBackground,
      borderColor: buttonColors.focusBorder,
      color: buttonColors.focusText,
      ...(buttonColors.iconColorFocus && {'.wd-icon-fill': {fill: buttonColors.iconColorFocus}}),
    },
    ':active, :focus:active, :hover:active': {
      backgroundColor: buttonColors.activeBackground,
      borderColor: buttonColors.activeBorder,
      color: buttonColors.activeText,
      ...(buttonColors.iconColorActive && {'.wd-icon-fill': {fill: buttonColors.iconColorActive}}),
    },
    ':hover': {
      backgroundColor: buttonColors.hoverBackground,
      borderColor: buttonColors.hoverBorder,
      color: buttonColors.hoverText,
      ...(buttonColors.iconColorHover && {'.wd-icon-fill': {fill: buttonColors.iconColorHover}}),
    },
    ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
      backgroundColor: buttonColors.disabledBackground,
      borderColor: buttonColors.disabledBorder,
      color: buttonColors.disabledText,
    },
    '&:not([disabled])': {
      '&:focus, &:active': {
        ...(buttonColors.focusBorder &&
          (buttonType === ButtonTypes.Delete ? focusRing(2, 2) : focusRing(1))),
        ...(buttonColors.focusRing && buttonColors.focusRing),
      },
    },
  } as CSSObject;
}

function getButtonColors(buttonType: ButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
      return canvas.buttonColors.primary;
    case ButtonTypes.Secondary:
      return canvas.buttonColors.secondary;
    case ButtonTypes.Delete:
      return canvas.buttonColors.delete;
    case ButtonTypes.Highlight:
    default:
      return ButtonColors.highlightColors;
    case ButtonTypes.OutlineBlue:
      return ButtonColors.outlineBlueColors;
    case ButtonTypes.OutlineDark:
      return ButtonColors.outlineDarkColors;
    case ButtonTypes.OutlineWhite:
      return ButtonColors.outlineWhiteColors;
    case ButtonTypes.Text:
      return ButtonColors.textColors;
    case ButtonTypes.TextDark:
      return ButtonColors.textDarkColors;
    case ButtonTypes.UdePrimary:
      return ButtonColors.udePrimaryColors;
    case ButtonTypes.UdeSecondary:
      return ButtonColors.udeSecondaryColors;
  }
}
