import * as React from 'react';
import styled from 'react-emotion';
import {canvas} from '@workday/canvas-kit-react';
import {LabelPosition} from './types';

export interface LabelProps {
  form?: string;
  htmlFor?: string;
  innerRef?: React.Ref<HTMLLabelElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  position: LabelPosition;
}

const LabelComponent = styled('label')<LabelProps>(
  canvas.type.body,
  canvas.type.variant.label,
  ({position}) => {
    if (position === LabelPosition.Left) {
      return {
        display: 'inline-block',
        verticalAlign: 'top',
        marginTop: 10, // Input height - font line height / 2
        marginRight: canvas.spacing.l,
      };
    }

    return {
      display: 'block',
      marginBottom: canvas.spacing.xxxs,
    };
  }
);

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
