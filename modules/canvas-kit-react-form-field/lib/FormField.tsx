import * as React from 'react';
import styled from 'react-emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import Hint from './Hint';
import Label from './Label';
import {LabelPosition, LabelPositionBehavior} from './types';

export interface FormFieldProps extends GrowthBehavior {
  labelPosition: LabelPosition;
  label?: React.ReactNode;
  hintText?: React.ReactNode;
  error?: ErrorType;
  children: React.ReactNode;
}

const FormGroup = styled('div')<LabelPositionBehavior>(({labelPosition}) => {
  if (labelPosition === LabelPosition.Left) {
    return {
      display: 'flex',
      marginBottom: spacing.m,
    };
  }

  return {
    marginBottom: spacing.s,
  };
});

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
    const {label, hintText, grow, children, ...inputProps} = this.props;
    const {labelPosition, error} = inputProps;

    return (
      <FormGroup labelPosition={labelPosition}>
        {typeof label === 'string' ? <Label labelPosition={labelPosition}>{label}</Label> : label}
        <FormFieldInputContainer grow={grow} labelPosition={labelPosition}>
          {children}
          {hintText && <Hint error={error}>{hintText}</Hint>}
        </FormFieldInputContainer>
      </FormGroup>
    );
  }
}
