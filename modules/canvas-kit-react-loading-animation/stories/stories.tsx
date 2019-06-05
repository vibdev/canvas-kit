/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {LoadingDots, LoadingSpinner} from '..';
import README from '../README.md';

storiesOf('Loading Animation', module)
  .addDecorator(withReadme(README))
  .add('Loading Dots', () => (
    <div className="story">
      <h1 className="section-label">Loading Dots</h1>
      <LoadingDots />
    </div>
  ))
  .add('Loading Spinner', () => (
    <div className="story">
      <h1 className="section-label">Loading Spinner</h1>
      <LoadingSpinner />
    </div>
  ));
