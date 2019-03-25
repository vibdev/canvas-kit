import * as React from 'react';
import styled from 'react-emotion';
import {GenericStyle} from '@workday/canvas-kit-react-common';
import Column from './Column';

export interface LayoutProps {
  /**
   * Layout cannot be empty.
   */
  children: React.ReactNode;
  /**
   * Spacing of layout.
   */
  spacing?: number;
  /**
   * Gutter of layout
   */
  gutter?: number;
  /**
   * Content spacing
   */
  content?: boolean;
}

const LayoutStyles: GenericStyle = {
  classname: 'layout',
  styles: {
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
  },
};

const LayoutContainer = styled('div')<LayoutProps>(
  LayoutStyles.styles,
  ({gutter}) => {
    if (gutter === 0) {
      return;
    }

    return {padding: `0 ${gutter}px`};
  },
  ({content}) => {
    if (!content) {
      return;
    }

    return {
      maxWidth: '1280px',
      margin: '0 auto',
    };
  }
);

export default class Layout extends React.Component<LayoutProps> {
  static defaultProps = {
    gutter: 12,
  };

  public static Column = Column;
  public render() {
    return <LayoutContainer {...this.props}>{this.props.children}</LayoutContainer>;
  }
}
