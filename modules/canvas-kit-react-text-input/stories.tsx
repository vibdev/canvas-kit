/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator} from '@workday/canvas-kit-react-common';

import {TextInput, TextInputProps} from './index'; // tslint:disable-line:import-name
import README from './README.md';

export class Input extends React.Component<TextInputProps, {}> {
  static defaultProps = {
    type: 'text',
  };

  state = {
    value: this.props.value,
  };

  onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({value: e.target.value});
  };

  public render() {
    const {value, ...props} = this.props;
    return <TextInput {...props} value={this.state.value} onChange={this.onChange} />;
  }
}

export const Inputs = {
  Plain: <Input />,
  Placeholder: <Input placeholder="Placeholder" />,
  Disabled: <Input disabled={true} />,
  DisabledPlaceholder: <Input placeholder="Placeholder" disabled={true} />,
  Alert: <Input error={TextInput.ErrorType.Alert} value="Alert" />,
  Error: <Input error={TextInput.ErrorType.Error} value="Error" />,
  Grow: <Input placeholder="Placeholder" grow={true} />,
  GrowError: <Input placeholder="Placeholder" grow={true} error={TextInput.ErrorType.Error} />,
};

storiesOf('Canvas Kit/Text Input', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Text Input'))
  .addDecorator(withReadme(README))
  .add('Plain', () => Inputs.Plain)
  .add('With placeholder', () => Inputs.Placeholder)
  .add('Disabled', () => Inputs.Disabled)
  .add('Disabled with placeholder', () => Inputs.DisabledPlaceholder)
  .add('Alert', () => Inputs.Alert)
  .add('Error', () => Inputs.Error)
  .add('Grow', () => Inputs.Grow)
  .add('Grow - Error', () => Inputs.GrowError);
