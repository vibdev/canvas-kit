import {hexToRgb} from '../lib/ColorUtils';

describe('Color Utils methods', () => {
  it('should covert a shorthand hex to rgb object', () => {
    expect(hexToRgb('#fff')).toEqual({r: 255, g: 255, b: 255});
  });
  it('should covert a hex to rgb object', () => {
    expect(hexToRgb('#ffffff')).toEqual({r: 255, g: 255, b: 255});
  });
});
