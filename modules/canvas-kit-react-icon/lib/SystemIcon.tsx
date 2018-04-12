import React, { Component } from 'react'
import { CSSProperties } from 'glamorous'
import { colors } from '@workday/canvas-kit-react-core'
import systemIcons, { CanvasSystemIcons as SystemIcons } from '@workday/canvas-system-icons-web'
import Icon, { IconProps } from './Icon'

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

export default class SystemIcon extends Component<SystemIconProps, {}> {
  public static Icons = SystemIcons

  render() {
    if (!(this.props.name in systemIcons)) {
      throw Error(`Icon "${this.props.name}" not found in icon set`)
    }

    const icon: string = systemIcons[this.props.name]

    return <Icon icon={icon} styles={styles} {...this.props} />
  }
}
