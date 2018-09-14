import * as React from 'react';
import {DubLogoProduct} from './parts';
import {colors, depth} from '@workday/canvas-kit-react-core';
import {cx, css} from 'emotion';

export default class ProductHeader extends React.Component {
  public render() {
    const headerHeight = css({
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      boxSizing: 'border-box',
      backgroundColor: colors.frenchVanilla100,
      ...depth['1'],
    });

    return (
      <div className={cx(headerHeight)}>
        <DubLogoProduct />
        {this.props.children}
      </div>
    );
  }
}
