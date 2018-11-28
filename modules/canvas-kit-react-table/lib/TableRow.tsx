import * as React from 'react';
import {Interpolation} from 'emotion';
import styled from 'react-emotion';
import {rgba} from 'polished';
import {colors} from '@workday/canvas-kit-react-core';
import {makeColoredRow} from './Table';
import '@workday/canvas-kit-css-table/dist/canvas-kit-css-table.css';

export enum TableRowStates {
  Error,
  Alert,
  InputError,
  InputAlert,
  Hover,
  Selected,
}

export interface TableRowProps {
  state?: TableRowStates;
}

const errorColor = colors.cinnamon400;
const errorColorLight = colors.cinnamon200;
const alertColor = colors.cantaloupe400;
const alertColorLight = colors.cantaloupe200;

function makeColoredRowStyle(_bgColor: string, _borderColor: string): Interpolation {
  const lightenedBg = rgba(_bgColor, 0.2);
  return {
    'th, td': [
      makeColoredRow(lightenedBg, _bgColor),
      {
        backgroundColor: rgba(_bgColor, 0.2),
        borderLeftColor: _borderColor,
        borderRightColor: _borderColor,
      },
    ],
  };
}

function makeBorderlessStyle(_bgColor: string): Interpolation {
  return {
    'th, td': {
      backgroundColor: rgba(_bgColor, 0.2),
    },
  };
}

const Row = styled('tr')<TableRowProps>(({state}) => {
  const styles: Interpolation = [];

  switch (state) {
    case TableRowStates.InputError:
      styles.push(makeBorderlessStyle(errorColor));
      break;
    case TableRowStates.Error:
      styles.push(makeColoredRowStyle(errorColor, errorColorLight));
      break;
    case TableRowStates.InputAlert:
      styles.push(makeBorderlessStyle(alertColor));
      break;
    case TableRowStates.Alert:
      styles.push(makeColoredRowStyle(alertColor, alertColorLight));
      break;
    case TableRowStates.Selected:
      styles.push({
        'th, td': [
          makeColoredRow(colors.blueberry100, colors.blueberry500),
          {
            '&:after': {
              zIndex: 2,
            },
          },
        ],
      });
      break;
    default:
  }

  return styles;
});

export default class TableRow extends React.Component<JSX.IntrinsicElements['tr'] & TableRowProps> {
  public static States = TableRowStates;

  public render() {
    const {state, ...elemProps} = this.props;

    return <Row state={state}>{this.props.children}</Row>;
  }
}
