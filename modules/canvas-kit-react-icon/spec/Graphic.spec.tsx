import * as React from 'react';
import {shallow} from 'enzyme';
import Graphic from '../lib/Graphic';
import Svg from '../lib/Svg';
import {badgeAchievementGraphic} from '@workday/canvas-graphics-web';

describe('Graphic', () => {
  test('Icon is of type graphic and respects size', () => {
    const component = shallow(<Graphic src={badgeAchievementGraphic} />);
    expect(component.find(Svg).prop('type')).toEqual('graphic');
    component.unmount();
  });
});
