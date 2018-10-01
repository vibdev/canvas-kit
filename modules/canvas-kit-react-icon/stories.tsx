/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {colors} from '@workday/canvas-kit-react-core';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import {AccentIcon, AppletIcon, SystemIcon} from './index';
import README from './README.md';

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Icon</h1>
      <h2>Accent Icon</h2>
      <AccentIcon icon={shieldIcon} />
      <AccentIcon icon={shieldIcon} color={colors.pomegranate500} />
      <span
        style={{
          backgroundColor: colors.blueberry500,
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      >
        <AccentIcon icon={shieldIcon} color={colors.frenchVanilla100} transparent={true} />
      </span>
      <br />
      <AccentIcon icon={shieldIcon} size={80} />

      <h2>Applet Icon</h2>
      <AppletIcon icon={benefitsIcon} />
      <AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon icon={benefitsIcon} size={60} />

      <h2>System Icon</h2>
      <SystemIcon icon={activityStreamIcon} />
      <SystemIcon icon={activityStreamIcon} color={colors.blueberry500} />
      <SystemIcon
        icon={activityStreamIcon}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} size={48} />
    </div>
  ));
