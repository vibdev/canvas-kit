import React, { Component } from 'react'
import glamorous from 'glamorous'
import canvas from '@workday/canvas-kit-react-core'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'

class Button extends Component<{}, {}> {
  public render() {
    return <button className="wdc-btn">{this.props.children}</button>
  }
}

export default Button
