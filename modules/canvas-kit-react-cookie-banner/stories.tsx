/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';

import CookieBanner from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Cookie Banner', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner</h1>
      <div style={{backgroundColor: '#eff0f2', padding: 24}}>
        <CookieBanner onAccept={action('accept-cookies')} />
      </div>
    </div>
  ));
