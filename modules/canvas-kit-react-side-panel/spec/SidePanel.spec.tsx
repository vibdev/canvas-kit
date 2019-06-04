import * as React from 'react';
import {mount} from 'enzyme';

import SidePanel from '../lib/SidePanel';

describe('SidePanel', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function onToggleClick', () => {
    const component = mount(
      <SidePanel open={true} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );
    const sidePanel = component.find('button');
    sidePanel.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });
});
