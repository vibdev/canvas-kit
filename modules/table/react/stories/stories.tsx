/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Table, TableRow} from '..';
import README from '../README.md';

enum TableFilters {
  all = 'all',
  alerts = 'alerts',
  errors = 'errors',
  selected = 'selected',
  none = 'none',
}

const columns = ['ID', 'Name', 'Position', 'Location'];
const data = [
  {
    data: [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
    state: undefined,
    filter: ['all'],
  },
  {
    data: [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
    state: TableRow.State.Error,
    filter: ['errors', 'all'],
  },
  {
    data: [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
    state: TableRow.State.InputError,
    filter: ['errors', 'all'],
  },
  {
    data: [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
    state: TableRow.State.Alert,
    filter: ['alerts', 'all'],
  },
  {
    data: [5, 'John Hours', 'Product Manager', 'New York, New York'],
    state: TableRow.State.InputAlert,
    filter: ['alerts', 'all'],
  },
  {
    data: [6, 'Leslie Lang', 'Software Architect', 'New York, New York'],
    state: TableRow.State.Hover,
    filter: ['all'],
  },
  {
    data: [7, 'Mary Pratt', 'Sr. Software Architect', 'New York, New York'],
    state: TableRow.State.Selected,
    filter: ['selected', 'all'],
  },
];

const createTable = (filter?: TableFilters) => {
  const rows = data.map((row, i) => {
    const cols = row.data.map((c, idx) => <td key={idx}>{c}</td>);
    const rowState = row.filter.includes(filter || '') ? row.state : undefined;

    return (
      <TableRow key={i} state={rowState}>
        {cols}
      </TableRow>
    );
  });

  return (
    <Table>
      <thead>
        <TableRow header={true}>
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </TableRow>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

storiesOf('Table', module)
  .addDecorator(withReadme(README))
  .add('Default', () => {
    return (
      <div className="story">
        <h1 className="section-label">Default Table</h1>
        {createTable()}
      </div>
    );
  })
  .add('With Alerts', () => (
    <div className="story">
      <h1 className="section-label">Table With Alerts</h1>
      {createTable(TableFilters.alerts)}
    </div>
  ))
  .add('With Errors', () => (
    <div className="story">
      <h1 className="section-label">Table With Errors</h1>
      {createTable(TableFilters.errors)}
    </div>
  ))
  .add('With Selected Rows', () => (
    <div className="story">
      <h1 className="section-label">Table With Selected Rows</h1>
      {createTable(TableFilters.selected)}
    </div>
  ))
  .add('With All Elements', () => (
    <div className="story">
      <h1 className="section-label">Table With All Elements</h1>
      {createTable(TableFilters.all)}
    </div>
  ));
