import React, { Component } from 'react'
import { CSSProperties } from 'glamorous'
import { colors } from '@workday/canvas-kit-react-core'
import systemIcons, { CanvasSystemIcons as SystemIcons } from '@workday/canvas-system-icons-web'
import Icon from './Icon'

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

export type Props = {
  name: SystemIcons
  accent?: string
  accentHover?: string
  background?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
  fill?: string
  fillHover?: string
}

export default class SystemIcon extends Icon<Props, {}> {
  public static Icons = SystemIcons

  constructor(props) {
    super(props, systemIcons, styles)
  }
}
