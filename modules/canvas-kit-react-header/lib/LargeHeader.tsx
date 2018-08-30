import * as React from 'react';
import WorkdayLogoTitle from '@workday/canvas-kit-react-header/lib/WorkdayLogoTitle';

import {cx, css} from 'emotion';

export interface LargeHeaderProps {
  bgColor?: string;
  mode?: 'primary' | 'secondary';
  opacity?: number;
  title: string;
}

export default class LargeHeader extends React.Component<LargeHeaderProps> {
  static defaultProps = {
    bgColor: 'white',
    mode: 'primary',
    opacity: '1',
  };

  public render() {
    const headerHeight = css({
      display: 'flex',
      alignItems: 'center',
      height: '80px',
      boxSizing: 'border-box',
      boxShadow: '0 8px 24px rgba(0,0,0,.16)',
      background: this.props.bgColor ? this.props.bgColor : 'white',
    });

    return (
      <header className={cx(headerHeight)}>
        <WorkdayLogoTitle mode={this.props.mode} title={this.props.title} />
        {this.props.children}
      </header>
    );
  }
}
