import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';
import Icon from './Icon';
import {SpanProps} from './types';

export interface SystemIconStyles {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   */
  accent?: string;
  /**
   * The accent color of the SystemIcon on hover. This overrides `colorHover`.
   */
  accentHover?: string;
  /**
   * The background color of the SystemIcon.
   * @default transparent
   */
  background?: string;
  /**
   * The background color of the SystemIcon on hover.
   * @default transparent
   */
  backgroundHover?: string;
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overriden by `accent` and `fill`.
   * @default colors.primary.iconStandard
   */
  color?: string;
  /**
   * The hover color of the SystemIcon. This defines `accentHover` and `fillHover`. `colorHover` may be overriden by `accentHover` and `fillHover`.
   * @default colors.primary.iconHover
   */
  colorHover?: string;
  /**
   * The fill color of the SystemIcon. This overrides `color`.
   */
  fill?: string;
  /**
   * The fill color of the SystemIcon on hover. This overrides `colorHover`.
   */
  fillHover?: string;
}

export interface SystemIconProps extends SystemIconStyles {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in `px`.
   */
  size?: number;
}

export const systemIconStyles = ({
  accent,
  accentHover,
  background = 'transparent',
  backgroundHover = 'transparent',
  color = iconColors.standard,
  colorHover = iconColors.hover,
  fill,
  fillHover,
}: SystemIconStyles): CSSObject => ({
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
});

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

    const style = systemIconStyles({
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
        src={icon}
        type={CanvasIconTypes.System}
        size={size}
        styles={style}
        elemProps={elemProps}
      />
    );
  }
}
