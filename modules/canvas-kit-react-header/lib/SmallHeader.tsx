import * as React from 'react';
import {depth, spacing, colors} from '@workday/canvas-kit-react-core';
import {DubLogoTitle} from '@workday/canvas-kit-react-header/lib/parts';
import {cx, css} from 'emotion';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import {fontFamily} from '@workday/canvas-kit-react-header/lib/shared/styles';
import * as chroma from 'chroma-js';

export type SmallHeaderProps = {
  title: string;
  opacity?: number;
  dubUrl?: string;
  brand?: React.ReactNode;
} & Partial<HeaderThemePropType>;

export default class SmallHeader extends React.Component<SmallHeaderProps> {
  static defaultProps = {
    theme: HeaderTheme.light,
    dubUrl: '#',
    opacity: 1,
  };

  public render() {
    const color =
      this.props.theme === HeaderTheme.light ? colors.licorice400 : colors.frenchVanilla100;
    const headerDepth = this.props.theme === HeaderTheme.light ? depth['1'] : depth['3'];
    const blueberryGradient = `linear-gradient(to bottom right,
      ${chroma(colors.blueberry500)
        .alpha(this.props.opacity)
        .css()},
      ${chroma(colors.blueberry400)
        .alpha(this.props.opacity)
        .css()})`;

    const headerStyle = css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      boxSizing: 'border-box',
      background:
        this.props.theme === HeaderTheme.light
          ? chroma('white')
              .alpha(1)
              .css()
          : blueberryGradient,
      ...headerDepth,
    });

    const toolbarStyle = css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      textAlign: 'right',
      color: color,
      padding: `0 ${spacing.s}`,
    });

    return (
      <div className={cx(fontFamily, headerStyle)}>
        <a href={this.props.dubUrl}>
          {this.props.brand || <DubLogoTitle title={this.props.title} theme={this.props.theme} />}
        </a>
        <div className={toolbarStyle}>{this.props.children}</div>
      </div>
    );
  }
}
