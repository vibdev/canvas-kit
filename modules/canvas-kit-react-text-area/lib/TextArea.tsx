import * as React from 'react';
import styled from 'react-emotion';
import {Interpolation} from 'create-emotion-styled';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
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

export interface TextAreaProps
  extends GrowthBehavior,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  error?: ErrorType;
  hasIcon?: boolean;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: any;
}

export const textAreaStyles: Interpolation<TextAreaProps> = [
  type.body,
  {
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
      '& + div': {
        // Resize Handle
        height: 9,
        width: 9,
        bottom: '2px',
        right: '2px',
      },
    },
    '&:disabled': {
      backgroundColor: inputColors.disabled.background,
      borderColor: inputColors.disabled.border,
      color: inputColors.disabled.text,
      '&::placeholder': {
        color: colors.licorice100,
      },
      '& + div': {
        backgroundColor: inputColors.disabled.background, // Resize Handle background
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
          '& + div': {
            // Resize Handle
            height: 9,
            width: 9,
            bottom: '2px',
            right: '2px',
          },
        };
      case ErrorType.Alert:
        return {
          borderColor: inputColors.warning.border,
          boxShadow: `inset 0 0 0 1px ${inputColors.warning.border}`,
          '&:hover': {
            borderColor: inputColors.warning.border,
          },
          '& + div': {
            // Resize Handle
            height: 9,
            width: 9,
            bottom: '2px',
            right: '2px',
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
      resize: 'none',
      '& + div': {
        // Resize Handle
        display: 'none',
      },
    },
];

const TextAreaResizeWrapper = styled('div')<TextAreaProps>({
  borderRadius: '3px',
  height: 10,
  width: 10,
  backgroundColor: 'white',
  position: 'absolute',
  pointerEvents: 'none',
  bottom: '1px',
  right: '1px',
  transition: 'bottom 0.2s, right 0.2s, height 0.2s, width 0.2s',
});

const TextAreaResizeIcon = styled('div')<TextAreaProps>({
  borderTop: `6px solid ${inputColors.border}`,
  borderLeft: '6px solid transparent',
  borderRight: '6px solid transparent',
  borderBottom: '6px solid transparent',
  pointerEvents: 'none',
  transform: 'rotate(-45deg)',
});

const TextArea = styled('textarea')<TextAreaProps>(...textAreaStyles);

export default class TextInput extends React.Component<TextAreaProps> {
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
        <TextArea
          hasIcon={typeof icon !== 'undefined'}
          innerRef={inputRef}
          grow={grow}
          error={error}
          {...inputProps}
        />
        <TextAreaResizeWrapper>
          <TextAreaResizeIcon />
        </TextAreaResizeWrapper>
      </InputIconContainer>
    );
  }
}
