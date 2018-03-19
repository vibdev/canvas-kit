/// <reference path="../../typings.d.ts" />
import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { SystemIcon } from '@workday/canvas-kit-react-icon'

import { Button, IconButton } from './index' // tslint:disable-line:import-name
import README from './README.md'

storiesOf('Canvas Kit/Button', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Button</h1>
      <Button buttonType={Button.Types.Primary}>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete}>Delete Button</Button>

      <br />

      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium}>
        Primary Button
      </Button>
      <Button buttonSize={Button.Sizes.Medium}>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium}>
        Delete Button
      </Button>

      <br />

      <Button buttonSize={Button.Sizes.Small}>Secondary Button</Button>

      <br />

      <Button buttonType={Button.Types.Primary} disabled={true}>
        Primary Button
      </Button>
      <Button disabled={true}>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete} disabled={true}>
        Delete Button
      </Button>

      <br />

      <IconButton>
        <SystemIcon name={SystemIcon.Icons.Edit} />
      </IconButton>
    </div>
  ))
