import * as React from 'react';
import {mount} from 'enzyme';
import AppletIcon from '../lib/AppletIcon';
import Icon from '../lib/Icon';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';

describe('Applet Icon', () => {
  test('Passes through className to internal Icon component', () => {
    const custom = 'inner-icon-class';
    const component = mount(<AppletIcon icon={benefitsIcon} className={custom} />);
    expect(
      component
        .find(Icon)
        .find('span')
        .prop('className')
    ).toContain(custom);
  });
});
