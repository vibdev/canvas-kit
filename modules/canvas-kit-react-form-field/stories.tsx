/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, ControlledComponentWrapper} from '@workday/canvas-kit-react-common';
import {Checkbox} from '@workday/canvas-kit-react-checkbox';
import {Radio, RadioGroup} from '@workday/canvas-kit-react-radio';

import FormField, {Label, Hint} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {CheckboxWrapper} from '../canvas-kit-react-checkbox/stories';

storiesOf('Canvas Kit/Form Field', module)
  .addDecorator(withReadme(README))
  .add('Label', () => (
    <div className="story">
      <h1 className="section-label">Label</h1>
      <Label>Label</Label>
    </div>
  ))
  .add('Hint', () => (
    <div className="story">
      <h1 className="section-label">Hint</h1>
      <Hint>Hint</Hint>
      <Hint error={Hint.ErrorType.Error}>Hint</Hint>
      <Hint error={Hint.ErrorType.Alert}>Hint</Hint>
    </div>
  ));

storiesOf('Canvas Kit/Form Field/Radio Group', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" useFieldset={true}>
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" useFieldset={true} labelPosition={FormField.LabelPosition.Left}>
          <ControlledComponentWrapper>
            <RadioGroup name="contact">
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
              <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
              <Radio id="4" value="mail" label="Mail" />
            </RadioGroup>
          </ControlledComponentWrapper>
        </FormField>
      </div>
    </div>
  ));

storiesOf('Canvas Kit/Form Field/Radio', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label">
          <Radio id="1" value="email" label="E-mail" />
        </FormField>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
          <Radio id="1" value="email" label="E-mail" />
        </FormField>
      </div>
    </div>
  ));

storiesOf('Canvas Kit/Form Field/Checkbox', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="My Field" inputId="my-checkbox-field">
          <CheckboxWrapper>
            <Checkbox id="1" label="Checkbox option" />
          </CheckboxWrapper>
        </FormField>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField
          label="My Field"
          inputId="my-checkbox-field"
          labelPosition={FormField.LabelPosition.Left}
        >
          <CheckboxWrapper>
            <Checkbox id="1" label="Checkbox option" />
          </CheckboxWrapper>
        </FormField>
      </div>
    </div>
  ));
