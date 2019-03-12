import {colors} from '@workday/canvas-kit-react-core';
import chroma from 'chroma-js';

const isValidHexCharacter = (character: string): boolean => {
  return /[a-fA-F0-9]/.test(character);
};

const stringByConvertingToValidHexValue = (value: string, current: string): string => {
  const first = value.slice(0, 1);
  const tail = value.slice(1);
  const last = value.slice(value.length - 1);
  if (value === '') {
    return value;
  }
  if (first === '#') {
    if (value.length === 1) {
      return current;
    } else {
      if (tail.length <= 6) {
        if (isValidHexCharacter(last)) {
          return tail;
        }
      } else {
        if (isValidHexCharacter(tail)) {
          return tail;
        }
      }
    }
  }
  if (value.length <= 6) {
    if (isValidHexCharacter(last)) {
      return value;
    }
  } else {
    if (isValidHexCharacter(value)) {
      return value;
    }
  }
  return current;
};

/**
 *
 * Chooses luminance of depending on the rgb value. Eventually should be replaced
 * by by Chroma 2.0
 */
const pickDarkOrLightColor = (color: string) => {
  const rgbColor = chroma(color).rgb();
  if (rgbColor) {
    const r: number = rgbColor[0];
    const g: number = rgbColor[1];
    const b: number = rgbColor[2];
    /** Based on : https://www.w3.org/TR/WCAG20-TECHS/G18.html */
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : colors.soap100;
  } else {
    return;
  }
};

const isValidHexValue = (hexCode: string): boolean => {
  return hexCode.length > 6 ? false : /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(hexCode);
};

export {
  isValidHexCharacter,
  isValidHexValue,
  stringByConvertingToValidHexValue,
  pickDarkOrLightColor,
};
