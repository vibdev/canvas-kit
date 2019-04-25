import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {TextAreaResize} from './shared/types';
import {
  colors,
  inputColors,
  spacingNumbers,
  type,
  typeColors,
} from '@workday/canvas-kit-react-core';

export interface TextAreaProps
  extends GrowthBehavior,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readOnly?: boolean;
  resize: TextAreaResize;
  type?: string;
  value?: any;
}

const TextArea = styled('textarea')<TextAreaProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    height: 64,
    minHeight: 40,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
    '&::webkit-resizer': {
      display: 'none',
    },
    '&::placeholder': {
      color: typeColors.hint,
    },
    '&:hover': {
      borderColor: inputColors.hoverBorder,
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
        color: colors.licorice100,
      },
    },
  },
  ({resize, grow}) => ({
    width: grow ? '100%' : undefined,
    resize: grow ? TextAreaResize.Vertical : resize,
  })
);

export default class TextInput extends React.Component<TextAreaProps> {
  static defaultProps = {
    type: 'text',
    resize: TextAreaResize.Both,
  };

  render() {
    const {grow, inputRef, resize, ...inputProps} = this.props;

    return <TextArea innerRef={inputRef} grow={grow} resize={resize} {...inputProps} />;
  }
}
