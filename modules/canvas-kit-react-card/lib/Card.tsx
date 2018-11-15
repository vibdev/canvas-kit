import * as React from 'react';
import styled from 'react-emotion';
import {colors, depth, type, spacing, spacingNumbers} from '@workday/canvas-kit-react-core';

export type CardSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface CardProps {
  title?: React.ReactNode;
  size?: CardSize;
}

const Box = styled('div')<CardProps>(
  depth[2],
  {
    border: `1px solid ${colors.soap500}`,
    borderRadius: 3,
    padding: spacing.l,
    margin: `${spacing.s} 0`,
  },
  ({size}) => {
    if (!size) {
      return {};
    }

    const width = `${(100 / 12) * size}%`;
    const spacingCompensation = spacingNumbers.l * 3;

    return {
      width: `calc(${width} - ${spacingCompensation}px)`,
    };
  }
);

const Header = styled('div')(type.h3, {
  marginBottom: spacing.m,
});

const Body = styled('div')(type.body);

export default class Card extends React.Component<CardProps> {
  public render() {
    const {title, size} = this.props;

    return (
      <Box size={size}>
        {title && <Header>{title}</Header>}
        <Body>Card</Body>
      </Box>
    );
  }
}
