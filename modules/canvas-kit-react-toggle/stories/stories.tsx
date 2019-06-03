/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Toggle from '..';
import README from '../README.md';

interface ToggleSwitchWrapperState {
  isChecked: boolean;
}

class ToggleSwitchWrapper extends React.Component<{}, ToggleSwitchWrapperState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      isChecked: true,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Toggle disabled={false} checked={this.state.isChecked} onChange={this.handleCheck} />
      </div>
    );
  }

  private handleCheck() {
    this.setState({isChecked: !this.state.isChecked});
  }
}

storiesOf('Toggle', module)
  .addDecorator(withReadme(README))
  .add('Default Toggle', () => (
    <div className="story">
      <h1 className="section-label">Default Toggle</h1>
      <h3>Default</h3>
      <ToggleSwitchWrapper />
      <h3>Disabled Toggle</h3>
      <Toggle disabled={true} checked={false} />
    </div>
  ));
