import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel, ButtonLabelData, ButtonLabelIcon} from './ButtonBase';
import {ButtonTypes, ButtonSizes} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {labelDataBaseStyles} from './ButtonStyles';

export interface ButtonProps<T = ButtonTypes>
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  /**
   * Button cannot be empty.
   */
  children: React.ReactNode;
  /**
   * Type of button.
   */
  buttonType?: T;
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
   * Icon for button.
   */
  icon?: CanvasSystemIcon;
}

export default class Button extends React.Component<ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps = {
    buttonSize: ButtonSizes.Large,
    buttonType: ButtonTypes.Secondary,
    grow: false,
  };

  public render() {
    const {buttonRef, ...elemProps} = this.props;

    // Restrict Hightlight button to only being sized Large, Medium with an Icon
    if (
      elemProps.buttonType === ButtonTypes.Highlight &&
      (elemProps.icon === undefined || elemProps.buttonSize === ButtonSizes.Small)
    ) {
      return null;
    }

    return (
      <ButtonBaseCon {...elemProps} innerRef={buttonRef}>
        {elemProps.icon && <ButtonLabelIcon {...elemProps} />}
        <ButtonBaseLabel buttonSize={elemProps.buttonSize} buttonType={elemProps.buttonType}>
          {elemProps.children}
        </ButtonBaseLabel>
        {elemProps.dataLabel && (
          <ButtonLabelData className={labelDataBaseStyles.classname} {...elemProps}>
            {elemProps.dataLabel}
          </ButtonLabelData>
        )}
      </ButtonBaseCon>
    );
  }
}
