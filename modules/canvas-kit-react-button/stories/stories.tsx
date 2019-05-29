/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button} from '..';
import README from '../README.md';

storiesOf('Button', module)
  .addDecorator(withReadme(README))
  .add('Primary Buttons', () => (
    <div className="story">
      <h1 className="section-label">Primary Buttons</h1>
      <h3>Large Primary Buttons</h3>
      <Button buttonType={Button.Types.Primary}>Primary Button</Button>
      <Button buttonType={Button.Types.Primary} disabled={true}>
        Primary Button
      </Button>
      <h3>Medium Primary Buttons</h3>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium}>
        Primary Button
      </Button>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium} disabled={true}>
        Primary Button
      </Button>
      <h3>Small Primary Buttons</h3>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Small}>
        Primary Button
      </Button>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Small} disabled={true}>
        Primary Button
      </Button>
      <h3>Growing Primary Buttons</h3>
      <Button buttonType={Button.Types.Primary} grow={true}>
        Growing Primary Button
      </Button>
    </div>
  ))
  .add('Secondary Buttons', () => (
    <div className="story">
      <h1 className="section-label">Secondary Buttons</h1>
      <h3>Large Secondary Buttons</h3>
      <Button buttonType={Button.Types.Secondary}>Secondary Button</Button>
      <Button buttonType={Button.Types.Secondary} disabled={true}>
        Secondary Button
      </Button>
      <h3>Medium Secondary Buttons</h3>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Medium}>
        Secondary Button
      </Button>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Medium} disabled={true}>
        Secondary Button
      </Button>
      <h3>Small Secondary Buttons</h3>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Small}>
        Secondary Button
      </Button>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Small} disabled={true}>
        Secondary Button
      </Button>
      <h3>Growing Secondary Buttons</h3>
      <Button buttonType={Button.Types.Secondary} grow={true}>
        Growing Secondary Button
      </Button>
    </div>
  ))
  .add('Delete Buttons', () => (
    <div className="story">
      <h1 className="section-label">Delete Buttons</h1>
      <h3>Large Delete Buttons</h3>
      <Button buttonType={Button.Types.Delete}>Delete Button</Button>
      <Button buttonType={Button.Types.Delete} disabled={true}>
        Delete Button
      </Button>
      <h3>Medium Delete Buttons</h3>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium}>
        Delete Button
      </Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium} disabled={true}>
        Delete Button
      </Button>
      <h3>Small Delete Buttons</h3>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Small}>
        Delete Button
      </Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Small} disabled={true}>
        Delete Button
      </Button>
      <h3>Growing Delete Buttons</h3>
      <Button buttonType={Button.Types.Delete} grow={true}>
        Growing Delete Button
      </Button>
    </div>
  ));
