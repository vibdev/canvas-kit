/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {spacing} from '@workday/canvas-kit-react-core';

import Card from '..';
import README from '../README.md';

storiesOf('Cards', module)
  .addDecorator(withReadme(README))
  .add('Default Card', () => (
    <div className="story">
      <h1 className="section-label">Default Card</h1>
      <Card heading="Title">Card contents</Card>
    </div>
  ))
  .add('Card With No Padding', () => (
    <div className="story">
      <h1 className="section-label">Card With No Padding</h1>
      <Card heading="Title" padding={spacing.zero}>
        No padding
      </Card>
    </div>
  ));
