import {ErrorType} from '../types';
import {CSSObject} from 'create-emotion';
import {colors, inputColors} from '@workday/canvas-kit-react-core';

export default function errorRing(error?: ErrorType): CSSObject {
  let errorRingColor;

  if (error === ErrorType.Error) {
    errorRingColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    errorRingColor = inputColors.warning.border;
  } else {
    return {};
  }

  return {
    border: `1px solid ${errorRingColor}`,
    transition: '100ms box-shadow',
    boxShadow: `inset 0 0 0 1px ${errorRingColor}`,
    '&:hover': {
      borderColor: errorRingColor,
    },
    '&:focus:not([disabled])': {
      borderColor: errorRingColor,
      boxShadow: `inset 0 0 0 1px ${errorRingColor},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${inputColors.focusBorder}`,
    },
  };
}
