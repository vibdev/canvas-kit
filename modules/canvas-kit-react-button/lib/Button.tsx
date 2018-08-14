import * as React from 'react';
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css';
import ButtonBase from './ButtonBase';
import {ReactButton, ClassNameProperties, ButtonTypes, ButtonSizes} from './types';

export interface ButtonProps {
  buttonType?: ButtonTypes;
  buttonSize?: ButtonSizes;
}

class Button extends React.Component<ReactButton & ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;

  public render() {
    const {buttonType, buttonSize, ...elemProps} = this.props;

    const classes: ClassNameProperties = {
      'wdc-btn-primary': buttonType === ButtonTypes.Primary,
      'wdc-btn-delete': buttonType === ButtonTypes.Delete,
      'wdc-btn-small': buttonSize === Button.Sizes.Small,
      'wdc-btn-medium': buttonSize === Button.Sizes.Medium,
    };

    return <ButtonBase btnClasses={classes} btnProps={elemProps} />;
  }
}

export default Button;
