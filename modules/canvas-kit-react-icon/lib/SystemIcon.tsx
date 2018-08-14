import * as React from 'react';
import {iconColors, CSSProperties} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Icon from './Icon';
import {SpanProps} from './types';

const styles = ({
  accent,
  accentHover,
  background = 'transparent',
  backgroundHover = 'transparent',
  color = iconColors.standard,
  colorHover = iconColors.hover,
  fill,
  fillHover,
}): CSSProperties => ({
  '& .wd-icon-fill': {
    fill: fill != null ? fill : color,
  },
  ':hover .wd-icon-fill': {
    fill: fillHover != null ? fillHover : colorHover,
  },
  '& .wd-icon-accent': {
    fill: accent != null ? accent : color,
  },
  ':hover .wd-icon-accent': {
    fill: accentHover != null ? accentHover : colorHover,
  },
  '& .wd-icon-background': {
    fill: background,
  },
  ':hover .wd-icon-background': {
    fill: backgroundHover,
  },
});

export interface SystemIconProps {
  icon: CanvasSystemIcon;
  accent?: string;
  accentHover?: string;
  background?: string;
  backgroundHover?: string;
  color?: string;
  colorHover?: string;
  fill?: string;
  fillHover?: string;
  size?: number;
}

export default class SystemIcon extends React.Component<SpanProps & SystemIconProps> {
  render() {
    const {
      icon,
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
    } = this.props;

    const style = styles({
      accent,
      accentHover,
      background,
      backgroundHover,
      color,
      colorHover,
      fill,
      fillHover,
    });

    return (
      <Icon
        icon={icon}
        type={CanvasIconTypes.System}
        size={size}
        styles={style}
        elemProps={elemProps}
      />
    );
  }
}
