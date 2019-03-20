/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf, StoryDecorator} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {TextInput} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {TextInputProps} from './lib/TextInput';

const sectionDecorator: StoryDecorator = storyFn => (
  <div className="story">
    <h1 className="section-label">Text Input</h1>
    {storyFn()}
  </div>
);

class Input extends React.Component<TextInputProps, {}> {
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

const Inputs = {
  Plain: <Input />,
  Placeholder: <Input placeholder="Placeholder" />,
  Disabled: <Input placeholder="Placeholder" disabled={true} />,
  DisabledPlaceholder: <Input placeholder="Placeholder" disabled={true} />,
  Alert: <Input error={TextInput.ErrorType.Alert} value="Alert" />,
  Error: <Input error={TextInput.ErrorType.Error} value="Error" />,
};

storiesOf('Canvas Kit/Inputs/Text Inputs/Unlabeled', module)
  .addDecorator(sectionDecorator)
  .addDecorator(withReadme(README))
  .add('Plain', () => Inputs.Plain)
  .add('With placeholder', () => Inputs.Placeholder)
  .add('Disabled', () => Inputs.Disabled)
  .add('Disabled with placeholder', () => Inputs.DisabledPlaceholder)
  .add('Alert', () => Inputs.Alert)
  .add('Error', () => Inputs.Error);
