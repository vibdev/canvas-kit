import * as React from 'react'
import { CSSProperties } from 'glamorous'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'
import appletIcons, { CanvasAppletIcons as AppletIcons } from '@workday/canvas-applet-icons-web'
import Icon, { IconProps } from './Icon'
import { SpanProps } from './types'

const styles = ({ color = BrandingColors.Blueberry }): CSSProperties => {
  // Check if valid color
  if (!(`${color}100` in colors)) {
    throw Error(`Color "${color}" not found`)
  }

  return {
    '& .color-100': {
      fill: colors.frenchVanilla100,
    },
    '& .color-200': {
      fill: colors[`${color}200`],
    },
    '& .color-300': {
      fill: colors[`${color}300`],
    },
    '& .color-400': {
      fill: colors[`${color}400`],
    },
    '& .color-400-alpha-20': {
      fill: colors[`${color}400`],
    },
    '& .color-500': {
      fill: colors[`${color}500`],
    },
  }
}

export interface AppletIconProps {
  name: AppletIcons
  color?: BrandingColors
  size?: number
}

export default class AppletIcon extends React.Component<SpanProps & AppletIconProps> {
  public static Icons = AppletIcons
  public static Colors = BrandingColors

  public render() {
    const { name, color, size, ...elemProps } = this.props

    if (!(name in appletIcons)) {
      throw Error(`Icon "${name}" not found in icon set`)
    }

    const icon: string = appletIcons[name]

    return <Icon icon={icon} styles={styles({ color })} elemProps={elemProps} />
  }
}
