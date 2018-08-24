import * as React from 'react';
import * as classNames from 'classnames';
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css';
import {ReactButton, ClassNameProperties} from './types';

export interface ButtonBaseProps {
  btnClasses?: ClassNameProperties;
  btnProps?: ReactButton;
}

class ButtonBase extends React.Component<ButtonBaseProps> {
  protected static classes: ClassNameProperties = {
    'wdc-btn': true,
  };

  public render() {
    const classes: (string | ClassNameProperties | undefined | null)[] = [
      ButtonBase.classes,
      this.props.btnClasses,
    ];

    if (this.props.btnProps) {
      classes.push(this.props.btnProps.className);
    }

    return (
      <button {...this.props.btnProps} className={classNames(classes)}>
        {this.props.btnProps && this.props.btnProps.children}
      </button>
    );
  }
}

export default ButtonBase;
