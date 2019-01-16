import canvas from '@workday/canvas-kit-react-core';
import {focusRing, GenericStyle} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';
import {ButtonTypes, ButtonSizes, IconPositions} from './types';
import * as ButtonColors from './ButtonColors';

export const CANVAS_BUTTON_HEIGHT_LARGE: number = 40;
export const CANVAS_BUTTON_HEIGHT_MEDIUM: number = 24;
export const CANVAS_BUTTON_HEIGHT_SMALL: number = 18;

export interface ButtonGenericStyle extends GenericStyle {
  variants?: {
    types: {[key in ButtonTypes | IconPositions]?: CSSObject};
    sizes: {[key in ButtonSizes]?: CSSObject};
  };
}

export const labelBaseStyles: ButtonGenericStyle = {
  classname: 'button-label',
  styles: {
    position: 'relative', // Fixes an IE issue with text within button moving on click
    ':hover:active': {
      backgroundColor: 'transparent',
    },
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 700,
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  variants: {
    types: {
      text: {
        padding: '0',
      },
      textAllCaps: {
        ...canvas.type.variant.caps,
        fontSize: '14px',
        letterSpacing: '.5px',
        padding: '0',
      },
      primary: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      secondary: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      delete: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
    },
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

export const labelDataBaseStyles: ButtonGenericStyle = {
  classname: 'button-label-data',
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
        fontSize: '14px',
      },
    },
  },
};

export const labelIconBaseStyles: ButtonGenericStyle = {
  classname: 'button-label-icon',
  styles: {
    display: 'flex',
  },
  variants: {
    types: {
      iconPositionLeft: {
        padding: '0 8px 0 0',
      },
      iconPositionRight: {
        padding: '0 0 0 8px',
      },
    },
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

export const canvasButtonStyles: ButtonGenericStyle = {
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
        fontWeight: 500,
      },
      medium: {
        height: `${CANVAS_BUTTON_HEIGHT_MEDIUM}px`,
        padding: `0 ${canvas.spacing.m}`,
        minWidth: '80px',
        maxWidth: '200px',
        fontSize: '13px',
        fontWeight: 500,
      },
      small: {
        height: `${CANVAS_BUTTON_HEIGHT_SMALL}px`,
        padding: `0 ${canvas.spacing.xxs}`,
        minWidth: '56px',
        maxWidth: '120px',
        fontSize: '10px',
        fontWeight: 500,
      },
    },
  },
};

export const udeButtonStyles: ButtonGenericStyle = {
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
      udeDelete: {
        ...getButtonStateStyle(ButtonTypes.UdeDelete),
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
        padding: '0 18px',
      },
      medium: {
        minWidth: '96px',
        height: '40px',
        padding: '0 14px',
      },
      small: {
        minWidth: '80px',
        height: '32px',
        padding: '0 14px',
      },
    },
  },
};

export const dropdownButtonStyles: ButtonGenericStyle = {
  classname: 'dropdown-button',
  styles: {
    ...udeButtonStyles.styles,
  },
  variants: {
    types: {
      udePrimary: udeButtonStyles.variants!.types.udePrimary,
      udeSecondary: udeButtonStyles.variants!.types.udeSecondary,
    },
    sizes: {
      large: udeButtonStyles.variants!.sizes.large,
      medium: udeButtonStyles.variants!.sizes.medium,
    },
  },
};

export const textButtonStyles: ButtonGenericStyle = {
  classname: 'text-button',
  styles: {
    ...canvasButtonStyles.styles,
    borderRadius: '3px;',
    border: '0',
    margin: '0 8px',
    minWidth: 'auto',
    '&:hover:not([disabled])': {textDecoration: 'underline'},
  },
  variants: {
    types: {
      text: {
        ...getButtonStateStyle(ButtonTypes.Text),
      },
      textDark: {
        ...getButtonStateStyle(ButtonTypes.TextDark),
      },
      textAllCaps: {
        ...getButtonStateStyle(ButtonTypes.Text),
        height: '32px',
      },
      textDarkAllCaps: {
        ...getButtonStateStyle(ButtonTypes.TextDark),
        height: '32px',
      },
    },
    sizes: {
      large: {
        height: '40px',
        padding: '0 8px',
      },
      small: {
        height: '32px',
        padding: '0 8px',
      },
    },
  },
};

export const iconButtonStyles: ButtonGenericStyle = {
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
};

function getButtonStateStyle(buttonType: ButtonTypes): CSSObject {
  const buttonColors = getButtonColors(buttonType);

  return {
    backgroundColor: buttonColors.background,
    borderColor: buttonColors.border,
    color: buttonColors.text,
    ...(buttonColors.labelIcon && {
      'span .wd-icon-fill, span .wd-icon-accent': {
        transition: 'fill 120ms ease-in',
        fill: buttonColors.labelIcon,
      },
    }),
    ...(buttonColors.labelData && {
      ['.' + labelDataBaseStyles.classname]: {
        color: buttonColors.labelData,
      },
    }),
    ':focus': {
      backgroundColor: buttonColors.focusBackground,
      borderColor: buttonColors.focusBorder,
      color: buttonColors.focusText,
      ...(buttonColors.labelDataFocus && {
        ['.' + labelDataBaseStyles.classname]: {color: buttonColors.labelDataFocus},
      }),
      ...(buttonColors.labelIconFocus && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconFocus},
      }),
    },
    ':hover:focus': {
      backgroundColor: buttonColors.hoverBackground,
    },
    ':active, :focus:active, :hover:active': {
      backgroundColor: buttonColors.activeBackground,
      borderColor: buttonColors.activeBorder,
      color: buttonColors.activeText,
      ...(buttonColors.labelDataActive && {
        ['.' + labelDataBaseStyles.classname]: {color: buttonColors.labelDataActive},
      }),
      ...(buttonColors.labelIconActive && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconActive},
      }),
    },
    ':hover': {
      backgroundColor: buttonColors.hoverBackground,
      borderColor: buttonColors.hoverBorder,
      color: buttonColors.hoverText,
      ...(buttonColors.labelDataHover && {
        ['.' + labelDataBaseStyles.classname]: {
          transition: 'color 120ms ease-in',
          color: buttonColors.labelDataHover,
        },
      }),
      ...(buttonColors.labelIconHover && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconHover},
      }),
    },
    ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
      backgroundColor: buttonColors.disabledBackground,
      borderColor: buttonColors.disabledBorder,
      color: buttonColors.disabledText,
      ...(buttonColors.labelIconDisabled && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconDisabled},
      }),
      ...(buttonColors.labelDataDisabled && {
        ['.' + labelDataBaseStyles.classname]: {color: buttonColors.labelDataDisabled},
      }),
    },
    '&:not([disabled])': {
      '&:focus, &:active': {
        ...(buttonColors.focusBorder && {
          ...(buttonType === ButtonTypes.Delete ? focusRing(2, 2) : focusRing(1)),
          ...{borderColor: buttonColors.focusBorder},
        }),
        ...(buttonColors.focusRing && buttonColors.focusRing),
      },
    },
  };
}

function getButtonColors(buttonType: ButtonTypes): ButtonColors.GenericButtonColors {
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
    case ButtonTypes.UdeDelete:
      return ButtonColors.udeDeleteColors;
  }
}
