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

export interface ButtonProps {
  buttonType?: ButtonTypes
  buttonSize?: ButtonSizes
}

export interface ClassNameProperties {
  [key: string]: boolean
}

class Button<Props = ButtonProps, State = {}> extends Component<Props, State> {
  protected classes: ClassNameProperties

  public constructor(props) {
    super(props)

    this.classes = {
      'wdc-btn': true,
      'wdc-btn-primary': props.buttonType === ButtonTypes.Primary,
      'wdc-btn-delete': props.buttonType === ButtonTypes.Delete,
      'wdc-btn-small': props.buttonSize === ButtonSizes.Small,
      'wdc-btn-medium': props.buttonSize === ButtonSizes.Medium,
    }
  }

  protected addClasses(classObj: ClassNameProperties) {
    this.classes = {
      ...this.classes,
      ...classObj,
    }
  }

  protected removeClasses(classes) {
    classes.forEach(className => delete this.classes[className])
  }

  public render() {
    return <button className={classNames(this.classes)}>{this.props.children}</button>
  }
}

export default Button
