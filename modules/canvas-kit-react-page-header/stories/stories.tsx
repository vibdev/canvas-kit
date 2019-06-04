/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PageHeader from '..';
import README from '../README.md';

import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

storiesOf('Page Header', module)
  .addDecorator(withReadme(README))
  .add('Product Page Header', () => (
    <div className="story">
      <h1 className="section-label">Product Page Header</h1>
      <PageHeader title="Product Context">
        <a href="#">
          <SystemIcon icon={exportIcon} />
        </a>
        <a href="#">
          <SystemIcon icon={fullscreenIcon} />
        </a>
      </PageHeader>
    </div>
  ))
  .add('Marketing Page Header', () => (
    <div className="story">
      <h1 className="section-label">Marketing Page Header</h1>
      <PageHeader title="Marketing Context" marketing={true}>
        <a href="#">
          <SystemIcon icon={exportIcon} />
        </a>
        <a href="#">
          <SystemIcon icon={fullscreenIcon} />
        </a>
      </PageHeader>
    </div>
  ));
