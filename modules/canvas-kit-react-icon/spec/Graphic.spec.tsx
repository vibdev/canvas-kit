import * as React from 'react';
import {shallow} from 'enzyme';
import Graphic, {graphicStyles} from '../lib/Graphic';
import Svg from '../lib/Svg';
import {badgeAchievementGraphic} from '@workday/canvas-graphics-web';

describe('Graphic', () => {
  test('Icon is of type graphic', () => {
    const component = shallow(<Graphic src={badgeAchievementGraphic} />);
    expect(component.find(Svg).prop('type')).toEqual('graphic');
    component.unmount();
  });

  test('No default sizing', () => {
    const componentStyle = graphicStyles({});
    expect(componentStyle).toMatchObject({});
  });

  test('Can set width', () => {
    const componentStyle = graphicStyles({width: 24});
    expect(componentStyle['& svg']).toMatchObject({width: 24, height: '100%'});
  });

  test('Can set height', () => {
    const componentStyle = graphicStyles({height: 24});
    expect(componentStyle['& svg']).toMatchObject({height: 24, width: '100%'});
  });

  test('Width overrides height', () => {
    const componentStyle = graphicStyles({width: 48, height: 24});
    expect(componentStyle['& svg']).toMatchObject({width: 48, height: '100%'});
  });

  test('Grow', () => {
    const componentStyle = graphicStyles({grow: true});
    expect(componentStyle).toMatchObject({
      width: '100%',
      height: '100%',
      '& svg': {
        width: '100%',
        height: '100%',
      },
    });
  });
});
