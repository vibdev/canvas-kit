import * as React from 'react';
import {getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {IconButtonTypes, ButtonSizes} from './types';
import {BaseButtonProps} from './Button';
import {iconButtonStyles} from './ButtonStyles';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

export interface IconButtonProps extends Partial<BaseButtonProps<IconButtonTypes>> {
  /**
   * Whether the icon button is toggled on or off
   */
  toggled?: boolean;
  /**
   * Size of icon button
   */
  buttonSize?: ButtonSizes.Small | ButtonSizes.Medium;
}

const IconButtonCon = styled('button')<IconButtonProps>(
  iconButtonStyles.styles,
  ({buttonType}) => getButtonStyle(iconButtonStyles, buttonType),
  ({buttonSize, buttonType}) => {
    if (buttonType === IconButtonTypes.Default) {
      switch (buttonSize) {
        case ButtonSizes.Medium:
          return iconButtonStyles.variants!.sizes.medium;
        default:
        case ButtonSizes.Small:
          return {};
      }
    } else {
      switch (buttonSize) {
        default:
        case ButtonSizes.Medium:
          return iconButtonStyles.variants!.sizes.medium;
        case ButtonSizes.Small:
          return iconButtonStyles.variants!.sizes.small;
      }
    }
  },
  ({buttonType, toggled}) => {
    if (!toggled) {
      return {};
    }

    switch (buttonType) {
      case IconButtonTypes.Default:
      default:
        return {
          '&:focus&:hover, &:focus': {
            backgroundColor: colors.blueberry400,
          },
          '&:hover': {
            backgroundColor: colors.blueberry500,
          },
          backgroundColor: colors.blueberry400,
          borderColor: colors.blueberry400,
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.frenchVanilla100),
        };
      case IconButtonTypes.IconPrimary:
        return {
          ...getBackgroundSelector(colors.blueberry400),
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
        };
      case IconButtonTypes.IconPrimaryFilled:
        return {
          backgroundColor: colors.blueberry400,
          '&:focus, &:hover': {
            backgroundColor: colors.blueberry500,
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
        };
      case IconButtonTypes.IconInverse:
        return {
          '&:hover span .wd-icon-fill, span .wd-icon-fill': {
            fill: colors.frenchVanilla100,
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.licorice200),
        };
      case IconButtonTypes.IconInverseFilled:
        return {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          '&:focus': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.licorice200),
        };
    }
  }
);

function getFillSelector(fillColor: string) {
  return {
    '&:focus span .wd-icon-fill, &:hover span .wd-icon-fill, span .wd-icon-fill': {
      fill: fillColor,
    },
  };
}

function getBackgroundSelector(fillColor: string) {
  return {
    '&:hover span .wd-icon-background, span .wd-icon-background': {
      fill: fillColor,
    },
  };
}

function getAccentSelector(fillColor: string) {
  return {
    '&:focus span .wd-icon-accent, &:hover span .wd-icon-accent, span .wd-icon-accent': {
      fill: fillColor,
    },
  };
}

export default class IconButton extends React.Component<IconButtonProps> {
  public static Types = IconButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps = {
    buttonType: IconButtonTypes.Default,
    buttonSize: ButtonSizes,
  };

  public render() {
    return (
      // TODO (breaking change): need to remove buttonType and buttonSize prop here, doesn't make sense to expose
      <IconButtonCon {...this.props} aria-pressed={this.props.toggled}>
        {this.props.icon ? <SystemIcon icon={this.props.icon} /> : this.props.children}
      </IconButtonCon>
    );
  }
}
