import * as React from 'react'
import glamorous, { CSSProperties } from 'glamorous'
import CanvasIcon, { IconTypes } from '@workday/icon-utils/types/icon'
import { SpanProps } from './types'
import { validateIconType } from './utils'

export type CSSPropertiesFunction = (...args: any[]) => CSSProperties

export interface IconProps {
  icon: CanvasIcon
  styles: CSSProperties | CSSPropertiesFunction
  size?: number
  elemProps?: SpanProps
  type: IconTypes
}

export default class Icon extends React.Component<IconProps> {
  public render() {
    // Validation for JS
    try {
      validateIconType(this.props.icon, this.props.type)
    } catch (e) {
      console.error(e)
      return null
    }

    const styles = [this.props.styles]

    if ('size' in this.props) {
      styles.push({
        '& svg': {
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
        },
      })
    }

    const IconContainer = glamorous.span<{}>(styles)

    return (
      <span {...this.props.elemProps}>
        <IconContainer dangerouslySetInnerHTML={{ __html: this.props.icon.svg }} />
      </span>
    )
  }
}
