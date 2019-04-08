import * as renderer from 'react-test-renderer';
import Graphic from '../lib/Graphic';
import * as React from 'react';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Graphic Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Graphic src={shieldIcon} />);
    expect(component).toMatchSnapshot();
  });
});
