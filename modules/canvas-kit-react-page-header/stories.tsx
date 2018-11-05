/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PageHeader from './index'; // tslint:disable-line:import-name
import README from './README.md';

import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

storiesOf('Canvas Kit/Page Header', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Page Header</h1>
      <PageHeader title="Product Context">
        <SystemIcon icon={exportIcon} />
        <SystemIcon icon={fullscreenIcon} />
      </PageHeader>
      <PageHeader title="Marketing Context" marketing={true}>
        <SystemIcon icon={exportIcon} />
        <SystemIcon icon={fullscreenIcon} />
      </PageHeader>
    </div>
  ));
