import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel, ButtonDataLabel, ButtonIconLabel} from './ButtonBase';
import {ButtonTypes, ButtonSizes} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {dataLabelBaseStyles} from './ButtonStyles';

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
   * Icon for button.
   */
  icon?: CanvasSystemIcon;
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

    // Restrict Hightlight button to only being sized Large, Medium with an Icon
    if (
      elemProps.buttonType === ButtonTypes.Highlight &&
      (elemProps.icon === undefined || elemProps.buttonSize === ButtonSizes.Small)
    ) {
      return null;
    }

    return (
      <ButtonBaseCon {...elemProps} innerRef={buttonRef}>
        {elemProps.icon && <ButtonIconLabel {...elemProps} />}
        <ButtonBaseLabel buttonSize={elemProps.buttonSize} buttonType={elemProps.buttonType}>
          {elemProps.children}
        </ButtonBaseLabel>
        {elemProps.dataLabel && (
          <ButtonDataLabel className={dataLabelBaseStyles.classname} {...elemProps}>
            {elemProps.dataLabel}
          </ButtonDataLabel>
        )}
      </ButtonBaseCon>
    );
  }
}
