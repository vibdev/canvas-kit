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
  type: string;
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
    transitions: '0.2s box-shadow',
    padding: spacingNumbers.xxs, // Compensate for border
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

class TextInputBase extends React.Component<TextInputBaseProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    type: 'text',
  };

  public render() {
    const {inputProps, ...componentProps} = this.props;
    return <Input {...componentProps} {...inputProps} />;
  }
}

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;
  static LabelPosition = LabelPosition;

  render() {
    const {labelPosition, grow, ...inputProps} = this.props;
    const {error} = inputProps;

    let icon: React.ReactElement<SystemIcon> | undefined;
    switch (error) {
      case ErrorType.Alert:
        icon = (
          <SystemIcon
            icon={exclamationTriangleIcon}
            color={inputColors.warning.message}
            colorHover={inputColors.warning.message}
          />
        );
        break;
      case ErrorType.Error:
        icon = (
          <SystemIcon
            icon={exclamationCircleIcon}
            color={inputColors.error.border}
            colorHover={inputColors.error.border}
          />
        );
        break;
      default:
    }

    return (
      <InputIconContainer icon={icon} grow={grow}>
        <TextInputBase hasIcon={typeof icon !== 'undefined'} {...inputProps} grow={grow} />
      </InputIconContainer>
    );
  }
}
