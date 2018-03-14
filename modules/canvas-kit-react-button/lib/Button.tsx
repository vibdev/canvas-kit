import React, { Component } from 'react'
import glamorous from 'glamorous'
import classNames from 'classnames'
import canvas from '@workday/canvas-kit-react-core'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'

export enum ButtonTypes {
  Primary,
  Secondary,
  Delete,
}

export enum ButtonSizes {
  Small,
  Medium,
  Large,
}

export type Props = {
  buttonType?: ButtonTypes
  buttonSize?: ButtonSizes
}

class Button extends Component<Props, {}> {
  public render() {
    const classes = classNames({
      'wdc-btn': true,
      'wdc-btn-primary': this.props.buttonType === ButtonTypes.Primary,
      'wdc-btn-delete': this.props.buttonType === ButtonTypes.Delete,
      'wdc-btn-small': this.props.buttonSize === ButtonSizes.Small,
      'wdc-btn-medium': this.props.buttonSize === ButtonSizes.Medium,
    })

    return <button className={classes}>{this.props.children}</button>
  }
}

export default Button
