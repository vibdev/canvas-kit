/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Checkbox from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface CheckboxSwitchWrapperState {
  id: string;
  isChecked: boolean;
  label: string;
}

class CheckboxSwitchWrapper extends React.Component<{}, CheckboxSwitchWrapperState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      id: '1',
      isChecked: false,
      label: 'This is a checkbox',
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Checkbox
          disabled={true}
          checked={this.state.isChecked}
          id={this.state.id}
          label={this.state.label}
          onChange={this.handleCheck}
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
