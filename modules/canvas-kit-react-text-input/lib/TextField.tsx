import * as React from 'react';
import {
  FormField,
  FormFieldProps,
  LabelPosition,
  ErrorType,
} from '@workday/canvas-kit-react-form-field';
import TextInput, {TextInputProps} from './TextInput';

export type TextFieldProps = Pick<FormFieldProps, Exclude<keyof FormFieldProps, 'input'>> &
  TextInputProps;

export default class TextField extends React.Component<TextFieldProps> {
  static LabelPosition = LabelPosition;
  static ErrorType = ErrorType;

  static defaultProps = {
    labelPosition: TextField.LabelPosition.Top,
  };

  render() {
    const {label, hintText, grow, ...inputProps} = this.props;
    const {labelPosition, error} = inputProps;

    return (
      <FormField
        input={<TextInput grow={grow} {...inputProps} />}
        label={label}
        hintText={hintText}
        grow={grow}
        labelPosition={labelPosition}
        error={error}
      />
    );
  }
}
