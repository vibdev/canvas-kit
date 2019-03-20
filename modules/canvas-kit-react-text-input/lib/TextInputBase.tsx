import * as React from 'react';
import styled from 'react-emotion';
import {colors, inputColors, type, typeColors, spacing} from '@workday/canvas-kit-react-core';
import {border, transitions} from 'polished';
import {ErrorType} from './types';
import {Interpolation} from 'create-emotion-styled';

export interface TextInputBaseProps {
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

export const textInputStyles: Interpolation<TextInputBaseProps> = [
  type.body,
  {
    ...transitions('0.2s box-shadow'),
    ...border(1, 'solid', colors.licorice200),
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    color: typeColors.body,
    height: 40,
    minWidth: 280,
    padding: spacing.xxs, // Compensate for border
    '&::placeholder': {
      color: typeColors.hint,
    },
    '&:focus:not([disabled])': {
      borderColor: inputColors.focusBorder,
      boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: colors.soap100,
      borderColor: colors.licorice100,
      color: colors.licorice100,
      '&::placeholder': {
        color: colors.licorice100,
      },
    },
  },
  ({error}) => {
    switch (error) {
      case ErrorType.Error:
        return {
          borderColor: inputColors.error.border,
          boxShadow: `inset 0 0 0 1px ${inputColors.error.border}`,
        };
      case ErrorType.Alert:
        return {
          borderColor: inputColors.warning.border,
          boxShadow: `inset 0 0 0 1px ${inputColors.warning.border}`,
        };
      default:
        return {};
    }
  },
];

const Input = styled('input')<TextInputBaseProps>(...textInputStyles);

export default class TextInput extends React.Component<TextInputBaseProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    type: 'text',
  };

  public render() {
    const {inputProps, ...componentProps} = this.props;
    return <Input {...componentProps} {...inputProps} />;
  }
}
