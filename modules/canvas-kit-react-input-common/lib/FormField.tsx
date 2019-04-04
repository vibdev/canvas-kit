import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import FormGroup from './FormGroup';
import Hint from './Hint';
import Label from './Label';
import {LabelPosition, LabelPositionBehavior, ErrorType} from './types';

export interface FormFieldProps extends GrowthBehavior {
  labelPosition: LabelPosition;
  label?: React.ReactNode;
  hintText?: React.ReactNode;
  error?: ErrorType;
  input: React.ReactNode;
}

const FormFieldInputContainer = styled('div')<GrowthBehavior & LabelPositionBehavior>(
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

export default class FormField extends React.Component<FormFieldProps> {
  static LabelPosition = LabelPosition;
  static ErrorType = ErrorType;

  static defaultProps = {
    labelPosition: FormField.LabelPosition.Top,
  };

  render() {
    const {label, hintText, grow, input, ...inputProps} = this.props;
    const {labelPosition, error} = inputProps;

    return (
      <FormGroup labelPosition={labelPosition}>
        {typeof label === 'string' ? <Label labelPosition={labelPosition}>{label}</Label> : label}
        <FormFieldInputContainer grow={grow} labelPosition={labelPosition}>
          {input}
          {hintText && <Hint error={error}>{hintText}</Hint>}
        </FormFieldInputContainer>
      </FormGroup>
    );
  }
}
