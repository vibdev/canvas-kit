import React from 'react';
import Button from '../Button';
import {mount} from 'enzyme';

describe('Button', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a button with id', () => {
    const component = mount(<Button id="myBtn">Button Label</Button>);
    expect(component.find('button').props().id).toBe('myBtn');
    component.unmount();
  });

  test('should call a callback function', () => {
    const component = mount(<Button onClick={cb}>Button Label</Button>);
    const button = component.find('button');
    button.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should not call a callback function when disabled', () => {
    const component = mount(
      <Button onClick={cb} disabled={true}>
        Button Label
      </Button>
    );
    const button = component.find('button');
    button.simulate('click');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });
});

describe('Button Accessibility', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('button should be using HTML5 <button> tag', () => {
    const component = mount(<Button>Button</Button>);
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('button');
    component.unmount();
  });

  test("button's label should be in a span", () => {
    const labelText: string = 'Button';
    const component = mount(<Button>{labelText}</Button>);
    expect(
      component
        .find('button')
        .find('span')
        .getDOMNode().innerHTML
    ).toEqual(labelText);
    component.unmount();
  });

  test('enabled button should NOT have disabled attribute set', () => {
    const component = mount(<Button disabled={false}>Button</Button>);
    expect(
      component
        .find('button')
        .getDOMNode()
        .hasAttribute('disabled')
    ).toEqual(false);
    component.unmount();
  });

  test('disabled button should have disabled attribute set', () => {
    const component = mount(<Button disabled={true}>Button</Button>);
    expect(
      component
        .find('button')
        .getDOMNode()
        .hasAttribute('disabled')
    ).toEqual(true);
    component.unmount();
  });
});
