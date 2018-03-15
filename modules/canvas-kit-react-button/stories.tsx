/// <reference path="../../typings.d.ts" />
import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { SystemIcon } from '@workday/canvas-kit-react-icon'

import { Button, ButtonTypes, ButtonSizes, IconButton } from './index' // tslint:disable-line:import-name
import README from './README.md'

storiesOf('Canvas Kit/Button', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Button</h1>
      <Button buttonType={ButtonTypes.Primary}>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button buttonType={ButtonTypes.Delete}>Delete Button</Button>

      <br />

      <Button buttonType={ButtonTypes.Primary} buttonSize={ButtonSizes.Medium}>
        Primary Button
      </Button>
      <Button buttonSize={ButtonSizes.Medium}>Secondary Button</Button>
      <Button buttonType={ButtonTypes.Delete} buttonSize={ButtonSizes.Medium}>
        Delete Button
      </Button>

      <br />

      <Button buttonSize={ButtonSizes.Small}>Secondary Button</Button>

      <br />

      <IconButton buttonType={ButtonTypes.Primary}>
        <SystemIcon name={SystemIcon.Icons.Edit} />
      </IconButton>
    </div>
  ))
