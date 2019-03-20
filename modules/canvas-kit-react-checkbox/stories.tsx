/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Checkbox from './index'; // tslint:disable-line:import-name
import README from './README.md';

class CheckboxWrapper extends React.Component {
  state = {
    id: '1',
    isChecked: false,
    label: 'This is a checkbox',
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
        label={this.state.label}
        onChange={this.handleCheck}
      />
    );
  }
}

storiesOf('Canvas Kit/Checkbox', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <CheckboxWrapper />
      </div>
    </div>
  ));
