import * as React from 'react';
import styled from 'react-emotion';

export interface ColumnProps {
  /**
   * Column cannot be empty.
   */
  children: React.ReactNode;
  /**
   * Spacing of columns.
   */
  spacing?: number;
  /**
   * Widths of columns.
   */
  columns?: number;
}

const ColumnContainer = styled('div')<ColumnProps>(
  ({spacing}) => {
    if (spacing === 0) {
      return;
    }

    if (!spacing) {
      return {padding: `0 12px`};
    }

    return {padding: `0 ${spacing}px`};
  },
  ({columns}) => {
    if (!columns) {
      return {flex: 1};
    }

    return {width: `${(columns / 12) * 100}%`};
  }
);

export default class Column extends React.Component<ColumnProps> {
  public render() {
    return <ColumnContainer {...this.props}>{this.props.children}</ColumnContainer>;
  }
}
