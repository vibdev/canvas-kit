import * as React from 'react';
import styled from 'react-emotion';
import {ButtonSizes, ButtonTypes, IconPositions} from './types';
import {ButtonProps} from './Button';
import {TextButtonProps} from './TextButton';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';
import {GenericStyle} from '@workday/canvas-kit-react-common';

export const ButtonBaseCon = styled('button')<ButtonProps>(
  // TODO: Support data-whatinput='input'
  ({buttonType}) => {
    /* istanbul ignore next line for coverage */
    if (buttonType === undefined) {
      return {};
    }

    const baseButton = getBaseButton(buttonType);
    return baseButton.styles;
  },
  ({buttonType}) => {
    if (buttonType === undefined) {
      return {};
    }

    const baseButton = getBaseButton(buttonType);
    return getButtonStyle(baseButton, buttonType);
  },
  ({buttonType, buttonSize}) => {
    if (buttonType === undefined || buttonSize === undefined) {
      return {};
    }

    const baseButton = getBaseButton(buttonType);
    return getButtonSize(baseButton, buttonSize);
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
    const {sizes} = ButtonStyles.labelBaseStyles.variants!;

    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Small:
        return sizes.small;
      case ButtonSizes.Medium:
        return sizes.medium;
    }
  },
  ({buttonType}) => {
    switch (buttonType) {
      case ButtonTypes.Text:
      case ButtonTypes.TextDark:
        return ButtonStyles.labelBaseStyles.variants!.types.text;
      case ButtonTypes.TextAllCaps:
      case ButtonTypes.TextDarkAllCaps:
        return ButtonStyles.labelBaseStyles.variants!.types.textAllCaps;
      default:
        return {};
    }
  }
);

export const ButtonDataLabel = styled('span')<ButtonProps>(
  ButtonStyles.dataLabelBaseStyles.styles,
  ({buttonSize}) => {
    const {sizes} = ButtonStyles.dataLabelBaseStyles.variants!;
    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Medium:
        return sizes.medium;
    }
  }
);

const ButtonIconLabelStyled = styled('span')<TextButtonProps>(
  ButtonStyles.iconLabelBaseStyles.styles,
  ({buttonType, buttonSize}) => {
    if (buttonType === ButtonTypes.Dropdown) {
      switch (buttonSize) {
        case ButtonSizes.Large:
        default:
          return {padding: '0 8px 0 0'};
        case ButtonSizes.Medium:
          return {padding: '0 4px 0 0'};
      }
    }

    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return ButtonStyles.iconLabelBaseStyles.variants!.sizes.large;
      case ButtonSizes.Medium:
        return ButtonStyles.iconLabelBaseStyles.variants!.sizes.medium;
    }
  },
  ({iconPosition}) => {
    if (iconPosition === undefined) {
      return {};
    }

    switch (iconPosition) {
      case IconPositions.Left:
      default:
        return ButtonStyles.iconLabelBaseStyles.variants!.types.iconPositionLeft;
      case IconPositions.Right:
        return ButtonStyles.iconLabelBaseStyles.variants!.types.iconPositionRight;
    }
  }
);

export class ButtonIconLabel extends React.Component<ButtonProps> {
  public render() {
    if (this.props.icon === undefined) {
      return {};
    }

    let iconSize = 24;

    if (this.props.buttonSize === ButtonSizes.Small) {
      iconSize = 20;
    }

    return (
      <ButtonIconLabelStyled {...this.props}>
        <SystemIcon size={iconSize} icon={this.props.icon} />
      </ButtonIconLabelStyled>
    );
  }
}

function getButtonSize(baseButton: GenericStyle, buttonSize: ButtonSizes) {
  switch (buttonSize) {
    case ButtonSizes.Large:
      return baseButton.variants!.sizes.large;
    case ButtonSizes.Medium:
    default:
      return baseButton.variants!.sizes.medium;
    case ButtonSizes.Small:
      return baseButton.variants!.sizes.small;
  }
}

function getButtonStyle(baseButton: GenericStyle, buttonType: ButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
    default:
      return baseButton.variants!.types.primary;
    case ButtonTypes.Secondary:
      return baseButton.variants!.types.secondary;
    case ButtonTypes.Delete:
      return baseButton.variants!.types.delete;
    case ButtonTypes.Highlight:
      return baseButton.variants!.types.highlight;
    case ButtonTypes.OutlineBlue:
      return baseButton.variants!.types.outlineBlue;
    case ButtonTypes.OutlineDark:
      return baseButton.variants!.types.outlineDark;
    case ButtonTypes.OutlineWhite:
      return baseButton.variants!.types.outlineWhite;
    case ButtonTypes.UdePrimary:
      return baseButton.variants!.types.udePrimary;
    case ButtonTypes.UdeSecondary:
      return baseButton.variants!.types.udeSecondary;
    case ButtonTypes.Text:
      return baseButton.variants!.types.text;
    case ButtonTypes.TextDark:
      return baseButton.variants!.types.textDark;
    case ButtonTypes.TextAllCaps:
      return baseButton.variants!.types.textAllCaps;
    case ButtonTypes.TextDarkAllCaps:
      return baseButton.variants!.types.textDarkAllCaps;
  }
}

function getBaseButton(buttonType: ButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
    case ButtonTypes.Secondary:
    case ButtonTypes.Delete:
    default:
      return ButtonStyles.canvasButtonStyles;
    case ButtonTypes.UdePrimary:
    case ButtonTypes.UdeSecondary:
    case ButtonTypes.Highlight:
    case ButtonTypes.OutlineBlue:
    case ButtonTypes.OutlineDark:
    case ButtonTypes.OutlineWhite:
      return ButtonStyles.udeButtonStyles;
    case ButtonTypes.Text:
    case ButtonTypes.TextDark:
    case ButtonTypes.TextAllCaps:
    case ButtonTypes.TextDarkAllCaps:
      return ButtonStyles.textButtonStyles;
    case ButtonTypes.Dropdown:
      return ButtonStyles.dropdownButtonStyles;
  }
}
