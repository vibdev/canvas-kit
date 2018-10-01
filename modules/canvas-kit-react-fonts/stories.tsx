/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import README from './README.md';

import {injectGlobal} from 'emotion';
import fonts from './index';

// Anyone got a better idea where this should go in Storybook?
injectGlobal(...fonts);

storiesOf('Canvas Kit/Fonts', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Fonts</h1>
      <p>See the README for more information about this module.</p>
    </div>
  ));
