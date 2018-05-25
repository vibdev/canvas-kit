import * as React from 'react'
import { CSSProperties } from 'glamorous'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'
import accentIcons, { CanvasAccentIcons as AccentIcons } from '@workday/canvas-accent-icons-web'
import Icon, { IconProps } from './Icon'
import { SpanProps } from './types'

const styles = ({ color = colors.blueberry500, transparent = false }): CSSProperties => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
})

export interface AccentIconProps extends React.HTMLProps<HTMLSpanElement> {
  name: AccentIcons
  color?: string
  transparent?: boolean
  size?: number
}

export default class AccentIcon extends React.Component<SpanProps & AccentIconProps, {}> {
  public static Icons = AccentIcons

  render() {
    const { name, color, transparent, size, ...elemProps } = this.props

    if (!(name in accentIcons)) {
      throw Error(`Icon "${this.props.name}" not found in icon set`)
    }

    const icon: string = accentIcons[name]

    return (
      <Icon icon={icon} styles={styles({ color, transparent })} size={size} elemProps={elemProps} />
    )
  }
}
