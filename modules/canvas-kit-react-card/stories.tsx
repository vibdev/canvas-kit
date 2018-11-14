/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Card from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Card', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Card</h1>
      <Card />
    </div>
  ));
