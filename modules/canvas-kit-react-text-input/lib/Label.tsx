import * as React from 'react';
import styled from 'react-emotion';
import {spacing, type} from '@workday/canvas-kit-react-core';
import {LabelPosition} from './types';

export interface LabelProps {
  form?: string;
  htmlFor?: string;
  innerRef?: React.Ref<HTMLLabelElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  position: LabelPosition;
}

const LabelComponent = styled('label')<LabelProps>(type.body, type.variant.label, ({position}) => {
  if (position === LabelPosition.Left) {
    return {
      display: 'inline-block',
      verticalAlign: 'top',
      marginTop: 10, // Input height - font line height / 2
      marginRight: spacing.l,
    };
  }

  return {
    display: 'block',
    marginBottom: spacing.xxxs,
  };
});

export default class Label extends React.Component<LabelProps> {
  static Position = LabelPosition;

  static defaultProps = {
    position: Label.Position.Top,
  };

  public render() {
    const {labelProps, ...props} = this.props;
    return <LabelComponent {...props} {...labelProps} />;
  }
}
