import * as React from 'react';
import styled from 'react-emotion';
import {Interpolation} from 'create-emotion-styled';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {
  colors,
  inputColors,
  spacingNumbers,
  type,
  typeColors,
} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import InputIconContainer from './InputIconContainer';
import {ErrorType, LabelPosition} from './types';

export interface TextInputBaseProps extends GrowthBehavior {
  disabled?: boolean;
  error?: ErrorType;
  hasIcon?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: any;
}

export interface TextInputProps extends TextInputBaseProps {
  labelPosition?: LabelPosition;
}

export const textInputStyles: Interpolation<TextInputBaseProps> = [
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
  ({error}) => {
    switch (error) {
      case ErrorType.Error:
        return {
          borderColor: inputColors.error.border,
          boxShadow: `inset 0 0 0 1px ${inputColors.error.border}`,
          '&:hover': {
            borderColor: inputColors.error.border,
          },
        };
      case ErrorType.Alert:
        return {
          borderColor: inputColors.warning.border,
          boxShadow: `inset 0 0 0 1px ${inputColors.warning.border}`,
          '&:hover': {
            borderColor: inputColors.warning.border,
          },
        };
      default:
        return {};
    }
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

const Input = styled('input')<TextInputBaseProps>(...textInputStyles);

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;
  static LabelPosition = LabelPosition;

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {labelPosition, grow, ...inputProps} = this.props;
    const {error} = inputProps;

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
        <Input hasIcon={typeof icon !== 'undefined'} {...inputProps} grow={grow} />
      </InputIconContainer>
    );
  }
}
