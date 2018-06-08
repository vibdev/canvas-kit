import * as React from 'react'
import glamorous, { CSSProperties } from 'glamorous'
import CanvasIcon from '@workday/icon-utils/types/icon'
import { SpanProps } from './types'

export type CSSPropertiesFunction = (...args: any[]) => CSSProperties

export interface IconProps {
  icon: CanvasIcon
  styles: CSSProperties | CSSPropertiesFunction
  size?: number
  elemProps?: SpanProps
}

export default class Icon extends React.Component<IconProps> {
  public render() {
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
