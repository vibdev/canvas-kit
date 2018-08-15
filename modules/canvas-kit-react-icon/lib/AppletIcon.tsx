import * as React from 'react';
import {colors, BrandingColors, CSSProperties} from '@workday/canvas-kit-react-core';
import {CanvasAppletIcon, CanvasIconTypes} from '@workday/design-assets-types';
import Icon from './Icon';
import {SpanProps} from './types';

export interface AppletIconStyles {
  color?: BrandingColors;
}

const styles = ({color = BrandingColors.Blueberry}: AppletIconStyles): CSSProperties => {
  // Check if valid color
  const colorNames = {
    100: `${color}100`,
    200: `${color}200`,
    300: `${color}300`,
    400: `${color}400`,
    500: `${color}500`,
  };

  if (!(colorNames[100] in colors)) {
    throw Error(`Color "${color}" not found`);
  }

  return {
    '& .color-100': {
      fill: colors.frenchVanilla100 as string,
    },
    '& .color-200': {
      fill: colors[colorNames[200]] as string,
    },
    '& .color-300': {
      fill: colors[colorNames[300]] as string,
    },
    '& .color-400': {
      fill: colors[colorNames[400]] as string,
    },
    '& .color-400-alpha-20': {
      fill: colors[colorNames[400]] as string,
    },
    '& .color-500': {
      fill: colors[colorNames[500]] as string,
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
        icon={icon}
        type={CanvasIconTypes.Applet}
        styles={styles({color})}
        size={size}
        elemProps={elemProps}
      />
    );
  }
}
