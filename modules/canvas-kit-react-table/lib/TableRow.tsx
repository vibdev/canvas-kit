import React, { Component } from 'react'
import classNames from 'classnames'
import '@workday/canvas-kit-css-table/dist/canvas-kit-css-table.css'

export enum TableRowStates {
  Error,
  Alert,
  InputError,
  InputAlert,
  Hover,
  Selected,
}

export interface TableRowProps {
  state?: TableRowStates
}

export default class TableRow extends Component<JSX.IntrinsicElements['tr'] & TableRowProps, {}> {
  public static States = TableRowStates

  public render() {
    const { state, ...elemProps } = this.props
    const classes = {
      'wdc-table-row-error': state === TableRowStates.Error,
      'wdc-table-row-alert': state === TableRowStates.Alert,
      'wdc-table-row-error-borderless': state === TableRowStates.InputError,
      'wdc-table-row-alert-borderless': state === TableRowStates.InputAlert,
      'wdc-table-row-hover': state === TableRowStates.Hover,
      'wdc-table-row-selected': state === TableRowStates.Selected,
    }

    return (
      <tr {...this.props} className={classNames(classes)}>
        {this.props.children}
      </tr>
    )
  }
}
