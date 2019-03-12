import {colors} from '@workday/canvas-kit-react-core';
import {stringByConvertingToValidHexValue, pickDarkOrLightColor} from '../lib/ColorUtils';

describe('Color Utils methods', () => {
  describe('pickDarkOrLightColor', () => {
    it('should use black if luminicance is light', () => {
      expect(pickDarkOrLightColor('#ffffff')).toEqual('#000');
      expect(pickDarkOrLightColor('#eee')).toEqual('#000');
    });
    it('should use white if luminicance is dark', () => {
      expect(pickDarkOrLightColor('#e6e')).toEqual(colors.soap100);
      expect(pickDarkOrLightColor('#000000')).toEqual(colors.soap100);
    });
  });

  describe('stringByConvertingToValidHexValue', () => {
    it('should always return a valid partial hex value', () => {
      type Case = {nextValue: string; currentValue: string; expectedOutput: string};
      const testCases: Case[] = [
        {nextValue: '', currentValue: '', expectedOutput: ''},
        {nextValue: 'AAA', currentValue: 'AA', expectedOutput: 'AAA'},
        {nextValue: 'FFFFFFF', currentValue: 'FFFFFF', expectedOutput: 'FFFFFFF'},
        {nextValue: '#FFF', currentValue: 'FFF', expectedOutput: 'FFF'},
        {nextValue: 'AAAA', currentValue: '#AAA', expectedOutput: 'AAAA'},
        {nextValue: '#', currentValue: '', expectedOutput: ''},
      ];

      testCases.forEach((kase: Case) => {
        const result = stringByConvertingToValidHexValue(kase.nextValue, kase.currentValue);
        expect(result).toEqual(kase.expectedOutput);
      });
    });
  });
});
