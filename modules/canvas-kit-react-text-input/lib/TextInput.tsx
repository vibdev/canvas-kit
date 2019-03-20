import * as React from 'react';
import styled from 'react-emotion';
import {canvas} from '@workday/canvas-kit-react';
import {border, transitions} from 'polished';
import {ErrorType} from './types';
import {Interpolation} from 'create-emotion-styled';

export interface TextInputProps {
  disabled?: boolean;
  error?: ErrorType;
  innerRef?: React.Ref<HTMLInputElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type: string;
  value?: any;
}

export const textInputStyles: Interpolation<TextInputProps> = [
  canvas.type.body,
  {
    ...transitions('0.2s box-shadow'),
    ...border(1, 'solid', canvas.colors.licorice200),
    display: 'block',
    backgroundColor: canvas.inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    color: canvas.typeColors.body,
    height: 40,
    minWidth: 280,
    padding: canvas.spacing.xxs, // Compensate for border
    '&::placeholder': {
      color: canvas.typeColors.hint,
    },
    '&:focus:not([disabled])': {
      borderColor: canvas.inputColors.focusBorder,
      boxShadow: `inset 0 0 0 1px ${canvas.inputColors.focusBorder}`,
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: canvas.colors.soap100,
      borderColor: canvas.colors.licorice100,
      color: canvas.colors.licorice100,
      '&::placeholder': {
        color: canvas.colors.licorice100,
      },
    },
  },
  ({error}) => {
    switch (error) {
      case ErrorType.Error:
        return {
          borderColor: canvas.inputColors.error.border,
          boxShadow: `inset 0 0 0 1px ${canvas.inputColors.error.border}`,
        };
      case ErrorType.Alert:
        return {
          borderColor: canvas.inputColors.warning.border,
          boxShadow: `inset 0 0 0 1px ${canvas.inputColors.warning.border}`,
        };
      default:
        return {};
    }
  },
];

const Input = styled('input')<TextInputProps>(...textInputStyles);

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    type: 'text',
  };

  public render() {
    const {inputProps, ...componentProps} = this.props;
    return <Input {...componentProps} {...inputProps} />;
  }
}
