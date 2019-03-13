import {colors} from '@workday/canvas-kit-react-core';
import {pickDarkOrLightColor} from '../lib/ColorUtils';

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
});
