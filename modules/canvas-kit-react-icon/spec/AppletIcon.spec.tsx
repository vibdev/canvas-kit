import * as React from 'react';
import {shallow} from 'enzyme';
import AppletIcon from '../lib/AppletIcon';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';

describe('Applet Icon', () => {
  test('Throws error if using unofficial color names', () => {
    const unknownColor = 'Peach';

    const iconOfUnknownColor = () => {
      // @ts-ignore TS catches error, so we have to squelch to test the throw
      const component = shallow(<AppletIcon icon={benefitsIcon} color={unknownColor} />);
      // in case it doesn't throw
      component.unmount();
    };

    expect(iconOfUnknownColor).toThrow();
  });
});
