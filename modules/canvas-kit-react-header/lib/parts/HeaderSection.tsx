import * as React from 'react';
import {css, cx} from 'emotion';
import {verticalCenterStyle} from '../shared/styles';
import {spacing} from '@workday/canvas-kit-react-core';

export type HeaderSectionProps = {
  last?: boolean;
};

export class HeaderSection extends React.Component<HeaderSectionProps> {
  render() {
    const sectionPadding = css({
      padding: this.props.last ? `0 0 0 ${spacing.s}` : `0 ${spacing.s}`,
    });

    return <div className={cx(verticalCenterStyle, sectionPadding)}>{this.props.children}</div>;
  }
}
