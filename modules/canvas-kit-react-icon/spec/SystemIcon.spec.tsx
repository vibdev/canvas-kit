import * as React from 'react';
import {mount} from 'enzyme';
import SystemIcon from '../lib/SystemIcon';
import Icon from '../lib/Icon';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('System Icon', () => {
  test('Passes through className to internal Icon component', () => {
    const custom = 'inner-icon-class';
    const component = mount(<SystemIcon icon={activityStreamIcon} className={custom} />);
    expect(
      component
        .find(Icon)
        .find('span')
        .prop('className')
    ).toContain(custom);
  });
});
