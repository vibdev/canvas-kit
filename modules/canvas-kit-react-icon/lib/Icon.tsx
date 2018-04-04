import React, { Component } from 'react'
import glamorous, { CSSProperties } from 'glamorous'

export type CSSPropertiesFunction = (...args: any[]) => CSSProperties

export interface IconProps {
  icon: string
  styles: CSSProperties | CSSPropertiesFunction
  size?: number
}

export default class Icon extends Component<IconProps, {}> {
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

    const IconContainer = glamorous.span<IconProps>(styles)

    return <IconContainer dangerouslySetInnerHTML={{ __html: this.props.icon }} {...this.props} />
  }
}
