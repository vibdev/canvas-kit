import * as renderer from 'react-test-renderer';
import IconButton from '../lib/IconButton';
import * as React from 'react';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

describe('Icon Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <IconButton>
        <svg>Hello</svg>
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an icon button, toggled', () => {
    const component = renderer.create(
      <IconButton toggled={true}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });
});
