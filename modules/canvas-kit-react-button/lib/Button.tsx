import React, { Component } from 'react'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'
import ButtonBase from './ButtonBase'
import { ClassNameProperties, ButtonTypes, ButtonSizes } from './types'

export interface ButtonProps {
  buttonType?: ButtonTypes
  buttonSize?: ButtonSizes
}

class Button<Props = ButtonProps, State = {}> extends ButtonBase<Props, State> {
  public static Types = ButtonTypes
  public static Sizes = ButtonSizes

  public constructor(props) {
    super(props)

    const { buttonType, buttonSize, ...buttonProps } = props

    this.addClasses({
      'wdc-btn-primary': buttonType === ButtonTypes.Primary,
      'wdc-btn-delete': buttonType === ButtonTypes.Delete,
      'wdc-btn-small': buttonSize === Button.Sizes.Small,
      'wdc-btn-medium': buttonSize === Button.Sizes.Medium,
    })

    this.setComponentProps(buttonProps)
  }
}

export default Button
