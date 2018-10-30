import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel} from './ButtonBase';
import {ButtonTypes, ButtonSizes} from './types';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, GrowthBehavior {
  /**
   * Button cannot be empty.
   */
  children: React.ReactNode;
  /**
   * Type of button.
   */
  buttonType?: ButtonTypes;
  /**
   * Size of button.
   */
  buttonSize?: ButtonSizes;
  /**
   * Ref of button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

export default class Button extends React.Component<ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps: Partial<ButtonProps> = {
    buttonSize: ButtonSizes.Large,
    buttonType: ButtonTypes.Secondary,
    grow: false,
  };

  public render() {
    const {buttonRef, ...elemProps} = this.props;

    return (
      <ButtonBaseCon {...elemProps} innerRef={buttonRef}>
        <ButtonBaseLabel buttonSize={elemProps.buttonSize}>{elemProps.children}</ButtonBaseLabel>
      </ButtonBaseCon>
    );
  }
}
