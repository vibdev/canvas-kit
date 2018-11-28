import * as React from 'react';
import {Interpolation} from 'emotion';
import styled from 'react-emotion';
import {colors, spacing, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import '@workday/canvas-kit-css-table/dist/canvas-kit-css-table.css';

const borderWidth = 1;
const borderColor = colors.soap400;
const cellBorder = `${borderWidth}px solid ${borderColor}`;

function makeColoredRow(_bgColor: string, _borderColor: string): Interpolation {
  return {
    backgroundColor: _bgColor,
    position: 'relative',

    // Bottom border
    '&:before, &:after': {
      position: 'absolute',
      left: 0,
      top: -borderWidth,
      content: '""',
      width: `calc(100% + ${borderWidth}px)`,
      height: borderWidth,
      backgroundColor: _borderColor,
    },

    '&:after': {
      top: 'auto',
      bottom: -borderWidth,
    },

    '&:first-child': {
      boxShadow: `inset ${borderWidth}px 0 0 ${_borderColor}`,
    },

    '&:last-child': {
      boxShadow: `inset -${borderWidth}px 0 0 ${_borderColor}`,
      '&:before, &:after': {
        width: '100%',
      },
    },
  };
}

const TableComponent = styled('table')(type.body, {
  width: '100%',
  border: cellBorder,
  borderSpacing: 0,
  textAlign: 'left',
  'th, td': {
    backgroundColor: colors.frenchVanilla100,
    padding: `${spacing.xs} ${spacing.xxs}`,
    fontSize: 13,
    borderRight: cellBorder,
    borderBottom: cellBorder,
    height: spacingNumbers.xl + spacingNumbers.xxs,
    boxSizing: 'border-box',
    transition: 'background-color 0.2s',
  },
  th: {
    height: spacing.xxl,
  },
  tr: {
    'th, td': {
      '&:last-child': {
        borderRight: 'none',
      },
    },
    '&:last-child': {
      'th, td': {
        borderBottom: 'none',
      },
    },
  },
  thead: {
    borderSpacing: 0,
    tr: {
      '&:last-child': {
        'th, td': {
          borderBottom: '1px solid transparent',
        },
      },
    },
    'th, td': {
      position: 'relative',
      backgroundColor: colors.frenchVanilla100,
      verticalAlign: 'middle', // Bottom border
      '&:after': {
        position: 'absolute',
        left: 0,
        bottom: -borderWidth,
        content: '""',
        width: `calc(100% + ${borderWidth}px)`,
        height: borderWidth,
        backgroundColor: borderColor,
      },
      '&:last-child': {
        '&:after': {
          width: '100%',
        },
      },
    },
  },
  tbody: {
    tr: {
      '&:hover': {
        'th, td': {
          backgroundColor: colors.soap300,
        },
      },
      '&:focus': {
        outline: 'none',
        'th, td': [
          makeColoredRow(colors.blueberry100, colors.blueberry500),
          {
            '&:after': {
              zIndex: 2,
            },
          },
        ],
      },
    },
  },
});

export default class Table extends React.Component<JSX.IntrinsicElements['table']> {
  public render() {
    return <TableComponent>{this.props.children}</TableComponent>;
  }
}
