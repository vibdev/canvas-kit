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
  hintId?: string;
  error?: ErrorType;
  children: React.ReactNode;
}

export interface ErrorBehavior {
  error?: ErrorType;
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

    if (labelPosition === LabelPosition.Left) {
      return {
        display: 'inline-flex',
        minHeight: 40,
        alignItems: 'center',
        flexWrap: 'wrap',
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

  private renderChildren = (child: React.ReactChild): React.ReactNode => {
    if (React.isValidElement<any>(child)) {
      const props: GrowthBehavior & ErrorBehavior & React.HTMLAttributes<HTMLInputElement> = {};

      if (this.props.grow && React.isValidElement<GrowthBehavior>(child)) {
        props.grow = this.props.grow;
      }

      if (typeof this.props.error !== 'undefined' && React.isValidElement<ErrorBehavior>(child)) {
        props.error = this.props.error;

        if (this.props.hintId) {
          props['aria-describedby'] = this.props.hintId;
        }

        if (this.props.error === ErrorType.Error) {
          props['aria-invalid'] = true;
        }
      }

      return React.cloneElement(child, props);
    }

    return child;
  };

  render() {
    const {label, hintText, hintId, grow, children, ...inputProps} = this.props;
    const {labelPosition, error} = inputProps;

    return (
      <FormGroup labelPosition={labelPosition}>
        {typeof label === 'string' ? <Label labelPosition={labelPosition}>{label}</Label> : label}
        <FormFieldInputContainer grow={grow} labelPosition={labelPosition}>
          {React.Children.map(children, this.renderChildren)}
          {hintText && (
            <Hint error={error} id={hintId}>
              {hintText}
            </Hint>
          )}
        </FormFieldInputContainer>
      </FormGroup>
    );
  }
}
