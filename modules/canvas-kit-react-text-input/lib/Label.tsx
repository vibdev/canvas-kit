import * as React from 'react';
import styled from 'react-emotion';
import {spacing, type} from '@workday/canvas-kit-react-core';
import {LabelPosition, LabelPositionBehavior} from './types';

export interface LabelProps extends LabelPositionBehavior {
  form?: string;
  htmlFor?: string;
  innerRef?: React.Ref<HTMLLabelElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const LabelComponent = styled('label')<LabelProps>(
  type.body,
  type.variant.label,
  {
    lineHeight: 'initial',
  },
  ({labelPosition}) => {
    if (labelPosition === LabelPosition.Left) {
      return {
        display: 'inline-block',
        verticalAlign: 'top',
        marginTop: 10, // Input height - font line height / 2
        marginRight: spacing.l,
        width: 180,
      };
    }

    return {
      display: 'block',
      marginBottom: spacing.xxxs,
    };
  }
);

export default class Label extends React.Component<LabelProps> {
  static Position = LabelPosition;

  static defaultProps = {
    labelPosition: Label.Position.Top,
  };

  public render() {
    const {labelProps, ...props} = this.props;
    return <LabelComponent {...props} {...labelProps} />;
  }
}
