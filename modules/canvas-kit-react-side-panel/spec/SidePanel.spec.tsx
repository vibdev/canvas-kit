import * as React from 'react';
import {mount} from 'enzyme';

import SidePanel from '../lib/SidePanel';
describe('Popup', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function', () => {
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
