import * as React from 'react';
import styled from 'react-emotion';
import {LabelPosition, ErrorType} from './types';
import FormGroup from './FormGroup';
import Label from './Label';
import TextInput, {TextInputProps} from './TextInput';
import Hint from './Hint';

export interface TextFieldProps extends TextInputProps {
  label: React.ReactNode;
  hintText: React.ReactNode;
}

const InputContainer = styled('div')({
  display: 'inline-block',
});

export default class TextField extends React.Component<TextFieldProps> {
  static LabelPosition = LabelPosition;
  static ErrorType = ErrorType;

  static defaultProps = {
    labelPosition: TextField.LabelPosition.Top,
  };

  render() {
    const {label, hintText, ...inputProps} = this.props;
    const {labelPosition, error} = inputProps;

    return (
      <FormGroup labelPosition={labelPosition}>
        {typeof label === 'string' ? <Label position={labelPosition}>{label}</Label> : label}
        <InputContainer>
          <TextInput {...inputProps} />
          {hintText && <Hint error={error}>{hintText}</Hint>}
        </InputContainer>
      </FormGroup>
    );
  }
}
