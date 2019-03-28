import * as React from 'react';
import styled from 'react-emotion';
import {GenericStyle} from '@workday/canvas-kit-react-common';
import Column, {ColumnProps} from './Column';

export interface LayoutProps {
  /**
   * Layout cannot be empty.
   */
  children: React.ReactNode;
  /**
   * Spacing of layout children.
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

  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (typeof child.type === typeof Column) {
        if (child.props.spacing || child.props.spacing === 0) {
          return child;
        }

        return React.cloneElement(child as React.ReactElement<ColumnProps>, {
          spacing: this.props.spacing,
        });
      }

      return child;
    });
  }

  public render() {
    return (
      <LayoutContainer {...this.props}>{this.renderChildren(this.props.children)}</LayoutContainer>
    );
  }
}
