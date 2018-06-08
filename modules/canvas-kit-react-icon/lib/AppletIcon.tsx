import * as React from 'react'
import { CSSProperties } from 'glamorous'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'
import { CanvasAppletIcon, IconTypes } from '@workday/icon-utils/types/icon'
import Icon from './Icon'
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
  icon: CanvasAppletIcon
  color?: BrandingColors
  size?: number
}

export default class AppletIcon extends React.Component<SpanProps & AppletIconProps> {
  public static Colors = BrandingColors

  public render() {
    const { icon, color, size, ...elemProps } = this.props

    return (
      <Icon icon={icon} type={IconTypes.Applet} styles={styles({ color })} elemProps={elemProps} />
    )
  }
}
