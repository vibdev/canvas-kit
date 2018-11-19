import * as React from 'react';
import Header from '../lib/Header';
import {shallow} from 'enzyme';

describe('Header', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('getScreenSize should return current screen size', () => {
    const breakpoints = {
      sm: 10,
      md: 20,
      lg: 30,
    };
    const widths = {
      sm: 15,
      md: 25,
      lg: 35,
    };
    const component = shallow(<Header />);
    // @ts-ignore
    expect(component.instance().getScreenSize(widths.sm, breakpoints)).toBe('sm');
  });
});
