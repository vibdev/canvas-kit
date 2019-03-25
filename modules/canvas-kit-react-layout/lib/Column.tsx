import * as React from 'react';
import styled from 'react-emotion';

export interface ColumnProps {
  children: React.ReactNode;
  spacing?: number;
  columns?: number;
}

const ColumnContainer = styled('div')<ColumnProps>(
  ({spacing}) => {
    if (spacing === 0) {
      return;
    }

    return {padding: `${spacing}px`};
  },
  ({columns}) => {
    if (!columns) {
      return {flex: 1};
    }

    return {width: `${(columns / 12) * 100}%`};
  }
);

export default class Column extends React.Component<ColumnProps> {
  static defaultProps = {
    spacing: 12,
  };

  public render() {
    return <ColumnContainer {...this.props}>{this.props.children}</ColumnContainer>;
  }
}
