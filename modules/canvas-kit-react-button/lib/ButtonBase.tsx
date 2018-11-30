import * as React from 'react';
import styled from 'react-emotion';
import {ButtonSizes, ButtonTypes, ButtonIconPositions} from './types';
import canvas from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {ButtonProps} from './Button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';

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
  ({buttonSize, buttonType}) => {
    const buttonSizeStyles = getButtonSize(buttonType);

    switch (buttonSize) {
      case ButtonSizes.Large:
        return buttonSizeStyles.large;
      case ButtonSizes.Medium:
        return buttonSizeStyles.medium;
      case ButtonSizes.Small:
        return buttonSizeStyles.small;
      default:
        return {height: `${ButtonStyles.CANVAS_BUTTON_HEIGHT_LARGE}px`, padding: 0};
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
  ButtonStyles.labelBaseStyles.styles,
  ({buttonSize}) => {
    const {variants} = ButtonStyles.labelBaseStyles;
    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return variants.large;
      case ButtonSizes.Medium:
        return variants.medium;
      case ButtonSizes.Small:
        return variants.small;
    }
  }
);

export const ButtonDataLabel = styled('span')<ButtonProps>(
  ButtonStyles.dataLabelBaseStyles.styles,
  ({buttonSize}) => {
    const {variants} = ButtonStyles.dataLabelBaseStyles;
    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return variants.large;
      case ButtonSizes.Medium:
        return variants.medium;
    }
  }
);

const ButtonIconLabelStyled = styled('span')<ButtonProps>(({iconPosition, buttonSize}) => {
  switch (buttonSize) {
    case ButtonSizes.Large:
    default:
      switch (iconPosition) {
        case ButtonIconPositions.Left:
        default:
          return ButtonStyles.iconLabelBaseStyles.variants.large.iconLeft;
        case ButtonIconPositions.Right:
          return ButtonStyles.iconLabelBaseStyles.variants.large.iconRight;
      }
    case ButtonSizes.Medium:
      switch (iconPosition) {
        case ButtonIconPositions.Left:
        default:
          return ButtonStyles.iconLabelBaseStyles.variants.medium.iconLeft;
        case ButtonIconPositions.Right:
          return ButtonStyles.iconLabelBaseStyles.variants.medium.iconRight;
      }
  }
});

export class ButtonIconLabel extends React.Component<ButtonProps> {
  public render() {
    return (
      <ButtonIconLabelStyled {...this.props}>
        <SystemIcon icon={this.props.icon} />
      </ButtonIconLabelStyled>
    );
  }
}

function getButtonSize(buttonType: ButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
    case ButtonTypes.Secondary:
    case ButtonTypes.Delete:
    default:
      return ButtonStyles.canvasSizes;
    case ButtonTypes.UdePrimary:
    case ButtonTypes.UdeSecondary:
    case ButtonTypes.Highlight:
    case ButtonTypes.OutlineBlue:
    case ButtonTypes.OutlineDark:
    case ButtonTypes.OutlineWhite:
      return ButtonStyles.udeSizes;
    case ButtonTypes.Text:
    case ButtonTypes.TextDark:
      return ButtonStyles.textSizes;
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
