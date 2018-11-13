import * as React from 'react';
import {colors, CSSProperties} from '@workday/canvas-kit-react-core';
import {CanvasAccentIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AccentIconStyles {
  color?: string;
  transparent?: boolean;
}

const styles = ({
  color = colors.blueberry500,
  transparent = false,
}: AccentIconStyles): CSSProperties => ({
  '& .color-500': {
    fill: color,
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
});

export interface AccentIconProps extends AccentIconStyles {
  icon: CanvasAccentIcon;
  size?: number;
}

export default class AccentIcon extends React.Component<SpanProps & AccentIconProps> {
  render() {
    const {icon, color, transparent, size, ...elemProps} = this.props;

    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.Accent}
        styles={styles({color, transparent})}
        size={size}
        elemProps={elemProps}
      />
    );
  }
}
