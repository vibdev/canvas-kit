/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator} from '@workday/canvas-kit-react-common';
import Radio from '@workday/canvas-kit-react-radio';

import FormField, {FormFieldProps, Label, Hint} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {CheckboxWrapper} from '../canvas-kit-react-checkbox/stories';
import {RadioGroupWrapper} from '../canvas-kit-react-radio/stories';
import {Input as TextInput, Inputs} from '../canvas-kit-react-text-input/stories';
import {TextAreaWrapper as TextArea, TextAreas} from '../canvas-kit-react-text-area/stories';

storiesOf('Canvas Kit/Form Field', module)
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
    let hintText, hintId, inputId;
    const reactChild = this.props.children as React.ReactElement<any>;

    if (typeof this.props.error !== 'undefined') {
      hintText = 'Helpful text goes here.';
      hintId = 'error-desc-id';
    }

    if (reactChild.props.id) {
      inputId = reactChild.props.id;
    }

    return (
      <FormField
        label="Label"
        {...this.props}
        hintText={hintText}
        hintId={hintId}
        inputId={inputId}
      >
        {this.props.children}
      </FormField>
    );
  }
}

storiesOf('Canvas Kit/Form Field/Text Input/Top Label', module)
  .addDecorator(SectionDecorator('Text Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field>{Inputs.Plain}</Field>)
  .add('With placeholder', () => <Field>{Inputs.Placeholder}</Field>)
  .add('Disabled', () => <Field>{Inputs.Disabled}</Field>)
  .add('Disabled with placeholder', () => <Field>{Inputs.DisabledPlaceholder}</Field>)
  .add('Alert', () => <Field error={FormField.ErrorType.Alert}>{Inputs.Alert}</Field>)
  .add('Error', () => <Field error={FormField.ErrorType.Error}>{Inputs.Error}</Field>)
  .add('Grow', () => (
    <Field grow={true}>
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ))
  .add('Grow - Error', () => (
    <Field grow={true} error={FormField.ErrorType.Error}>
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ));

storiesOf('Canvas Kit/Form Field/Text Input/Left Label', module)
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
  .add('Alert', () => (
    <Field labelPosition={FormField.LabelPosition.Left} error={FormField.ErrorType.Alert}>
      {Inputs.Alert}
    </Field>
  ))
  .add('Error', () => (
    <Field labelPosition={FormField.LabelPosition.Left} error={FormField.ErrorType.Error}>
      {Inputs.Error}
    </Field>
  ))
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
    >
      <TextInput {...Inputs.Placeholder.props} />
    </Field>
  ));

storiesOf('Canvas Kit/Form Field/Text Area/Top Label', module)
  .addDecorator(SectionDecorator('Text Area Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field>{TextAreas.Plain}</Field>)
  .add('With placeholder', () => <Field>{TextAreas.Placeholder}</Field>)
  .add('Disabled', () => <Field>{TextAreas.Disabled}</Field>)
  .add('Disabled with placeholder', () => <Field>{TextAreas.DisabledPlaceholder}</Field>)
  .add('Alert', () => <Field error={FormField.ErrorType.Alert}>{TextAreas.Alert}</Field>)
  .add('Error', () => <Field error={FormField.ErrorType.Error}>{TextAreas.Error}</Field>)
  .add('Grow', () => (
    <Field grow={true}>
      <TextArea {...TextAreas.Placeholder.props} />
    </Field>
  ))
  .add('Grow - Error', () => (
    <Field grow={true} error={FormField.ErrorType.Error}>
      <TextArea {...TextAreas.Placeholder.props} />
    </Field>
  ));

storiesOf('Canvas Kit/Form Field/Text Area/Left Label', module)
  .addDecorator(SectionDecorator('Text Area Field'))
  .addDecorator(withReadme(README))
  .add('Plain', () => <Field labelPosition={FormField.LabelPosition.Left}>{TextAreas.Plain}</Field>)
  .add('With placeholder', () => (
    <Field labelPosition={FormField.LabelPosition.Left}>{TextAreas.Placeholder}</Field>
  ))
  .add('Disabled', () => (
    <Field labelPosition={FormField.LabelPosition.Left}>{TextAreas.Disabled}</Field>
  ))
  .add('Disabled with placeholder', () => (
    <Field labelPosition={FormField.LabelPosition.Left}>{TextAreas.DisabledPlaceholder}</Field>
  ))
  .add('Alert', () => (
    <Field labelPosition={FormField.LabelPosition.Left} error={FormField.ErrorType.Alert}>
      {TextAreas.Alert}
    </Field>
  ))
  .add('Error', () => (
    <Field labelPosition={FormField.LabelPosition.Left} error={FormField.ErrorType.Error}>
      {TextAreas.Error}
    </Field>
  ))
  .add('Grow', () => (
    <Field labelPosition={FormField.LabelPosition.Left} grow={true}>
      <TextArea {...TextAreas.Placeholder.props} />
    </Field>
  ))
  .add('Grow - Error', () => (
    <Field
      labelPosition={FormField.LabelPosition.Left}
      grow={true}
      error={FormField.ErrorType.Error}
    >
      <TextArea {...TextAreas.Placeholder.props} />
    </Field>
  ));

storiesOf('Canvas Kit/Form Field/Radio Group', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Field>
          <RadioGroupWrapper />
        </Field>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Field labelPosition={FormField.LabelPosition.Left}>
          <RadioGroupWrapper />
        </Field>
      </div>
    </div>
  ));

storiesOf('Canvas Kit/Form Field/Radio', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Field>
          <Radio id="1" value="email" label="E-mail" />
        </Field>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Field labelPosition={FormField.LabelPosition.Left}>
          <Radio id="1" value="email" label="E-mail" />
        </Field>
      </div>
    </div>
  ));

storiesOf('Canvas Kit/Form Field/Checkbox', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Top Label', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Field>
          <CheckboxWrapper />
        </Field>
      </div>
    </div>
  ))
  .add('Left Label', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Field labelPosition={FormField.LabelPosition.Left}>
          <CheckboxWrapper />
        </Field>
      </div>
    </div>
  ));
