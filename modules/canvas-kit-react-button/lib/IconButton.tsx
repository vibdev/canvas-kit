import React, { Component } from 'react'
import glamorous from 'glamorous'
import classNames from 'classnames'
import canvas from '@workday/canvas-kit-react-core'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'
import ButtonBase from './ButtonBase'

class IconButton extends ButtonBase<{}, {}> {
  public constructor(props) {
    super(props)

    this.addClasses({
      'wdc-btn-icon': true,
    })
  }
}

export default IconButton
