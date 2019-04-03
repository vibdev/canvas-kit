import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {
  FormGroup,
  Hint,
  Label,
  LabelPosition,
  LabelPositionBehavior,
  ErrorType,
} from '@workday/canvas-kit-react-input-common';
import TextInput, {TextInputProps} from './TextInput';

export interface TextFieldProps extends TextInputProps {
  label?: React.ReactNode;
  hintText?: React.ReactNode;
}

const TextFieldInputContainer = styled('div')<GrowthBehavior & LabelPositionBehavior>(
  ({grow, labelPosition}) => {
    if (grow) {
      if (labelPosition === LabelPosition.Left) {
        return {
          flexGrow: 1,
        };
      }

      return {
        display: 'block',
      };
    }

    return {
      display: 'inline-block',
    };
  }
);

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
      <FormGroup labelPosition={labelPosition}>
        {typeof label === 'string' ? <Label labelPosition={labelPosition}>{label}</Label> : label}
        <TextFieldInputContainer grow={grow} labelPosition={labelPosition}>
          <TextInput grow={grow} {...inputProps} />
          {hintText && <Hint error={error}>{hintText}</Hint>}
        </TextFieldInputContainer>
      </FormGroup>
    );
  }
}
