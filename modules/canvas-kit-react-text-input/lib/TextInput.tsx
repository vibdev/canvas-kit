import * as React from 'react';
import styled from 'react-emotion';
import {Interpolation} from 'create-emotion-styled';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import {colors, inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import InputIconContainer from './InputIconContainer';

export interface TextInputProps
  extends GrowthBehavior,
    React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: ErrorType;
  hasIcon?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: any;
}

export const textInputStyles: Interpolation<TextInputProps> = [
  type.body,
  {
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    height: 40,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
    '&::placeholder': {
      color: inputColors.placeholder,
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
        color: inputColors.disabled.text,
      },
    },
  },
  ({error}) => {
    let errorBorderColor;

    if (error === ErrorType.Error) {
      errorBorderColor = inputColors.error.border;
    } else if (error === ErrorType.Alert) {
      errorBorderColor = inputColors.warning.border;
    } else {
      return {};
    }

    return {
      borderColor: errorBorderColor,
      transition: '100ms box-shadow',
      boxShadow: `inset 0 0 0 1px ${errorBorderColor}`,
      '&:hover': {
        borderColor: errorBorderColor,
      },
      '&:focus:not([disabled])': {
        borderColor: errorBorderColor,
        boxShadow: `inset 0 0 0 1px ${errorBorderColor},
          0 0 0 2px ${colors.frenchVanilla100},
          0 0 0 4px ${inputColors.focusBorder}`,
      },
    };
  },
  ({hasIcon}) => {
    // Icon padding left + icon width + icon padding right
    const iconPadding = spacingNumbers.xxxs + spacingNumbers.m + spacingNumbers.xxs;

    if (hasIcon) {
      return {paddingRight: iconPadding};
    } else {
      return {};
    }
  },
  ({grow}) =>
    grow && {
      width: '100%',
    },
];

const Input = styled('input')<TextInputProps>(...textInputStyles);

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {grow, inputRef, error, ...inputProps} = this.props;

    let icon: React.ReactElement<SystemIcon> | undefined;
    switch (error) {
      case ErrorType.Alert:
        icon = (
          <SystemIcon
            icon={exclamationTriangleIcon}
            color={inputColors.warning.icon}
            colorHover={inputColors.warning.icon}
          />
        );
        break;
      case ErrorType.Error:
        icon = (
          <SystemIcon
            icon={exclamationCircleIcon}
            color={inputColors.error.icon}
            colorHover={inputColors.error.icon}
          />
        );
        break;
      default:
    }

    return (
      <InputIconContainer icon={icon} grow={grow}>
        <Input
          hasIcon={typeof icon !== 'undefined'}
          innerRef={inputRef}
          grow={grow}
          error={error}
          {...inputProps}
        />
      </InputIconContainer>
    );
  }
}
