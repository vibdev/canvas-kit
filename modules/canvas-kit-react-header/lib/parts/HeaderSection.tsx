import * as React from 'react';
import {css, cx} from 'emotion';
import {HeaderPartPropType} from '../shared/types';
import {verticalCenterStyle} from '../shared/styles';
import {spacing} from '@workday/canvas-kit-react-core';

export type HeaderSectionProp = Partial<HeaderPartPropType>;

export class HeaderSection extends React.Component<HeaderSectionProp> {
  render() {
    const sectionPadding = css({
      padding: this.props.last ? `0 0 0 ${spacing.xs}` : `0 ${spacing.xs}`,
    });

    return <div className={cx(verticalCenterStyle, sectionPadding)}>{this.props.children}</div>;
  }
}
