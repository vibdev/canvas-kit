import * as React from 'react';
import {DubLogoProduct} from './DubLogoProduct';

import {cx, css} from 'emotion';

export default class ProductHeader extends React.Component {
  public render() {
    const headerHeight = css({
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      boxSizing: 'border-box',
      boxShadow: '0 8px 24px rgba(0,0,0,.16)',
    });

    return (
      <header className={cx(headerHeight)}>
        <DubLogoProduct />
        {this.props.children}
      </header>
    );
  }
}
