import * as React from 'react'
import { CSSProperties } from 'glamorous'
import { colors } from '@workday/canvas-kit-react-core'
import { CanvasAccentIcon, CanvasIconTypes } from '@workday/design-assets-types'
import Icon, { IconProps } from './Icon'
import { SpanProps } from './types'

const styles = ({ color = colors.blueberry500, transparent = false }): CSSProperties => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
})

export interface AccentIconProps extends React.HTMLProps<HTMLSpanElement> {
  icon: CanvasAccentIcon
  color?: string
  transparent?: boolean
  size?: number
}

export default class AccentIcon extends React.Component<SpanProps & AccentIconProps> {
  render() {
    const { icon, color, transparent, size, ...elemProps } = this.props

    return (
      <Icon
        icon={icon}
        type={CanvasIconTypes.Accent}
        styles={styles({ color, transparent })}
        size={size}
        elemProps={elemProps}
      />
    )
  }
}
