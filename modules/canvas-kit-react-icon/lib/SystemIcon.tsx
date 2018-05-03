import React, { Component } from 'react'
import { CSSProperties } from 'glamorous'
import { colors } from '@workday/canvas-kit-react-core'
import systemIcons, { CanvasSystemIcons as SystemIcons } from '@workday/canvas-system-icons-web'
import Icon, { IconProps } from './Icon'
import { SpanProps } from './types'

const styles = ({
  accent,
  accentHover,
  background = 'transparent',
  backgroundHover = 'transparent',
  color = colors.primary.iconStandard,
  colorHover = colors.primary.iconHover,
  fill,
  fillHover,
}): CSSProperties => ({
  '& .wd-icon-fill': {
    fill: fill || color,
  },
  ':hover .wd-icon-fill': {
    fill: fillHover || colorHover,
  },
  '& .wd-icon-accent': {
    fill: accent || color,
  },
  ':hover .wd-icon-accent': {
    fill: accentHover || colorHover,
  },
  '& .wd-icon-background': {
    fill: background,
  },
  ':hover .wd-icon-background': {
    fill: backgroundHover,
  },
})

export interface SystemIconProps {
  name: SystemIcons
  accent?: string
  accentHover?: string
  background?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
  fill?: string
  fillHover?: string
  size?: number
}

export default class SystemIcon extends Component<SpanProps & SystemIconProps, {}> {
  public static Icons = SystemIcons

  render() {
    const {
      name,
      accent,
      accentHover,
      background,
      backgroundHover,
      color,
      colorHover,
      fill,
      fillHover,
      size,
      ...elemProps
    } = this.props

    if (!(name in systemIcons)) {
      throw Error(`Icon "${name}" not found in icon set`)
    }

    const icon: string = systemIcons[name]

    const style = styles({
      accent,
      accentHover,
      background,
      backgroundHover,
      color,
      colorHover,
      fill,
      fillHover,
    })

    return <Icon icon={icon} size={size} styles={style} elemProps={elemProps} />
  }
}
