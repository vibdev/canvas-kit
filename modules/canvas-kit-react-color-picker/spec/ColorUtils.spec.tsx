import {hexToRgb} from '../lib/ColorUtils';

describe('Color Utils methods', () => {
  it('should covert a shorthand hex to rgb object', () => {
    expect(hexToRgb('#fff')).toEqual({r: 255, g: 255, b: 255});
  });
  it('should covert a hex to rgb object', () => {
    expect(hexToRgb('#ffffff')).toEqual({r: 255, g: 255, b: 255});
  });

  // describe('stringByConvertingToValidHexValue', () => {
  //   it('should always return a valid partial hex value', () => {
  //     type Case = { nextValue: string, currentValue: string, expectedOutput: string }
  //     const testCases: Case[] = [
  //       { nextValue: '', currentValue: '', expectedOutput: '' },
  //       { nextValue: 'AAA', currentValue: 'AA', expectedOutput: 'AAA' },
  //       { nextValue: 'FFFFFFF', currentValue: 'FFFFFF', expectedOutput: '' },
  //     ]
  //     testCases.forEach((case: Case) => {
  //       const result = stringByConvertingToValidHexValue(case.nextValue, case.currentValue)
  //       expect(result).toEqual(case.expectedOutput)
  //     })
  //   })
  // })
});
