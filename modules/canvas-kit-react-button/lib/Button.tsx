import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel} from './ButtonBase';
import {ButtonTypes, ButtonSizes, GrowthBehavior} from './types';

export interface ButtonProps {
  /**
   * Label of the button.
   */
  children: string;
  /**
   * Type of button.
   */
  buttonType?: ButtonTypes;
  /**
   * Size of button.
   */
  buttonSize?: ButtonSizes;
  /**
   * The growth behavior of the button, i.e. should it squish to its content or stretch to its container.
   */
  growthBehavior?: GrowthBehavior;
}

export default class Button extends React.Component<JSX.IntrinsicElements['button'] & ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;
  public static GrowthBehavior = GrowthBehavior;

  static defaultProps: Partial<ButtonProps> = {
    buttonSize: ButtonSizes.Large,
    buttonType: ButtonTypes.Secondary,
  };

  public render() {
    const {buttonType, buttonSize, children, growthBehavior, ...elemProps} = this.props;
    const {ref, ...elemPropsWithoutRef} = elemProps;

    return (
      <ButtonBaseCon
        buttonType={buttonType}
        buttonSize={buttonSize}
        growthBehavior={growthBehavior}
        innerRef={ref}
        {...elemPropsWithoutRef}
      >
        <ButtonBaseLabel buttonSize={buttonSize}>{children}</ButtonBaseLabel>
      </ButtonBaseCon>
    );
  }
}
