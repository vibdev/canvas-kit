/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf, StoryDecorator} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import FormField, {LabelPosition} from '@workday/canvas-kit-react-form-field';

import {TextInput, TextInputProps} from './index'; // tslint:disable-line:import-name
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

const Field: React.SFC<{grow?: boolean; labelPosition?: LabelPosition}> = ({
  children,
  ...props
}) => (
  <FormField label="Label" {...props}>
    {children}
  </FormField>
);

const Inputs = {
  Plain: <Input />,
  Placeholder: <Input placeholder="Placeholder" />,
  Disabled: <Input disabled={true} />,
  DisabledPlaceholder: <Input placeholder="Placeholder" disabled={true} />,
  Alert: <Input error={TextInput.ErrorType.Alert} value="Alert" />,
  Error: <Input error={TextInput.ErrorType.Error} value="Error" />,
  Grow: <Input placeholder="Placeholder" grow={true} />,
  GrowError: <Input placeholder="Placeholder" grow={true} error={TextInput.ErrorType.Error} />,
};

storiesOf('Canvas Kit/Input/Base/Text Input', module)
  .addDecorator(sectionDecorator('Text Input'))
  .addDecorator(withReadme(README))
  .add('Plain', () => Inputs.Plain)
  .add('With placeholder', () => Inputs.Placeholder)
  .add('Disabled', () => Inputs.Disabled)
  .add('Disabled with placeholder', () => Inputs.DisabledPlaceholder)
  .add('Alert', () => Inputs.Alert)
  .add('Error', () => Inputs.Error)
  .add('Grow', () => Inputs.Grow)
  .add('Grow - Error', () => Inputs.GrowError);

storiesOf('Canvas Kit/Input/Text Field/Top Label', module)
  .addDecorator(sectionDecorator('Text Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field>{Inputs.Plain}</Field>)
  .add('With placeholder', () => <Field>{Inputs.Placeholder}</Field>)
  .add('Disabled', () => <Field>{Inputs.Disabled}</Field>)
  .add('Disabled with placeholder', () => <Field>{Inputs.DisabledPlaceholder}</Field>)
  .add('Alert', () => <Field>{Inputs.Alert}</Field>)
  .add('Error', () => <Field>{Inputs.Error}</Field>)
  .add('Grow', () => <Field grow={true}>{Inputs.Grow}</Field>)
  .add('Grow - Error', () => <Field grow={true}>{Inputs.GrowError}</Field>);

storiesOf('Canvas Kit/Input/Text Field/Left Label', module)
  .addDecorator(sectionDecorator('Text Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field labelPosition={FormField.LabelPosition.Left}>{Inputs.Plain}</Field>)
  .add('With placeholder', () => (
    <Field labelPosition={FormField.LabelPosition.Left}>{Inputs.Placeholder}</Field>
  ))
  .add('Disabled', () => (
    <Field labelPosition={FormField.LabelPosition.Left}>{Inputs.Disabled}</Field>
  ))
  .add('Disabled with placeholder', () => (
    <Field labelPosition={FormField.LabelPosition.Left}>{Inputs.DisabledPlaceholder}</Field>
  ))
  .add('Alert', () => <Field labelPosition={FormField.LabelPosition.Left}>{Inputs.Alert}</Field>)
  .add('Error', () => <Field labelPosition={FormField.LabelPosition.Left}>{Inputs.Error}</Field>)
  .add('Grow', () => (
    <Field labelPosition={FormField.LabelPosition.Left} grow={true}>
      {Inputs.Grow}
    </Field>
  ))
  .add('Grow - Error', () => (
    <Field labelPosition={FormField.LabelPosition.Left} grow={true}>
      {Inputs.GrowError}
    </Field>
  ));
