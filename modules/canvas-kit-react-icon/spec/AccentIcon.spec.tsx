import * as React from 'react';
import {shallow} from 'enzyme';
import AccentIcon from '../lib/AccentIcon';
import Icon from '../lib/Icon';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {colors} from '@workday/canvas-kit-react-core';
import {CSSObject} from 'create-emotion';

describe('Accent Icon', () => {
  test('Defaults styles are set correctly', () => {
    const component = shallow<AccentIcon>(<AccentIcon icon={shieldIcon} />);
    const componentStyle = component.find(Icon).prop('styles') as CSSObject;

    expect(componentStyle['& .color-500']).toHaveProperty('fill', colors.blueberry500);
    expect(componentStyle['& .french-vanilla-100']).toHaveProperty('fill', colors.frenchVanilla100);
    component.unmount();
  });

  test('Can set icon as transparent', () => {
    const component = shallow(<AccentIcon icon={shieldIcon} transparent={true} />);
    const componentStyle = component.find(Icon).prop('styles') as CSSObject;
    expect(componentStyle['& .french-vanilla-100']).toHaveProperty('fill', 'transparent');
    component.unmount();
  });

  test('Can set icon color correctly', () => {
    const component = shallow(<AccentIcon icon={shieldIcon} color={colors.cinnamon500} />);
    const componentStyle = component.find(Icon).prop('styles') as CSSObject;
    expect(componentStyle['& .color-500']).toHaveProperty('fill', colors.cinnamon500);
    component.unmount();
  });
});
