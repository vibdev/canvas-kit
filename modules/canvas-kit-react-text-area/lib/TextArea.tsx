import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import {inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';

export interface TextAreaProps
  extends GrowthBehavior,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  error?: ErrorType;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readOnly?: boolean;
  resize: TextAreaResizeDirection;
  value?: any;
}

export enum TextAreaResizeDirection {
  None = 'none',
  Both = 'both',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

const TextAreaContainer = styled('textarea')<TextAreaProps>(
  {
    ...type.body,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    minHeight: 64,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
    '&::webkit-resizer': {
      display: 'none',
    },
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:focus:not([disabled])': {
      borderColor: inputColors.focusBorder,
      boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: inputColors.disabled.background,
      borderColor: inputColors.disabled.border,
      color: inputColors.disabled.text,
      '&::placeholder': {
        color: inputColors.disabled.text,
      },
    },
  },
  ({resize, grow, error}) => ({
    width: grow ? '100%' : undefined,
    resize: grow ? TextAreaResizeDirection.Vertical : resize,
    border:
      error === ErrorType.Error
        ? `1px solid ${inputColors.error.border}`
        : `1px solid ${inputColors.border}`,
    boxShadow:
      error === ErrorType.Error ? `inset 0 0 0 1px ${inputColors.error.border}` : undefined,
    '&:hover': {
      borderColor: error === ErrorType.Error ? inputColors.error.border : inputColors.hoverBorder,
    },
  })
);

export default class TextArea extends React.Component<TextAreaProps> {
  static ErrorType = ErrorType;
  static ResizeDirection = TextAreaResizeDirection;

  static defaultProps = {
    resize: TextAreaResizeDirection.Both,
  };

  render() {
    const {grow, inputRef, resize, ...inputProps} = this.props;

    return <TextAreaContainer innerRef={inputRef} grow={grow} resize={resize} {...inputProps} />;
  }
}
