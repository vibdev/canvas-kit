import React, { Component } from 'react'
import { CSSProperties } from 'glamorous'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'
import accentIcons, { CanvasAccentIcons as AccentIcons } from '@workday/canvas-accent-icons-web'
import Icon, { IconProps } from './Icon'

const styles = ({ color = colors.blueberry500, transparent = false }): CSSProperties => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
})

export type AccentIconProps = {
  name: AccentIcons
  color?: string
  transparent?: boolean
  size?: number
}

export default class AccentIcon extends Component<AccentIconProps, {}> {
  public static Icons = AccentIcons

  render() {
    if (!(this.props.name in accentIcons)) {
      throw Error(`Icon "${this.props.name}" not found in icon set`)
    }

    const icon: string = accentIcons[this.props.name]

    return <Icon icon={icon} styles={styles} size={this.props.size} {...this.props} />
  }
}
