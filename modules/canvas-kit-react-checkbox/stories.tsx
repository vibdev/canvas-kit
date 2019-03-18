/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Checkbox from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface CheckboxSwitchWrapperState {
  isChecked: boolean;
  hasError: boolean;
  hasAlert: boolean;
  label: string;
  message: string;
  id: string;
}

class CheckboxSwitchWrapper extends React.Component<{}, CheckboxSwitchWrapperState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      id: '1',
      isChecked: false,
      hasError: false,
      hasAlert: false,
      label: 'This is a checkbox',
      message: 'This is a message',
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Checkbox
          id={this.state.id}
          disabled={false}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          label={this.state.label}
        />
      </div>
    );
  }

  private handleCheck() {
    this.setState({isChecked: !this.state.isChecked});
  }
}

storiesOf('Canvas Kit/Checkbox', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <CheckboxSwitchWrapper />
    </div>
  ));
