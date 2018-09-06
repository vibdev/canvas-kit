import * as React from 'react';
import {depth, spacing, colors} from '@workday/canvas-kit-react-core';
import {DubLogoTitle} from '@workday/canvas-kit-react-header/lib/parts';
import {cx, css} from 'emotion';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import * as chroma from 'chroma-js';

export type SmallHeaderProps = {
  title: string;
  opacity?: number;
  dubUrl?: string;
  brand?: React.ReactNode;
} & Partial<HeaderThemePropType>;

export default class SmallHeader extends React.Component<SmallHeaderProps> {
  static defaultProps = {
    theme: HeaderTheme.white,
    dubUrl: '#',
    opacity: 1,
  };

  public render() {
    const color =
      this.props.theme === HeaderTheme.white ? colors.licorice400 : colors.frenchVanilla100;
    const headerDepth = this.props.theme === HeaderTheme.white ? depth['1'] : depth['3'];
    // TODO: turn off header depth when opacity is 0
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
        this.props.theme === HeaderTheme.white
          ? chroma(colors.frenchVanilla100)
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
      <div className={cx(headerStyle)}>
        <a href={this.props.dubUrl}>
          {this.props.brand || <DubLogoTitle title={this.props.title} theme={this.props.theme} />}
        </a>
        <div className={toolbarStyle}>{this.props.children}</div>
      </div>
    );
  }
}
