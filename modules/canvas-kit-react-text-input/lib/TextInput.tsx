import * as React from 'react';
import {inputColors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import TextInput, {TextInputBaseProps} from './TextInputBase';
import InputIconContainer from './InputIconContainer';
import {ErrorType, LabelPosition} from './types';

export interface TextInputProps extends TextInputBaseProps {
  labelPosition?: LabelPosition;
}

export default class Input extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;
  static LabelPosition = LabelPosition;

  render() {
    const {labelPosition, ...inputProps} = this.props;
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
      <InputIconContainer labelPosition={labelPosition} icon={icon}>
        <TextInput hasIcon={typeof icon !== 'undefined'} {...inputProps} />
      </InputIconContainer>
    );
  }
}
