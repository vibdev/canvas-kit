import * as React from 'react';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {colors} from '@workday/canvas-kit-react-core';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';

export type HeaderIconProps = {
  icon: CanvasSystemIcon;
} & Partial<HeaderThemePropType>;

export class HeaderIcon extends React.Component<HeaderIconProps> {
  static defaultProps = {
    theme: HeaderTheme.white,
  };

  render() {
    const color =
      this.props.theme === HeaderTheme.white ? colors.licorice200 : colors.frenchVanilla100;
    const colorHover =
      this.props.theme === HeaderTheme.white ? colors.licorice500 : colors.frenchVanilla400;
    return <SystemIcon icon={this.props.icon} color={color} colorHover={colorHover} />;
  }
}
