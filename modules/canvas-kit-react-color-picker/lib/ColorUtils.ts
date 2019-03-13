import {colors} from '@workday/canvas-kit-react-core';

const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const rgb = hex.replace(shorthandRegex, function(m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rgb);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 *
 * Chooses luminance color depending on the rgb value. Eventually should be replaced
 * by by Chroma 2.0
 */
const pickDarkOrLightColor = (color: string) => {
  const rgbColor = hexToRgb(color);
  if (rgbColor) {
    const r: number = rgbColor.r;
    const g: number = rgbColor.g;
    const b: number = rgbColor.b;
    /** Based on : https://www.w3.org/TR/WCAG20-TECHS/G18.html */
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : colors.soap100;
  } else {
    return;
  }
};

export {pickDarkOrLightColor};
