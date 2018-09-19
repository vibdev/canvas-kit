import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel} from './ButtonBase';
import {ButtonTypes, ButtonSizes} from './types';
import {GrowthBehavior} from '../../common/types';

export interface ButtonProps extends GrowthBehavior {
  /**
   * The text or a single ReactElement to be used as the label of the button.
   */
  children: React.ReactChild;
  /**
   * Type of button.
   */
  buttonType?: ButtonTypes;
  /**
   * Size of button.
   */
  buttonSize?: ButtonSizes;
}

export default class Button extends React.Component<JSX.IntrinsicElements['button'] & ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps: Partial<ButtonProps> = {
    buttonSize: ButtonSizes.Large,
    buttonType: ButtonTypes.Secondary,
    grow: false,
  };

  public render() {
    const {buttonType, buttonSize, children, grow, ...elemProps} = this.props;
    const {ref, ...elemPropsWithoutRef} = elemProps;

    return (
      <ButtonBaseCon
        buttonType={buttonType}
        buttonSize={buttonSize}
        grow={grow}
        innerRef={ref}
        {...elemPropsWithoutRef}
      >
        <ButtonBaseLabel buttonSize={buttonSize}>{children}</ButtonBaseLabel>
      </ButtonBaseCon>
    );
  }
}
