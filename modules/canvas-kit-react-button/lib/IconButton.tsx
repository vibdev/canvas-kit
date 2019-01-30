import * as React from 'react';
import {getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {IconButtonTypes} from './types';
import {BaseButtonProps} from './Button';
import {iconButtonStyles} from './ButtonStyles';
import {colors} from '@workday/canvas-kit-react-core';

export interface IconButtonProps extends BaseButtonProps<IconButtonTypes> {
  toggled?: boolean;
}

const IconButtonCon = styled('button')<IconButtonProps>(
  iconButtonStyles.styles,
  ({buttonType}) => getButtonStyle(iconButtonStyles, buttonType),
  ({buttonType, toggled}) => {
    if (!toggled) {
      return {};
    }

    switch (buttonType) {
      default:
        return {};
      case IconButtonTypes.Default:
        return {
          '&:focus&:hover, &:focus': {
            backgroundColor: colors.blueberry500,
          },
          '&:hover': {
            backgroundColor: colors.blueberry400,
          },
          backgroundColor: colors.blueberry500,
          borderColor: colors.blueberry500,
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

  static defaultProps = {
    buttonType: IconButtonTypes.Default,
  };

  public render() {
    return (
      // TODO (breaking change): need to remove buttonType and buttonSize prop here, doesn't make sense to expose
      <IconButtonCon {...this.props} buttonSize={undefined} aria-pressed={this.props.toggled} />
    );
  }
}
