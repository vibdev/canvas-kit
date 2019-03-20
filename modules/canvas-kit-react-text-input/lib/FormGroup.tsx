import * as React from 'react';
import styled from 'react-emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import {LabelPosition} from './types';

export interface FormGroupProps {
  labelPosition?: LabelPosition;
}

const GroupComponent = styled('div')<FormGroupProps>(({labelPosition}) => {
  if (labelPosition === LabelPosition.Left) {
    return {
      marginBottom: spacing.m,
    };
  }

  return {
    marginBottom: spacing.s,
  };
});

export default class FormGroup extends React.Component<FormGroupProps> {
  static LabelPosition = LabelPosition;

  public render() {
    return <GroupComponent {...this.props} />;
  }
}
