import * as React from 'react';
import {shallow} from 'enzyme';
import Graphic from '../lib/Graphic';
import Icon from '../lib/Icon';
import {badgeAchievementGraphic} from '@workday/canvas-graphics-web';

describe('Graphic', () => {
  test('Icon is of type graphic and respects size', () => {
    const component = shallow(<Graphic icon={badgeAchievementGraphic} size={40} />);
    expect(component.find(Icon).prop('type')).toEqual('graphic');
    expect(component.find(Icon).prop('size')).toEqual(40);
    component.unmount();
  });
});
