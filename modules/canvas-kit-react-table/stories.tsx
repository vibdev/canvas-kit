/// <reference path="../../typings.d.ts" />
import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'

import { Table } from './index'
import README from './README.md'

storiesOf('Canvas Kit/Table', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Table</h1>
      <Table />
    </div>
  ))
