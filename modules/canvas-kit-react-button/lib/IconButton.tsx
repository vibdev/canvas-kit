import React, { Component } from 'react'
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
