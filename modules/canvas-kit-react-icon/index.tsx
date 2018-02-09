import React, { Component } from 'react'
import glamorous from 'glamorous'
import { colors } from '@workday/canvas-kit-react-core'
import canvasAccentIconsWeb, {
  CanvasAccentIcons as AccentIcons,
} from '@workday/canvas-accent-icons-web'
import canvasAppletIconsWeb, {
  CanvasAppletIcons as AppletIcons,
} from '@workday/canvas-applet-icons-web'
import canvasSystemIconsWeb, {
  CanvasSystemIcons as SystemIcons,
} from '@workday/canvas-system-icons-web'

export enum IconSets {
  Accent,
  Applet,
  System,
}

export { AccentIcons, AppletIcons, SystemIcons }

type Props = {
  name: string
  set?: IconSets
}

export default class Icon extends Component<Props, {}> {
  public render() {
    let iconSet

    switch (this.props.set) {
      case IconSets.Accent:
        iconSet = canvasAccentIconsWeb
        break
      case IconSets.Applet:
        iconSet = canvasAppletIconsWeb
        break
      case IconSets.System:
      default:
        iconSet = canvasSystemIconsWeb
    }

    if (!(this.props.name in iconSet)) {
      throw Error(`Icon "${this.props.name}" not found in "${IconSets[this.props.set]}" icon set`)
    }

    const icon = iconSet[this.props.name]

    const IconContainer = glamorous.span({
      '& .wd-icon-fill': {
        fill: colors.primary.iconStandard,
      },
      ':hover .wd-icon-fill': {
        fill: colors.primary.iconHover,
      },
      '& .wd-icon-accent': {
        fill: colors.primary.iconStandard,
      },
      ':hover .wd-icon-accent': {
        fill: colors.primary.iconHover,
      },
      '& .wd-icon-background': {
        fill: 'transparent',
      },
    })

    return <IconContainer dangerouslySetInnerHTML={{ __html: icon }} {...this.props} />
  }
}
