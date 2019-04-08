/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {colors} from '@workday/canvas-kit-react-core';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {
  badgeAchievementGraphic,
  emptyStateCheckmarkCircleGraphic,
} from '@workday/canvas-graphics-web';

import {AccentIcon, AppletIcon, SystemIcon, Graphic} from './index';
import README from './README.md';

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('Accent Icon', () => (
    <div className="story">
      <h1 className="section-label">Accent Icon</h1>
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
    </div>
  ))
  .add('Applet Icon', () => (
    <div className="story">
      <h1 className="section-label">Applet Icon</h1>
      <AppletIcon icon={benefitsIcon} />
      <AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon icon={benefitsIcon} size={60} />
    </div>
  ))
  .add('System Icon', () => (
    <div className="story">
      <h1 className="section-label">System Icon</h1>
      <SystemIcon icon={activityStreamIcon} />
      <SystemIcon icon={activityStreamIcon} color={colors.blueberry500} />
      <SystemIcon
        className="custom-class"
        icon={activityStreamIcon}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} size={48} />
    </div>
  ));
