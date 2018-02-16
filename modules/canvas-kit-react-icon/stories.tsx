import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { colors } from '@workday/canvas-kit-react-core'

import { AccentIcon, AppletIcon, SystemIcon } from './index'
import README from './README.md'

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Icon</h1>
      <h2>Accent Icon</h2>
      <AccentIcon name={AccentIcon.Icons.Shield} />
      <AccentIcon name={AccentIcon.Icons.Shield} color={colors.pomegranate500} />
      <br />
      <AccentIcon name={AccentIcon.Icons.Shield} size={80} />

      <h2>Applet Icon</h2>
      <AppletIcon name={AppletIcon.Icons.Benefits} />
      <AppletIcon name={AppletIcon.Icons.Benefits} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon name={AppletIcon.Icons.Benefits} size={60} />

      <h2>System Icon</h2>
      <SystemIcon name={SystemIcon.Icons.ActivityStream} />
      <SystemIcon name={SystemIcon.Icons.ActivityStream} color={colors.blueberry500} />
      <SystemIcon
        name={SystemIcon.Icons.ActivityStream}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
      <br />
      <SystemIcon name={SystemIcon.Icons.ActivityStream} size={48} />
    </div>
  ))
