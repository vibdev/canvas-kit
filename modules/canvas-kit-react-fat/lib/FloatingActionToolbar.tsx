import React from 'react';
import classNames from 'classnames';
import '@workday/canvas-kit-css-fat/dist/canvas-kit-css-fat.css';

export interface FloatingActionToolbarProps {
  fixed?: boolean;
}

export default class FloatingActionToolbar extends React.Component<
  JSX.IntrinsicElements['div'] & FloatingActionToolbarProps
> {
  render() {
    const {fixed, ...props} = this.props;
    const classes = {
      'wdc-fat': true,
      'wdc-fat-fixed': fixed,
    };

    return (
      <div {...props} className={classNames(classes, this.props.className)}>
        <div className="wdc-fat-container">{this.props.children}</div>
      </div>
    );
  }
}
