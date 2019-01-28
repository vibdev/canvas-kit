import canvas from '@workday/canvas-kit-react-core';
import {focusRing, GenericStyle} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';
import {
  ButtonTypes,
  ButtonSizes,
  IconPositions,
  AllButtonTypes,
  TextButtonTypes,
  BetaButtonTypes,
} from './types';
import {ButtonColors} from './ButtonColors';

export const CANVAS_BUTTON_HEIGHT_LARGE: number = 40;
export const CANVAS_BUTTON_HEIGHT_MEDIUM: number = 24;
export const CANVAS_BUTTON_HEIGHT_SMALL: number = 18;

export interface ButtonGenericStyle extends GenericStyle {
  variants?: {
    types: {[key in AllButtonTypes | IconPositions]?: CSSObject};
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
      [TextButtonTypes.Default]: {
        padding: '0',
      },
      [TextButtonTypes.AllCaps]: {
        ...canvas.type.variant.caps,
        fontSize: '14px',
        letterSpacing: '.5px',
        padding: '0',
      },
      [ButtonTypes.Primary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [ButtonTypes.Secondary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [ButtonTypes.Delete]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        fontSize: '16px',
        padding: '0 12px',
      },
      [ButtonSizes.Medium]: {
        fontSize: '14px',
        padding: '0 8px',
      },
      [ButtonSizes.Small]: {
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
      [ButtonSizes.Large]: {
        paddingRight: '12px',
      },
      [ButtonSizes.Medium]: {
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
      [IconPositions.Left]: {
        padding: '0 8px 0 0',
      },
      [IconPositions.Right]: {
        padding: '0 0 0 8px',
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        paddingLeft: '8px',
      },
      [ButtonSizes.Medium]: {
        paddingLeft: '4px',
      },
    },
  },
};

// TODO (beta button): remove
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
    transition: 'all 120ms linear',
    '&:hover:active': {transitionDuration: '40ms'}, // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
  },
  variants: {
    types: {
      [ButtonTypes.Primary]: {
        ...getButtonStateStyle(ButtonTypes.Primary),
      },
      [ButtonTypes.Secondary]: {
        ...getButtonStateStyle(ButtonTypes.Secondary),
      },
      [ButtonTypes.Delete]: {
        ...getButtonStateStyle(ButtonTypes.Delete),
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        height: `${CANVAS_BUTTON_HEIGHT_LARGE}px`,
        padding: `0 ${canvas.spacing.l}`,
        minWidth: '112px',
        maxWidth: '288px',
        fontSize: '14px',
        fontWeight: 500,
      },
      [ButtonSizes.Medium]: {
        height: `${CANVAS_BUTTON_HEIGHT_MEDIUM}px`,
        padding: `0 ${canvas.spacing.m}`,
        minWidth: '80px',
        maxWidth: '200px',
        fontSize: '13px',
        fontWeight: 500,
      },
      [ButtonSizes.Small]: {
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

export const betaButtonStyles: ButtonGenericStyle = {
  // TODO (beta button): rename classname from beta-button to something
  classname: 'beta-button',
  styles: {
    ...canvasButtonStyles.styles,
    verticalAlign: 'middle',
    border: '2px solid transparent',
  },
  variants: {
    types: {
      [BetaButtonTypes.Primary]: {
        ...getButtonStateStyle(BetaButtonTypes.Primary),
      },
      [BetaButtonTypes.Secondary]: {
        ...getButtonStateStyle(BetaButtonTypes.Secondary),
      },
      [BetaButtonTypes.Delete]: {
        ...getButtonStateStyle(BetaButtonTypes.Delete),
      },
      [BetaButtonTypes.Highlight]: {
        ...getButtonStateStyle(BetaButtonTypes.Highlight),
      },
      [BetaButtonTypes.OutlinePrimary]: {
        ...getButtonStateStyle(BetaButtonTypes.OutlinePrimary),
      },
      [BetaButtonTypes.OutlineSecondary]: {
        ...getButtonStateStyle(BetaButtonTypes.OutlineSecondary),
      },
      [BetaButtonTypes.OutlineInverse]: {
        ...getButtonStateStyle(BetaButtonTypes.OutlineInverse),
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        minWidth: '112px',
        height: '48px',
        padding: '0 18px',
      },
      [ButtonSizes.Medium]: {
        minWidth: '96px',
        height: '40px',
        padding: '0 14px',
      },
      [ButtonSizes.Small]: {
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
    ...betaButtonStyles.styles,
  },
  variants: {
    types: {
      [BetaButtonTypes.Primary]: betaButtonStyles.variants!.types[BetaButtonTypes.Primary],
      [BetaButtonTypes.Secondary]: betaButtonStyles.variants!.types[BetaButtonTypes.Secondary],
    },
    sizes: {
      [ButtonSizes.Large]: betaButtonStyles.variants!.sizes.large,
      [ButtonSizes.Medium]: betaButtonStyles.variants!.sizes.medium,
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
      [TextButtonTypes.Default]: {
        ...getButtonStateStyle(TextButtonTypes.Default),
      },
      [TextButtonTypes.Inverse]: {
        ...getButtonStateStyle(TextButtonTypes.Inverse),
      },
      [TextButtonTypes.AllCaps]: {
        ...getButtonStateStyle(TextButtonTypes.Default),
        height: '32px',
      },
      [TextButtonTypes.InverseAllCaps]: {
        ...getButtonStateStyle(TextButtonTypes.Inverse),
        height: '32px',
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        height: '40px',
        padding: '0 8px',
      },
      [ButtonSizes.Small]: {
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

function getButtonStateStyle(buttonType: AllButtonTypes): CSSObject {
  const buttonColors = ButtonColors[buttonType];

  if (buttonColors == null) {
    return {};
  }

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
        borderColor: buttonColors.focusBorder,
        ...getButtonFocusRing(buttonType),
      },
    },
  };
}

function getButtonFocusRing(buttonType: AllButtonTypes): CSSObject {
  const buttonColors = ButtonColors[buttonType];

  if (buttonColors == null) {
    return {};
  }

  switch (buttonType) {
    case ButtonTypes.Primary:
    case ButtonTypes.Secondary:
      return focusRing(1);
    case BetaButtonTypes.OutlineInverse:
      return focusRing(2, 2, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    case TextButtonTypes.Default:
    case TextButtonTypes.Inverse:
    case TextButtonTypes.AllCaps:
    case TextButtonTypes.InverseAllCaps:
      return {};
    default:
      return focusRing(2, 2);
  }
}