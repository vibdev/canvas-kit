import * as renderer from 'react-test-renderer';
import Graphic from '../lib/Graphic';
import * as React from 'react';
import {badgeAchievementGraphic} from '@workday/canvas-graphics-web';

describe('Applet Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Graphic icon={badgeAchievementGraphic} />);
    expect(component).toMatchSnapshot();
  });
});
