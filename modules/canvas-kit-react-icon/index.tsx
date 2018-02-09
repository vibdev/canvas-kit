import React, { Component } from 'react'
import glamorous from 'glamorous'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'
import accentIcons, { CanvasAccentIcons as AccentIcons } from '@workday/canvas-accent-icons-web'
import appletIcons, { CanvasAppletIcons as AppletIcons } from '@workday/canvas-applet-icons-web'
import systemIcons, { CanvasSystemIcons as SystemIcons } from '@workday/canvas-system-icons-web'

export enum IconSets {
  Accent,
  Applet,
  System,
}

export { AccentIcons, AppletIcons, SystemIcons }

const accentIconStyles = ({ color = colors.blueberry500 }) => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: colors.frenchVanilla100,
  },
})

const appletIconStyles = ({ color = BrandingColors.Blueberry }) => {
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

const systemIconStyles = ({
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
    let iconStyles

    switch (set) {
      case IconSets.Accent:
        iconSet = accentIcons
        iconStyles = accentIconStyles
        break
      case IconSets.Applet:
        iconSet = appletIcons
        iconStyles = appletIconStyles
        break
      case IconSets.System:
      default:
        iconSet = systemIcons
        iconStyles = systemIconStyles
    }

    if (!(name in iconSet)) {
      throw Error(`Icon "${name}" not found in "${IconSets[set]}" icon set`)
    }

    const icon = iconSet[name]

    const IconContainer = glamorous.span<ContainerProps>(iconStyles)

    return <IconContainer dangerouslySetInnerHTML={{ __html: icon }} {...this.props} />
  }
}
