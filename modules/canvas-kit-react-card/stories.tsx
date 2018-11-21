/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Card, {CardSize} from './index'; // tslint:disable-line:import-name
import README from './README.md';

const cards = Array.from(Array(12).keys()).map(size => (
  <Card heading="Title" size={(size + 1) as CardSize} key={size} />
));

storiesOf('Canvas Kit/Card', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Card</h1>
      {cards}
    </div>
  ))
  .add('No Padding', () => (
    <div className="story">
      <h1 className="section-label">Card</h1>
      <Card heading="Title" size={4} padding={0} />
    </div>
  ));
