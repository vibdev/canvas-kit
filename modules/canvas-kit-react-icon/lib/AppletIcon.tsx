import * as React from 'react';
import {colors, BrandingColors, CSSProperties} from '@workday/canvas-kit-react-core';
import {CanvasAppletIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AppletIconStyles {
  color?: BrandingColors;
}

type CanvasColor = Exclude<keyof typeof colors, 'gradients' | 'primary'>;

const styles = ({color = BrandingColors.Blueberry}: AppletIconStyles): CSSProperties => {
  // Check if valid color
  if (!Object.values(BrandingColors).includes(color)) {
    throw Error(`Color "${color}" not found`);
  }

  const colorNames: {[key: number]: CanvasColor} = {
    100: `${color}100` as CanvasColor,
    200: `${color}200` as CanvasColor,
    300: `${color}300` as CanvasColor,
    400: `${color}400` as CanvasColor,
    500: `${color}500` as CanvasColor,
  };

  return {
    '& .color-100': {
      fill: colors.frenchVanilla100,
    },
    '& .color-200': {
      fill: colors[colorNames[200]],
    },
    '& .color-300': {
      fill: colors[colorNames[300]],
    },
    '& .color-400': {
      fill: colors[colorNames[400]],
    },
    '& .color-400-alpha-20': {
      fill: colors[colorNames[400]],
    },
    '& .color-500': {
      fill: colors[colorNames[500]],
    },
  };
};

export interface AppletIconProps extends AppletIconStyles {
  icon: CanvasAppletIcon;
  size?: number;
}

export default class AppletIcon extends React.Component<SpanProps & AppletIconProps> {
  public static Colors = BrandingColors;

  public render() {
    const {icon, color, size, ...elemProps} = this.props;

    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.Applet}
        styles={styles({color})}
        size={size}
        elemProps={elemProps}
      />
    );
  }
}
