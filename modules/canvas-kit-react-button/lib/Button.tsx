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

    this.addClasses({
      'wdc-btn-primary': props.buttonType === ButtonTypes.Primary,
      'wdc-btn-delete': props.buttonType === ButtonTypes.Delete,
      'wdc-btn-small': props.buttonSize === Button.Sizes.Small,
      'wdc-btn-medium': props.buttonSize === Button.Sizes.Medium,
    })
  }
}

export default Button
