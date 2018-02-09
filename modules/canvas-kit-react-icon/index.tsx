import React, { Component } from 'react'
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

    return <span dangerouslySetInnerHTML={{ __html: icon }} {...this.props} />
  }
}
