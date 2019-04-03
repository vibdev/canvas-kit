import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {spacing} from '@workday/canvas-kit-react-core';
import {LabelPosition} from './types';

export interface FormGroupProps extends GrowthBehavior {
  labelPosition?: LabelPosition;
}

const GroupComponent = styled('div')<FormGroupProps>(({labelPosition}) => {
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

export default class FormGroup extends React.Component<FormGroupProps> {
  static LabelPosition = LabelPosition;

  public render() {
    return <GroupComponent {...this.props} />;
  }
}
