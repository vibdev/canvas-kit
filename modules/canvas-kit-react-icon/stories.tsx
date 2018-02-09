import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { colors } from '@workday/canvas-kit-react-core'

import Icon, { AccentIcons, AppletIcons, SystemIcons, IconSets } from './index' // tslint:disable-line:import-name
import README from './README.md'

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Icon</h1>
      <h2>Accent Icon</h2>
      <Icon name={AccentIcons.Shield} set={IconSets.Accent} />
      <Icon name={AccentIcons.Shield} set={IconSets.Accent} color={colors.pomegranate500} />

      <h2>Applet Icon</h2>
      <Icon name={AppletIcons.Benefits} set={IconSets.Applet} />

      <h2>System Icon</h2>
      <Icon name={SystemIcons.ActivityStream} />
      <Icon name={SystemIcons.ActivityStream} color={colors.blueberry500} />
      <Icon
        name={SystemIcons.ActivityStream}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
    </div>
  ))
