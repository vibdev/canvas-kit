/// <reference path="../../typings.d.ts" />
import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'

import { Table } from './index'
import README from './README.md'

storiesOf('Canvas Kit/Table', module)
  .addDecorator(withReadme(README))
  .add('All', () => {
    const columns = ['ID', 'Name', 'Position', 'Location']
    const data = [
      [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
      [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
      [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
      [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
    ]
    return (
      <div className="story">
        <h1 className="section-label">Table</h1>
        <Table>
          <thead>
            <tr>{columns.map((col, i) => <th key={i}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {data.map((row, i) => <tr key={i}>{row.map((c, i) => <td key={i}>{c}</td>)}</tr>)}
          </tbody>
        </Table>
      </div>
    )
  })
