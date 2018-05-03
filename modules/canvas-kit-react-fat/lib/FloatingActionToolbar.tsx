import React, { Component } from 'react'
import '@workday/canvas-kit-css-fat/dist/canvas-kit-css-fat.css'

export default class FloatingActionToolbar extends Component<JSX.IntrinsicElements['div'], {}> {
  render() {
    return (
      <div className="wdc-fat" {...this.props}>
        <div className="wdc-fat-container">{this.props.children}</div>
      </div>
    )
  }
}
