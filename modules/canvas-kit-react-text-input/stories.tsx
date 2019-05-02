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
  Plain: <Input id="input-plain" />,
  Placeholder: <Input placeholder="Placeholder" id="input-placeholder" />,
  Disabled: <Input disabled={true} id="input-disabled" />,
  DisabledPlaceholder: (
    <Input placeholder="Placeholder" id="input-disabled-placeholder" disabled={true} />
  ),
  Alert: <Input error={TextInput.ErrorType.Alert} id="input-alert" value="Alert" />,
  Error: <Input error={TextInput.ErrorType.Error} id="input-error" value="Error" />,
  Grow: <Input placeholder="Placeholder" id="input-grow" grow={true} />,
  GrowError: (
    <Input
      placeholder="Placeholder"
      id="input-grow-error"
      grow={true}
      error={TextInput.ErrorType.Error}
    />
  ),
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
