import * as React from 'react';
import styled from 'react-emotion';
import {ButtonSizes, ButtonTypes} from './types';
import canvas from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {ButtonProps} from './Button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';

export const BUTTON_HEIGHT_LARGE: number = 40;
export const BUTTON_HEIGHT_MEDIUM: number = 24;
export const BUTTON_HEIGHT_SMALL: number = 18;

export const ButtonBaseCon = styled('button')<ButtonProps>(
  // TODO: Support data-whatinput='input'
  ({buttonType}) => {
    return getButtonBase(buttonType);
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
      ...(buttonColors.iconColors && {
        '.wd-icon': {...ButtonStyles.iconBaseStyles},
        '.wd-icon-fill': {
          fill: buttonColors.iconColors.color,
        },
      }),
      ':focus, :hover:focus': {
        backgroundColor: buttonColors.focusBackground,
        borderColor: buttonColors.focusBorder,
        color: buttonColors.focusText,
        ...(buttonColors.iconColors && {
          '.wd-icon-fill': {
            fill: buttonColors.iconColors.colorFocus,
          },
        }),
      },
      ':active, :focus:active, :hover:active': {
        backgroundColor: buttonColors.activeBackground,
        borderColor: buttonColors.activeBorder,
        color: buttonColors.activeText,
        ...(buttonColors.iconColors && {
          '.wd-icon-fill': {
            fill: buttonColors.iconColors.colorActive,
          },
        }),
      },
      ':hover': {
        backgroundColor: buttonColors.hoverBackground,
        borderColor: buttonColors.hoverBorder,
        color: buttonColors.hoverText,
        ...(buttonColors.iconColors && {
          '.wd-icon-fill': {
            fill: buttonColors.iconColors.colorHover,
          },
        }),
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
  ButtonStyles.labelBaseStyles,
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

export const ButtonDataLabel = styled('span')<ButtonProps>(({buttonType}) => {
  return ButtonStyles.dataLabelBaseStyles;
});

export class ButtonIcon extends React.Component<ButtonProps> {
  render() {
    return <SystemIcon icon={this.props.icon} />;
  }
}

function getButtonBase(buttonType: ButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
    case ButtonTypes.Secondary:
    case ButtonTypes.Delete:
    default:
      return ButtonStyles.canvasBaseStyles;
    case ButtonTypes.UdePrimary:
    case ButtonTypes.UdeSecondary:
    case ButtonTypes.Highlight:
    case ButtonTypes.OutlineBlue:
    case ButtonTypes.OutlineDark:
    case ButtonTypes.OutlineWhite:
      return ButtonStyles.udeBaseStyles;
    case ButtonTypes.Text:
    case ButtonTypes.TextDark:
      return ButtonStyles.textBaseStyles;
  }
}

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
      return ButtonStyles.highlightColors;
    case ButtonTypes.OutlineBlue:
      return ButtonStyles.outlineBlueColors;
    case ButtonTypes.OutlineDark:
      return ButtonStyles.outlineDarkColors;
    case ButtonTypes.OutlineWhite:
      return ButtonStyles.outlineWhiteColors;
    case ButtonTypes.Text:
      return ButtonStyles.textColors;
    case ButtonTypes.TextDark:
      return ButtonStyles.textDarkColors;
    case ButtonTypes.UdePrimary:
      return ButtonStyles.udePrimaryColors;
    case ButtonTypes.UdeSecondary:
      return ButtonStyles.udeSecondaryColors;
  }
}
