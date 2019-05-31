/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, ControlledComponentWrapper} from '../../../utils/storybook';

import Checkbox from '..';
import README from '../README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

storiesOf('Checkbox', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
<<<<<<< HEAD
  .add('Default Checkbox', () => (
=======
  .add('Standard Checkbox', () => (
>>>>>>> docs(titles): updated storybook titles
    <div className="story">
      <h1 className="section-label">Default Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        {control(<Checkbox id="1" label="Checkbox option" />)}
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <h1 className="section-label">Disabled Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Checkbox disabled={true} id="1" label="Checkbox option" />
      </div>
    </div>
  ))
  .add('Disabled Checked', () => (
    <div className="story">
      <h1 className="section-label">Disabled Checkbox With Check</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Checkbox disabled={true} checked={true} id="1" label="Checkbox option" />
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <h1 className="section-label">Checkbox Alert</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        {control(<Checkbox id="1" label="Checkbox option" error={Checkbox.ErrorType.Alert} />)}
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <h1 className="section-label">Checkbox Error</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        {control(<Checkbox id="1" label="Checkbox option" error={Checkbox.ErrorType.Error} />)}
      </div>
    </div>
  ));
