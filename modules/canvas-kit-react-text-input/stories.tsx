/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf, StoryDecorator} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import TextInput from './index'; // tslint:disable-line:import-name
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

storiesOf('Canvas Kit/Inputs/Text Input', module)
  .addDecorator(sectionDecorator)
  .addDecorator(withReadme(README))
  .add('Plain', () => <Input />)
  .add('With placeholder', () => <Input placeholder="Placeholder" />)
  .add('Disabled', () => <Input disabled={true} />)
  .add('Disabled with placeholder', () => <Input placeholder="Placeholder" disabled={true} />)
  .add('Alert', () => <Input error={TextInput.ErrorType.Alert} value="Alert" />)
  .add('Error', () => <Input error={TextInput.ErrorType.Error} value="Error" />);
