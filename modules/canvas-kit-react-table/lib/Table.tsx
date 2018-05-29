import * as React from 'react'
import * as classNames from 'classnames'
import '@workday/canvas-kit-css-table/dist/canvas-kit-css-table.css'

export default class Table extends React.Component<JSX.IntrinsicElements['table']> {
  public render() {
    return (
      <table {...this.props} className={classNames('wdc-table', this.props.className)}>
        {this.props.children}
      </table>
    )
  }
}
