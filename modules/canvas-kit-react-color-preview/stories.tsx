/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import ColorPreview from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Color Preview', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Color Preview</h1>
      <ColorPreview value="FFCC00" />
    </div>
  ));
