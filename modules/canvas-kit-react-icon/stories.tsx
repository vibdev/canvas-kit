import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { colors, BrandingColors } from '@workday/canvas-kit-react-core'

import { AccentIcon, AccentIcons, AppletIcon, AppletIcons, SystemIcon, SystemIcons } from './index'
import README from './README.md'

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Icon</h1>
      <h2>Accent Icon</h2>
      <AccentIcon name={AccentIcons.Shield} />
      <AccentIcon name={AccentIcons.Shield} color={colors.pomegranate500} />

      <h2>Applet Icon</h2>
      <AppletIcon name={AppletIcons.Benefits} />
      <AppletIcon name={AppletIcons.Benefits} color={BrandingColors.Pomegranate} />

      <h2>System Icon</h2>
      <SystemIcon name={SystemIcons.ActivityStream} />
      <SystemIcon name={SystemIcons.ActivityStream} color={colors.blueberry500} />
      <SystemIcon
        name={SystemIcons.ActivityStream}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
    </div>
  ))
