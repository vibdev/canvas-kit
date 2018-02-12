import React, { Component } from 'react'
import { CSSProperties } from 'glamorous'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'
import accentIcons, { CanvasAccentIcons as AccentIcons } from '@workday/canvas-accent-icons-web'
import Icon from './Icon'

const styles = ({ color = colors.blueberry500 }): CSSProperties => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: colors.frenchVanilla100,
  },
})

export type Props = {
  name: AccentIcons
  color?: string
}

export default class AccentIcon extends Icon<Props, {}> {
  public static Icons = AccentIcons

  constructor(props) {
    super(props, accentIcons, styles)
  }
}
