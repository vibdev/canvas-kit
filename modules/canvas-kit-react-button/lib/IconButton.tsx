import * as React from 'react'
import * as classNames from 'classnames'
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css'
import ButtonBase from './ButtonBase'
import { ReactButton, ClassNameProperties } from './types'

class IconButton extends React.Component<ReactButton, {}> {
  protected static classes: ClassNameProperties = {
    'wdc-btn-icon': true,
  }

  public render() {
    return <ButtonBase btnClasses={IconButton.classes} btnProps={this.props} />
  }
}

export default IconButton
