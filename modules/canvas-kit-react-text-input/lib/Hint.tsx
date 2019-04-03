import * as React from 'react';
import styled from 'react-emotion';
import {spacing, type} from '@workday/canvas-kit-react-core';
import {ErrorType} from '@workday/canvas-kit-react-input-common';

export interface HintProps {
  error?: ErrorType;
}

const Label = styled('span')(type.body2, type.variant.label);

const Message = styled('p')(type.body2, {margin: `${spacing.xxs} 0 0`});

export default class Hint extends React.Component<HintProps> {
  static ErrorType = ErrorType;

  public render() {
    const {children, error} = this.props;

    let errorLabel: string | undefined;
    switch (error) {
      case Hint.ErrorType.Error:
        errorLabel = 'Error';
        break;
      case Hint.ErrorType.Alert:
        errorLabel = 'Alert';
        break;
      default:
    }

    return (
      <Message>
        {typeof error !== 'undefined' && <Label>{errorLabel && `${errorLabel}: `}</Label>}
        {children}
      </Message>
    );
  }
}
