import * as React from 'react';
import styled from 'react-emotion';
import {ButtonSizes, ButtonTypes} from './types';
import {ButtonProps} from './Button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';

export const ButtonBaseCon = styled('button')<ButtonProps>(
  // TODO: Support data-whatinput='input'
  ({buttonType, buttonSize}) => {
    /* istanbul ignore next line for coverage */
    if (buttonType === undefined || buttonSize === undefined) {
      return {};
    }

    return getButtonStyle(buttonType, buttonSize);
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
    const {sizes} = ButtonStyles.labelBaseStyles.variants;

    switch (buttonSize) {
      case ButtonSizes.Small:
        return sizes.small;
      case ButtonSizes.Medium:
        return sizes.medium;
      default:
        return sizes.large;
    }
  },
  ({buttonType}) => {
    switch (buttonType) {
      case ButtonTypes.TextAllCaps:
      case ButtonTypes.TextDarkAllCaps:
        return ButtonStyles.labelBaseStyles.variants.types.textAllCaps;
      default:
        return {};
    }
  }
);

export const ButtonDataLabel = styled('span')<ButtonProps>(
  ButtonStyles.dataLabelBaseStyles.styles,
  ({buttonSize}) => {
    const {sizes} = ButtonStyles.dataLabelBaseStyles.variants;
    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Medium:
        return sizes.medium;
    }
  }
);

const ButtonIconLabelStyled = styled('span')<ButtonProps>(({buttonType, buttonSize}) => {
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
      return ButtonStyles.iconLabelBaseStyles.variants.sizes.large;
    case ButtonSizes.Medium:
      return ButtonStyles.iconLabelBaseStyles.variants.sizes.medium;
  }
});

export class ButtonIconLabel extends React.Component<ButtonProps> {
  public render() {
    if (this.props.icon === undefined) {
      return {};
    }

    return (
      <ButtonIconLabelStyled {...this.props}>
        <SystemIcon icon={this.props.icon} />
      </ButtonIconLabelStyled>
    );
  }
}

function getButtonStyle(buttonType: ButtonTypes, buttonSize: ButtonSizes) {
  const baseButton = getBaseButton(buttonType);
  let sizeStyle, variantStyle;

  switch (buttonSize) {
    case ButtonSizes.Large:
      sizeStyle = baseButton.variants.sizes.large;
      break;
    case ButtonSizes.Medium:
    default:
      sizeStyle = baseButton.variants.sizes.medium;
      break;
    case ButtonSizes.Small:
      sizeStyle = baseButton.variants.sizes.small;
      break;
  }

  switch (buttonType) {
    case ButtonTypes.Primary:
    default:
      variantStyle = baseButton.variants.types.primary;
      break;
    case ButtonTypes.Secondary:
      variantStyle = baseButton.variants.types.secondary;
      break;
    case ButtonTypes.Delete:
      variantStyle = baseButton.variants.types.delete;
      break;
    case ButtonTypes.Highlight:
      variantStyle = baseButton.variants.types.highlight;
      break;
    case ButtonTypes.OutlineBlue:
      variantStyle = baseButton.variants.types.outlineBlue;
      break;
    case ButtonTypes.OutlineDark:
      variantStyle = baseButton.variants.types.outlineDark;
      break;
    case ButtonTypes.OutlineWhite:
      variantStyle = baseButton.variants.types.outlineWhite;
      break;
    case ButtonTypes.UdePrimary:
      variantStyle = baseButton.variants.types.udePrimary;
      break;
    case ButtonTypes.UdeSecondary:
      variantStyle = baseButton.variants.types.udeSecondary;
      break;
    case ButtonTypes.Text:
      variantStyle = baseButton.variants.types.text;
      break;
    case ButtonTypes.TextDark:
      variantStyle = baseButton.variants.types.textDark;
      break;
    case ButtonTypes.TextAllCaps:
      variantStyle = baseButton.variants.types.textAllCaps;
      break;
    case ButtonTypes.TextDarkAllCaps:
      variantStyle = baseButton.variants.types.textDarkAllCaps;
      break;
  }

  return {...baseButton.styles, ...sizeStyle, ...variantStyle};
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
