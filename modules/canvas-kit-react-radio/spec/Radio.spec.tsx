import * as React from 'react';
import {mount} from 'enzyme';
import Radio from '../lib/Radio';

describe('Radio Input', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render an radio input with id', () => {
    const component = mount(<Radio id="myRadio" onChange={cb} />);
    expect(component.find('input').props().id).toBe('myRadio');
    component.unmount();
  });

  test('render an radio input with name', () => {
    const component = mount(<Radio name="myRadio" onChange={cb} />);
    expect(component.find('input').props().name).toBe('myRadio');
    component.unmount();
  });

  test('render an radio input with value', () => {
    const component = mount(<Radio value="myRadio" onChange={cb} />);
    expect(component.find('input').props().value).toBe('myRadio');
    component.unmount();
  });

  test('render an checked radio input', () => {
    const component = mount(<Radio checked={true} onChange={cb} />);
    expect(component.find('input').props().checked).toBe(true);
    component.unmount();
  });

  test('render an disabled radio input', () => {
    const component = mount(<Radio disabled={true} onChange={cb} />);
    expect(component.find('input').props().disabled).toBe(true);
    component.unmount();
  });

  test('should call a callback function', () => {
    const component = mount(<Radio onChange={cb} />);
    const input = component.find('input');
    input.simulate('change');

    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });
});

describe('Radio Button Accessibility', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('enabled radio input should NOT have disabled attribute set', () => {
    const component = mount(<Radio disabled={false} onChange={cb} />);

    expect(component.find('input').props().disabled).toBe(false);
    component.unmount();
  });

  test('disabled radio input should have disabled attribute set', () => {
    const component = mount(<Radio disabled={true} onChange={cb} />);

    expect(component.find('input').props().disabled).toBe(true);
    component.unmount();
  });
});
