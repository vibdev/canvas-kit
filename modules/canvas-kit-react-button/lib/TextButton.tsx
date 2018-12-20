import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonSizes, IconPositions} from './types';
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
      ({buttonType}) => getButtonStyle(textButtonStyles, buttonType!),
      ({buttonSize}) => {
        const {sizes} = textButtonStyles.variants!;

        switch (buttonSize) {
          case ButtonSizes.Large:
          default:
            return sizes.large;
          case ButtonSizes.Medium:
          case ButtonSizes.Small:
            return sizes.small;
        }
      }
    );

    return (
      <TextButtonCon {...this.props}>
        {elemProps.icon &&
          elemProps.iconPosition === IconPositions.Left && (
            <ButtonLabelIcon icon={elemProps.icon} {...this.props} />
          )}
        <ButtonBaseLabel {...this.props}>{children}</ButtonBaseLabel>
        {elemProps.icon &&
          elemProps.iconPosition === IconPositions.Right && (
            <ButtonLabelIcon icon={elemProps.icon} {...this.props} />
          )}
      </TextButtonCon>
    );
  }
}
