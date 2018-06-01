import * as React from 'react'
import * as classNames from 'classnames'
import '@workday/canvas-kit-css-fat/dist/canvas-kit-css-fat.css'

export interface FloatingActionToolbarProps {
  fixed?: boolean
}

export default class FloatingActionToolbar extends React.Component<
  JSX.IntrinsicElements['div'] & FloatingActionToolbarProps
> {
  render() {
    const classes = {
      'wdc-fat': true,
      'wdc-fat-fixed': this.props.fixed,
    }

    return (
      <div {...this.props} className={classNames(classes, this.props.className)}>
        <div className="wdc-fat-container">{this.props.children}</div>
      </div>
    )
  }
}
