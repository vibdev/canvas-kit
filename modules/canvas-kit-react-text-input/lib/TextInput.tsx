import * as React from 'react';
import {canvas, SystemIcon} from '@workday/canvas-kit-react';
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
    const {error, labelPosition} = this.props;

    let icon: React.ReactElement<SystemIcon> | undefined;
    switch (error) {
      case ErrorType.Alert:
        icon = (
          <SystemIcon
            icon={exclamationTriangleIcon}
            color={canvas.inputColors.warning.message}
            colorHover={canvas.inputColors.warning.message}
          />
        );
        break;
      case ErrorType.Error:
        icon = (
          <SystemIcon
            icon={exclamationCircleIcon}
            color={canvas.inputColors.error.border}
            colorHover={canvas.inputColors.error.border}
          />
        );
        break;
      default:
    }

    return (
      <InputIconContainer labelPosition={labelPosition} icon={icon}>
        <TextInput {...this.props} />
      </InputIconContainer>
    );
  }
}
