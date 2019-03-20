import * as React from 'react';
import styled from 'react-emotion';
import {canvas} from '@workday/canvas-kit-react';
import {LabelPosition} from './types';

export interface FormGroupProps {
  labelPosition?: LabelPosition;
}

const GroupComponent = styled('div')<FormGroupProps>(({labelPosition}) => {
  if (labelPosition === LabelPosition.Left) {
    return {
      marginBottom: canvas.spacing.m,
    };
  }

  return {
    marginBottom: canvas.spacing.s,
  };
});

export default class FormGroup extends React.Component<FormGroupProps> {
  static LabelPosition = LabelPosition;

  public render() {
    return <GroupComponent {...this.props} />;
  }
}
