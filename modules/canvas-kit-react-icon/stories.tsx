/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {colors} from '@workday/canvas-kit-react-core';
import shield from '@workday/canvas-accent-icons-web/dist/es6/shield';
import benefits from '@workday/canvas-applet-icons-web/dist/es6/benefits';
import activityStream from '@workday/canvas-system-icons-web/dist/es6/activityStream';

import {AccentIcon, AppletIcon, SystemIcon} from './index';
import README from './README.md';

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Icon</h1>
      <h2>Accent Icon</h2>
      <AccentIcon icon={shield} />
      <AccentIcon icon={shield} color={colors.pomegranate500} />
      <div style={{backgroundColor: colors.blueberry500, display: 'inline-block'}}>
        <AccentIcon icon={shield} color={colors.frenchVanilla100} transparent={true} />
      </div>
      <br />
      <AccentIcon icon={shield} size={80} />

      <h2>Applet Icon</h2>
      <AppletIcon icon={benefits} />
      <AppletIcon icon={benefits} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon icon={benefits} size={60} />

      <h2>System Icon</h2>
      <SystemIcon icon={activityStream} />
      <SystemIcon icon={activityStream} color={colors.blueberry500} />
      <SystemIcon
        icon={activityStream}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
      <br />
      <SystemIcon icon={activityStream} size={48} />
    </div>
  ));
