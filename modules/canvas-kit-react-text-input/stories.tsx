/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf, StoryDecorator} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {TextField, TextInput, Hint, TextInputProps, TextFieldProps} from './index'; // tslint:disable-line:import-name
import README from './README.md';

const sectionDecorator: (t: string) => StoryDecorator = title => {
  return storyFn => (
    <div className="story">
      <h1 className="section-label">{title}</h1>
      {storyFn()}
    </div>
  );
};

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

class Field extends React.Component<TextFieldProps, {}> {
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
    return <TextField label="Label" {...props} value={this.state.value} onChange={this.onChange} />;
  }
}

const Inputs = {
  Plain: <Input />,
  Placeholder: <Input placeholder="Placeholder" />,
  Disabled: <Input disabled={true} />,
  DisabledPlaceholder: <Input placeholder="Placeholder" disabled={true} />,
  Alert: <Input error={TextInput.ErrorType.Alert} value="Alert" />,
  Error: <Input error={TextInput.ErrorType.Error} value="Error" />,
};

storiesOf('Canvas Kit/Inputs/Text Input', module)
  .addDecorator(sectionDecorator('Text Input'))
  .addDecorator(withReadme(README))
  .add('Plain', () => Inputs.Plain)
  .add('With placeholder', () => Inputs.Placeholder)
  .add('Disabled', () => Inputs.Disabled)
  .add('Disabled with placeholder', () => Inputs.DisabledPlaceholder)
  .add('Alert', () => Inputs.Alert)
  .add('Error', () => Inputs.Error);

storiesOf('Canvas Kit/Inputs/Text Field', module)
  .addDecorator(sectionDecorator('Text Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field {...Inputs.Plain.props} />)
  .add('With placeholder', () => <Field {...Inputs.Placeholder.props} />)
  .add('Disabled', () => <Field {...Inputs.Disabled.props} />)
  .add('Disabled with placeholder', () => <Field {...Inputs.DisabledPlaceholder.props} />)
  .add('Alert', () => <Field {...Inputs.Alert.props} />)
  .add('Error', () => <Field {...Inputs.Error.props} />);

storiesOf('Canvas Kit/Inputs/Hint', module)
  .addDecorator(sectionDecorator('Hint'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Hint>Password must be 8 characters long.</Hint>)
  .add('Alert', () => <Hint error={Hint.ErrorType.Alert}>Password must be 8 characters long.</Hint>)
  .add('Error', () => (
    <Hint error={Hint.ErrorType.Error}>Password must be 8 characters long.</Hint>
  ));
