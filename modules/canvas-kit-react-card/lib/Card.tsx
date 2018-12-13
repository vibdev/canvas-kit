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
}

const Box = styled('div')<CardProps>(
  {
    border: `1px solid ${colors.soap500}`,
    borderRadius: 3,
  },
  ({depth}) => depth,
  ({padding}) => ({padding})
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
    const {heading, padding, ...elemProps} = this.props;

    return (
      <Box padding={padding} {...elemProps}>
        {heading && <Header>{heading}</Header>}
        <Body>{this.props.children}</Body>
      </Box>
    );
  }
}
