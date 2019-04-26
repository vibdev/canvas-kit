import {CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {TransformOrigin} from '../types';

type translateMapType = {
  x: {[key in TransformOrigin['horizontal']]: number};
  y: {[key in TransformOrigin['vertical']]: number};
};

const translateMap: translateMapType = {
  y: {
    top: -1,
    center: 0,
    bottom: 1,
  },
  x: {
    left: -1,
    center: 0,
    right: 1,
  },
};

/**
 * Generates a media queries given a set of named breakpoints
 * @param {Object} breakpoints Object of key-value pairs where the key is the name of
 * the breakpoint size and the value is the min-width of that breakpoint
 * @returns {Object} A set of CSS media queries for each breakpoint size
 */
export const getTranslateFromOrigin = (
  transformOrigin: TransformOrigin,
  distance: CanvasSpacingValue
) => {
  return {
    x: translateMap.x[transformOrigin.horizontal] * parseInt(distance, 10),
    y: translateMap.y[transformOrigin.vertical] * parseInt(distance, 10),
  };
};
