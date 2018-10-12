import * as React from 'react';
import {mount} from 'enzyme';
import AccentIcon from '../lib/AccentIcon';
import Icon from '../lib/Icon';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Accent Icon', () => {
  test('Passes through className to internal Icon component', () => {
    const custom = 'inner-icon-class';
    const component = mount(<AccentIcon icon={shieldIcon} className={custom} />);
    expect(
      component
        .find(Icon)
        .find('span')
        .prop('className')
    ).toContain(custom);
  });
});
