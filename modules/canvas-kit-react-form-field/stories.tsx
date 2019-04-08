/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SectionDecorator} from '@workday/canvas-kit-react-common';

import FormField, {FormFieldProps, Label, Hint} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {Input as TextInput, Inputs} from '../canvas-kit-react-text-input/stories';

storiesOf('Canvas Kit/Input', module)
  .addDecorator(withReadme(README))
  .add('Label', () => (
    <div className="story">
      <h1 className="section-label">Label</h1>
      <Label>Label</Label>
    </div>
  ))
  .add('Hint', () => (
    <div className="story">
      <h1 className="section-label">Hint</h1>
      <Hint>Hint</Hint>
      <Hint error={Hint.ErrorType.Error}>Hint</Hint>
      <Hint error={Hint.ErrorType.Alert}>Hint</Hint>
    </div>
  ));

class Field extends React.Component<FormFieldProps> {
  static defaultProps = {
    labelPosition: FormField.LabelPosition.Top,
  };

  render() {
    return (
      <FormField label="Label" {...this.props}>
        {this.props.children}
      </FormField>
    );
  }
}

const hintText = 'Helpful text goes here.';

storiesOf('Canvas Kit/Form Field/Text/Top Label', module)
  .addDecorator(SectionDecorator('Text Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field>{Inputs.Plain}</Field>)
  .add('With placeholder', () => <Field>{Inputs.Placeholder}</Field>)
  .add('Disabled', () => <Field>{Inputs.Disabled}</Field>)
  .add('Disabled with placeholder', () => <Field>{Inputs.DisabledPlaceholder}</Field>)
  .add('Alert', () => <Field>{Inputs.Alert}</Field>)
  .add('Error', () => <Field>{Inputs.Error}</Field>)
  .add('Grow', () => (
    <Field grow={true}>
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ))
  .add('Grow - Error', () => (
    <Field grow={true} error={FormField.ErrorType.Error} hintText={hintText}>
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ));

storiesOf('Canvas Kit/Form Field/Text/Left Label', module)
  .addDecorator(SectionDecorator('Text Field'))
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
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ))
  .add('Grow - Error', () => (
    <Field
      labelPosition={FormField.LabelPosition.Left}
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
    >
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ));
