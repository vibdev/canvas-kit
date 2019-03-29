import * as React from 'react';
import styled from 'react-emotion';

export interface ColumnProps {
  /**
   * Column cannot be empty.
   */
  children?: React.ReactNode;
  /**
   * Spacing of columns.
   */
  spacing?: number;
  /**
   * Widths of columns.
   */
  columns?: number;
  /**
   * Fixed width of columns
   */
  width?: number | string;
}

const ColumnContainer = styled('div')<ColumnProps>(
  {
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  ({spacing}) => {
    if (spacing === 0) {
      return;
    }

    if (!spacing) {
      return {padding: `0 12px`};
    }

    return {padding: `0 ${spacing}px`};
  },
  ({columns, width}) => {
    if (width) {
      return {width};
    }

    if (columns) {
      return {width: `${(columns / 12) * 100}%`};
    }

    return {flex: 1};
  }
);

export default class Column extends React.Component<ColumnProps> {
  public render() {
    return <ColumnContainer {...this.props}>{this.props.children}</ColumnContainer>;
  }
}
