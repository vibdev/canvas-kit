/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Tooltip from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Tooltip', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Tooltip</h1>
      <Tooltip title="I'm being hovered" tooltipPosition="top" showTriangle={true}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          Hover me
        </div>
      </Tooltip>
    </div>
  ));
