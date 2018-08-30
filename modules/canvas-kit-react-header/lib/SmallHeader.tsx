import * as React from 'react';
import {DubLogoTitle} from './DubLogoTitle';

import {cx, css} from 'emotion';

export interface SmallHeaderProps {
  bgColor?: string;
  opacity?: number;
  mode?: 'primary' | 'secondary';
  title: string;
}

export default class SmallHeader extends React.Component<SmallHeaderProps> {
  public render() {
    const headerHeight = css({
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      boxSizing: 'border-box',
      boxShadow: '0 8px 24px rgba(0,0,0,.16)',
      background: this.props.bgColor ? this.props.bgColor : 'white',
    });

    return (
      <header className={cx(headerHeight)}>
        <DubLogoTitle title={this.props.title} mode={this.props.mode} />
        {this.props.children}
      </header>
    );
  }
}
