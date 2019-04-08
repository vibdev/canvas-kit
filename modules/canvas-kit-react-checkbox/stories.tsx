/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '@workday/canvas-kit-react-common';
import FormField from '@workday/canvas-kit-react-form-field';

import Checkbox from './index'; // tslint:disable-line:import-name
import README from './README.md';

class CheckboxWrapper extends React.Component {
  state = {
    id: '1',
    isChecked: false,
  };

  handleCheck = () => {
    this.setState(prevState => ({
      isChecked: !this.state.isChecked,
    }));
  };

  render() {
    return (
      <Checkbox
        disabled={false}
        checked={this.state.isChecked}
        id={this.state.id}
        label="Checkbox option"
        onChange={this.handleCheck}
      />
    );
  }
}

storiesOf('Canvas Kit/Input/Base/Checkbox', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <CheckboxWrapper />
      </div>
    </div>
  ));

storiesOf('Canvas Kit/Input/Checkbox Field', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Checkbox Field">
          <CheckboxWrapper />
        </FormField>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <FormField label="Checkbox Field" labelPosition={FormField.LabelPosition.Left}>
          <CheckboxWrapper />
        </FormField>
      </div>
    </div>
  ));
