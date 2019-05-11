import {ErrorType} from '../types';
import {CSSObject} from 'create-emotion';
import {colors, inputColors} from '@workday/canvas-kit-react-core';

export default function errorRing(error?: ErrorType): CSSObject {
  let errorBorderColor;

  if (error === ErrorType.Error) {
    errorBorderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    errorBorderColor = inputColors.warning.border;
  } else {
    return {};
  }

  return {
    border: `1px solid ${errorBorderColor}`,
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
}
