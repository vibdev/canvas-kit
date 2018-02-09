import React, { Component } from 'react'
import glamorous, { CSSProperties } from 'glamorous'

export default class Icon<Props = {}, State = {}> extends Component<Props, State> {
  public name: string
  public icon: string
  public styles: CSSProperties

  constructor(props, iconSet, styles) {
    super(props)

    const { name } = props

    if (!(name in iconSet)) {
      throw Error(`Icon "${name}" not found in icon set`)
    }

    this.name = name
    this.icon = iconSet[name]
    this.styles = styles
  }

  public render() {
    const IconContainer = glamorous.span<Props>(this.styles)

    return <IconContainer dangerouslySetInnerHTML={{ __html: this.icon }} {...this.props} />
  }
}
