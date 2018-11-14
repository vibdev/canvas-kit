import * as React from 'react';
import styled from 'react-emotion';
import {colors, depth, type, spacing} from '@workday/canvas-kit-react-core';

export interface CardProps {
  title?: React.ReactNode;
}

const Box = styled('div')(depth[2], {
  border: `1px solid ${colors.soap500}`,
  borderRadius: 3,
  padding: spacing.l,
  margin: `${spacing.s} 0`,
});

const Header = styled('div')(type.h3, {
  marginBottom: spacing.m,
});

const Body = styled('div')(type.body);

export default class Card extends React.Component<CardProps> {
  public render() {
    const {title} = this.props;

    return (
      <Box>
        {title && <Header>{title}</Header>}
        <Body>Card</Body>
      </Box>
    );
  }
}
