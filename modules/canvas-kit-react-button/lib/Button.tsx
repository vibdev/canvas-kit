import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel, ButtonDataLabel, ButtonIconLabel} from './ButtonBase';
import {ButtonTypes, ButtonSizes, ButtonIconPositions} from './types';
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
  /**
   * Data label of button.
   */
  dataLabel?: String;
  /**
   * Left positioned icon for button.
   */
  leftIcon?: React.ReactNode;
  /**
   * Right positioned icon button.
   */
  rightIcon?: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps: Partial<ButtonProps> = {
    buttonSize: ButtonSizes.Large,
    buttonType: ButtonTypes.Secondary,
    grow: false,
    dataLabel: false,
    leftIcon: false,
    rightIcon: false,
  };

  public render() {
    const {buttonRef, ...elemProps} = this.props;

    return (
      <ButtonBaseCon {...elemProps} innerRef={buttonRef}>
        {elemProps.leftIcon && (
          <ButtonIconLabel
            iconPosition={ButtonIconPositions.Left}
            icon={elemProps.leftIcon}
            {...elemProps}
          />
        )}
        <ButtonBaseLabel buttonSize={elemProps.buttonSize}>{elemProps.children}</ButtonBaseLabel>
        {elemProps.dataLabel && (
          <ButtonDataLabel {...elemProps}>{elemProps.dataLabel}</ButtonDataLabel>
        )}
        {elemProps.rightIcon && (
          <ButtonIconLabel
            iconPosition={ButtonIconPositions.Right}
            icon={elemProps.rightIcon}
            {...elemProps}
          />
        )}
      </ButtonBaseCon>
    );
  }
}
