import React, { Component } from 'react'
import classNames from 'classnames'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'
import { ReactButton, ClassNameProperties } from './types'

export interface ButtonBaseProps {
  btnClasses?: ClassNameProperties
  btnProps?: ReactButton
}

class ButtonBase extends Component<ButtonBaseProps, {}> {
  protected static classes: ClassNameProperties = {
    'wdc-btn': true,
  }

  public render() {
    const classes = classNames(
      ButtonBase.classes,
      this.props.btnClasses,
      this.props.btnProps.className
    )
    return (
      <button {...this.props.btnProps} className={classes}>
        {this.props.btnProps.children}
      </button>
    )
  }
}

export default ButtonBase
