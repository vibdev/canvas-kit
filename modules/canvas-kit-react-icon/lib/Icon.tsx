import React, { Component } from 'react'
import glamorous, { CSSProperties } from 'glamorous'

export type IconProps = {
  name: string
  size?: number
}

export default class Icon<Props = {}, State = {}> extends Component<IconProps & Props, State> {
  public name: string
  public size: string
  public icon: string
  public styles: [CSSProperties]

  constructor(props, iconSet, styles) {
    super(props)

    const { name, size } = props

    if (!(name in iconSet)) {
      throw Error(`Icon "${name}" not found in icon set`)
    }

    this.name = name
    this.size = size
    this.icon = iconSet[name]
    this.styles = [styles]

    if (this.size) {
      this.styles.push({
        '& svg': {
          width: `${this.size}px`,
          height: `${this.size}px`,
        },
      })
    }
  }

  public render() {
    const IconContainer = glamorous.span<Props>(this.styles)

    return <IconContainer dangerouslySetInnerHTML={{ __html: this.icon }} {...this.props} />
  }
}
