import * as React from 'react';
import styled from 'react-emotion';
import {colors, depth as depthValues, type, spacing} from '@workday/canvas-kit-react-core';
import {CanvasSpacingValue} from '@workday/canvas-space-web';
import {CanvasDepthValue} from '@workday/canvas-depth-web';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Heading at the top of the card.
   */
  heading?: React.ReactNode;

  /**
   * Padding of the card.
   */
  padding: 0 | CanvasSpacingValue;

  /**
   * Depth of the card.
   */
  depth: CanvasDepthValue;

  /**
   * Width of the card.
   */
  width?: number | string;

  /**
   * Height of the card.
   */
  height?: number | string;
}

const Box = styled('div')<CardProps>(
  {
    border: `1px solid ${colors.soap500}`,
    borderRadius: 3,
    boxSizing: 'border-box',
  },
  ({depth}) => depth,
  ({padding}) => ({padding}),
  ({width}) => width && {width},
  ({height}) => height && {height}
);

const Header = styled('div')(type.h3, {
  marginBottom: spacing.m,
});

const Body = styled('div')(type.body);

export default class Card extends React.Component<CardProps> {
  public static defaultProps = {
    depth: depthValues[2],
    padding: spacing.l,
  };

  public render() {
    const {heading, ...elemProps} = this.props;

    return (
      <Box {...elemProps}>
        {heading && <Header>{heading}</Header>}
        <Body>{this.props.children}</Body>
      </Box>
    );
  }
}
