import * as React from 'react';
import styled from 'react-emotion';
import {colors, depth as depthValues, type, spacing} from '@workday/canvas-kit-react-core';
import {CanvasSpacingValue} from '@workday/canvas-space-web';
import {CanvasDepthValue} from '@workday/canvas-depth-web';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title of the card
   */
  heading?: React.ReactNode;

  /**
   * Padding within card contents
   */
  padding: 0 | CanvasSpacingValue;

  /**
   * Depth of card
   */
  depth: CanvasDepthValue;

  /**
   * If true, the button's will grow to its container's width.
   */
  grow?: boolean;

  /**
   * Width of card
   */
  width?: number | string;

  /**
   * Height of card
   */
  height?: number | string;
}

const Box = styled('div')<CardProps>(
  {
    border: `1px solid ${colors.soap500}`,
    borderRadius: 3,
  },
  ({depth}) => depth,
  ({padding}) => ({padding}),
  ({grow}) => grow && {width: '100%', maxWidth: '100%'},
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
