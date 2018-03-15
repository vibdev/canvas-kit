import React, { Component } from 'react'
import glamorous from 'glamorous'
import classNames from 'classnames'
import canvas from '@workday/canvas-kit-react-core'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'
import Button, { ButtonTypes } from './Button'

export type IconButtonProps = {
  buttonType?: ButtonTypes
}

class IconButton extends Button<IconButtonProps, {}> {
  public constructor(props) {
    super(props)

    this.addClasses({
      'wdc-btn-icon': true,
    })

    this.removeClasses(['wdc-btn-small', 'wdc-btn-medium'])
  }
}

export default IconButton
