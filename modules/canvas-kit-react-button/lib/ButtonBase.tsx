import React, { Component } from 'react'
import classNames from 'classnames'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'
import { ClassNameProperties } from './types'

class ButtonBase<Props = {}, State = {}> extends Component<Props, State> {
  protected classes: ClassNameProperties

  protected constructor(props) {
    super(props)

    this.classes = {
      'wdc-btn': true,
    }
  }

  protected addClasses(classObj: ClassNameProperties) {
    this.classes = {
      ...this.classes,
      ...classObj,
    }
  }

  protected removeClasses(classes: [string]) {
    classes.forEach(className => delete this.classes[className])
  }

  public render() {
    return <button className={classNames(this.classes)}>{this.props.children}</button>
  }
}

export default ButtonBase
