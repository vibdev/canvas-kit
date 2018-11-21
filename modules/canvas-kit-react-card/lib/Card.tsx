import * as React from 'react';
import styled from 'react-emotion';
import {makeMq} from '@workday/canvas-kit-react-common';
import {colors, depth, type, spacing, spacingNumbers} from '@workday/canvas-kit-react-core';
import {CanvasSpacingValue} from '@workday/canvas-space-web';

export type CardSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  size?: CardSize;
  padding: 0 | CanvasSpacingValue;

  /**
   * An object that allows for custom specified breakpoints (sm, md, lg)
   */
  breakpoints: {
    [key: string]: number;
    sm: number;
    md: number;
    lg: number;
  };
}

const Box = styled('div')<CardProps>(
  depth[2],
  {
    border: `1px solid ${colors.soap500}`,
    borderRadius: 3,
  },
  ({padding}) => ({padding}),
  ({size, breakpoints}) => {
    if (!size) {
      return {};
    }

    const mq = makeMq(breakpoints);

    const width = `${(100 / 12) * size}%`;
    const spacingCompensation = spacingNumbers.l * 3;

    let doubledWidth;

    if (size * 2 > 6) {
      doubledWidth = '100%';
    } else {
      doubledWidth = `${(100 / 12) * size * 2}%`;
    }

    return {
      width: '100%',
      [mq.sm]: {
        width: `calc(${doubledWidth} - ${spacingCompensation}px)`,
      },
      [mq.md]: {
        width: `calc(${width} - ${spacingCompensation}px)`,
      },
    };
  }
);

const Header = styled('div')(type.h3, {
  marginBottom: spacing.m,
});

const Body = styled('div')(type.body);

export default class Card extends React.Component<CardProps> {
  public static defaultProps = {
    padding: spacing.l,
    breakpoints: {
      sm: 320,
      md: 768,
      lg: 1120,
    },
  };

  public render() {
    const {heading, size, padding, breakpoints, ...elemProps} = this.props;

    return (
      <Box size={size} padding={padding} breakpoints={breakpoints} {...elemProps}>
        {heading && <Header>{heading}</Header>}
        <Body>Card</Body>
      </Box>
    );
  }
}
