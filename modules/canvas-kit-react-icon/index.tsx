import React, { Component } from 'react'
import glamorous from 'glamorous'
import { colors } from '@workday/canvas-kit-react-core'
import accentIcons, { CanvasAccentIcons as AccentIcons } from '@workday/canvas-accent-icons-web'
import appletIcons, { CanvasAppletIcons as AppletIcons } from '@workday/canvas-applet-icons-web'
import systemIcons, { CanvasSystemIcons as SystemIcons } from '@workday/canvas-system-icons-web'

export enum IconSets {
  Accent,
  Applet,
  System,
}

export { AccentIcons, AppletIcons, SystemIcons }

type ContainerProps = {
  accent?: string
  accentHover?: string
  background?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
  fill?: string
  fillHover?: string
}

type Props = {
  name: string
  set?: IconSets
} & ContainerProps

export default class Icon extends Component<Props, {}> {
  public render() {
    const { name, set } = this.props
    let iconSet

    switch (set) {
      case IconSets.Accent:
        iconSet = accentIcons
        break
      case IconSets.Applet:
        iconSet = appletIcons
        break
      case IconSets.System:
      default:
        iconSet = systemIcons
    }

    if (!(name in iconSet)) {
      throw Error(`Icon "${name}" not found in "${IconSets[set]}" icon set`)
    }

    const icon = iconSet[name]

    const IconContainer = glamorous.span<ContainerProps>(
      ({
        accent,
        accentHover,
        background = 'transparent',
        backgroundHover = 'transparent',
        color = colors.primary.iconStandard,
        colorHover = colors.primary.iconHover,
        fill,
        fillHover,
      }) => ({
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
    )

    return <IconContainer dangerouslySetInnerHTML={{ __html: icon }} {...this.props} />
  }
}
