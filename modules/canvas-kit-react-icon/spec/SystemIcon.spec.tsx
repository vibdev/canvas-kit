import * as React from 'react';
import {shallow} from 'enzyme';
import SystemIcon from '../lib/SystemIcon';
import Icon from '../lib/Icon';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {colors, iconColors} from '@workday/canvas-kit-react-core';

describe('System Icon', () => {
  test('Defaults styles are set correctly', () => {
    const component = shallow(<SystemIcon icon={activityStreamIcon} />);
    const componentStyle = component.find(Icon).prop('styles');
    expect(componentStyle['& .wd-icon-fill']).toHaveProperty('fill', iconColors.standard);
    expect(componentStyle[':hover .wd-icon-fill']).toHaveProperty('fill', iconColors.hover);
    expect(componentStyle['& .wd-icon-background']).toHaveProperty('fill', 'transparent');
    expect(componentStyle[':hover .wd-icon-background']).toHaveProperty('fill', 'transparent');
    component.unmount();
  });

  test('color and background props are set correctly', () => {
    const color = 'peachpuff';
    const background = 'peachpuff';
    const colorHover = 'goldenrod';
    const backgroundHover = 'goldenrod';
    const component = shallow(
      <SystemIcon
        icon={activityStreamIcon}
        color={color}
        colorHover={colorHover}
        background={background}
        backgroundHover={backgroundHover}
      />
    );
    const componentStyle = component.find(Icon).prop('styles');
    expect(componentStyle['& .wd-icon-fill']).toHaveProperty('fill', color);
    expect(componentStyle[':hover .wd-icon-fill']).toHaveProperty('fill', colorHover);
    expect(componentStyle['& .wd-icon-background']).toHaveProperty('fill', color);
    expect(componentStyle[':hover .wd-icon-background']).toHaveProperty('fill', colorHover);
    component.unmount();
  });

  test('accent and fill props override color if set', () => {
    const color = 'peachpuff';
    const colorHover = 'goldenrod';
    const accent = colors.blueberry200;
    const accentHover = colors.blueberry500;
    const fill = colors.cinnamon200;
    const fillHover = colors.cinnamon500;
    const component = shallow(
      <SystemIcon
        icon={activityStreamIcon}
        color={color}
        colorHover={colorHover}
        accent={accent}
        accentHover={accentHover}
        fill={fill}
        fillHover={fillHover}
      />
    );
    const componentStyle = component.find(Icon).prop('styles');
    expect(componentStyle['& .wd-icon-fill']).toHaveProperty('fill', fill);
    expect(componentStyle[':hover .wd-icon-fill']).toHaveProperty('fill', fillHover);
    expect(componentStyle['& .wd-icon-accent']).toHaveProperty('fill', accent);
    expect(componentStyle[':hover .wd-icon-accent']).toHaveProperty('fill', accentHover);
    component.unmount();
  });
});
