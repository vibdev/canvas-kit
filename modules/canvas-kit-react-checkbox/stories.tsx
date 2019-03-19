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
  messageTitle: string;
  messageContent: string;
  id: string;
}

class CheckboxSwitchWrapper extends React.Component<{}, CheckboxSwitchWrapperState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      id: '1',
      isChecked: false,
      // hasError: true,
      // hasAlert: false,
      label: 'This is a checkbox',
      // messageTitle: 'Alert:',
      // messageContent: 'This is a message',
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
          hasError={this.state.hasError}
          hasAlert={this.state.hasAlert}
          messageTitle={this.state.messageTitle}
          messageContent={this.state.messageContent}
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
