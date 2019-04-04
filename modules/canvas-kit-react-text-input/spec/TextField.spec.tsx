import * as React from 'react';
import {mount} from 'enzyme';
import TextField from '../lib/TextField';

describe('TextField', () => {
  test('renders an input', () => {
    const component = mount(<TextField />);

    expect(component.find('input')).toBeTruthy();

    component.unmount();
  });
});
