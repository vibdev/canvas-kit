/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import CustomColorInput from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface CustomColorInputWrapperState {
  color: string;
}

class CustomColorInputWrapper extends React.Component<{}, CustomColorInputWrapperState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      color: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <CustomColorInput selectedHexColor={this.state.color} onSubmit={this.onSubmit} />
        <h3 style={{color: `${this.state.color}`}}>Change My Text Color</h3>
      </div>
    );
  }

  private onSubmit(color: string) {
    this.setState({color: color});
  }
}

storiesOf('Canvas Kit/Custom Color Input', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Custom Color Input</h1>
      <CustomColorInputWrapper />
    </div>
  ));
