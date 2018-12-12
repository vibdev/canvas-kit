import * as React from 'react';
import {ButtonBaseLabel, ButtonIconLabel} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonTypes, ButtonSizes, IconPositions} from './types';
import {ButtonProps} from './Button';
import {textButtonStyles} from './ButtonStyles';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';

export interface TextButtonProps extends ButtonProps, GrowthBehavior {
  iconPosition?: IconPositions;
}

export default class TextButton extends React.Component<TextButtonProps> {
  public static IconPositions = IconPositions;

  static defaultProps: Partial<TextButtonProps> = {
    iconPosition: IconPositions.Left,
  };

  public render() {
    const {children, ...elemProps} = this.props;

    const TextButtonCon = styled('button')<TextButtonProps>(
      textButtonStyles.styles,
      ({buttonType}) => {
        switch (buttonType) {
          case ButtonTypes.Text:
          default:
            return textButtonStyles.variants!.types.text;
          case ButtonTypes.TextDark:
            return textButtonStyles.variants!.types.textDark;
          case ButtonTypes.TextAllCaps:
            return textButtonStyles.variants!.types.textAllCaps;
          case ButtonTypes.TextDarkAllCaps:
            return textButtonStyles.variants!.types.textDarkAllCaps;
        }
      },
      ({buttonSize}) => {
        switch (buttonSize) {
          case ButtonSizes.Large:
          default:
            return textButtonStyles.variants!.sizes.large;
          case ButtonSizes.Medium:
          case ButtonSizes.Small:
            return textButtonStyles.variants!.sizes.small;
        }
      }
    );

    return (
      <TextButtonCon {...this.props}>
        {elemProps.icon &&
          elemProps.iconPosition === IconPositions.Left && (
            <ButtonIconLabel icon={elemProps.icon} {...this.props} />
          )}
        <ButtonBaseLabel {...this.props}>{children}</ButtonBaseLabel>
        {elemProps.icon &&
          elemProps.iconPosition === IconPositions.Right && (
            <ButtonIconLabel icon={elemProps.icon} {...this.props} />
          )}
      </TextButtonCon>
    );
  }
}
