import * as React from 'react';
import {Search} from '../lib/parts/Search';
import {mount} from 'enzyme';
import {HeaderTheme} from '../lib/shared/types';
import {MenuItem} from '@workday/canvas-kit-react-menu';

describe('Header Search', () => {
  const cb = jest.fn();
  const keys = {
    enter: {keyCode: 13, key: 'Enter'},
    escape: {keyCode: 27, key: 'Escape'},
    upArrow: {keyCode: 38, key: 'ArrowUp'},
    downArrow: {keyCode: 40, key: 'ArrowDown'},
    b: {keyCode: 66, key: 'b'},
  };
  afterEach(() => {
    cb.mockReset();
  });

  test('Trying to search without a callback should do nothing', () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {preventDefault: mockPreventDefault};
    const component = mount(<Search rightAlign={true} />);
    component.find('form').simulate('submit', mockEvent);

    expect(mockPreventDefault).toBeCalled();
  });

  test('Searching something should call callback', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('form').simulate('submit');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Collapsed prop should render search icon (without form) until clicked', () => {
    const component = mount(<Search collapse={true} />);

    expect(component.find('form').exists()).toBe(false);

    const openIcon = component.find('span'); // I was having trouble targeting svgs
    openIcon.simulate('click');

    const form = component.find('form');
    expect(form.exists()).toBe(true);

    const closeIcon = form.find('span');
    closeIcon.simulate('click');

    expect(
      component
        .find('form')
        .render()
        .hasClass('search-exit-active')
    ).toBe(true);

    component.unmount();
  });

  test('Focussing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);
    component.find('input').simulate('focus');

    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Blur should update focus', () => {
    const component = mount(<Search onSearchSubmit={cb} />);
    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.find('input').simulate('blur');
    expect(component.state('focused')).toBe(false);
    component.unmount();
  });

  test('Hovering input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('mouseLeave');
    expect(component.state('hovered')).toBe(false);
    component.unmount();
  });

  test('Hovering and focusing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Focussing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} themeColor={HeaderTheme.Blue} />);

    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Hovering input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} themeColor={HeaderTheme.Blue} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('mouseLeave');
    expect(component.state('hovered')).toBe(false);
    component.unmount();
  });

  test('Hovering and focusing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} themeColor={HeaderTheme.Blue} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Input with value', () => {
    const component = mount(<Search value="Hello World" />);
    expect(component.state('value')).toBe('Hello World');
    component.unmount();
  });

  test('Input with changing value', () => {
    const component = mount(<Search value="Hello World" />);
    component.find('input').simulate('change', {target: {value: 'Foo Bar'}});
    expect(component.state('value')).toBe('Foo Bar');
    component.unmount();
  });

  test('Clear Search Input', () => {
    const component = mount(<Search value="Hello World" />);
    component.find('span.reset-input').simulate('click');
    expect(component.state('value')).toBe('');
    component.unmount();
  });

  test('Search with listbox array prop should have combobox role', () => {
    const component = mount(<Search autocompleteItems={[]} />);
    const form = component.find('form');
    expect(form.render().attr('role')).toBe('combobox');
    component.unmount();
  });

  test('Search without listbox array prop should not have combobox role', () => {
    const component = mount(<Search autocompleteItems={undefined} />);
    const form = component.find('form');
    expect(form.render().attr('role')).toBe(undefined);
    component.unmount();
  });

  test('should loop around selected items using down arrow', () => {
    const id = 'my-id';
    const component = mount(
      <Search accessibleId={id} autocompleteItems={[<MenuItem key="1" />, <MenuItem key="2" />]} />
    );
    const item = component.find('input');

    item.simulate('keydown', keys.downArrow);
    expect(item.render().attr('aria-activedescendant')).toEqual(`${id}-option-0`);
    item.simulate('keydown', keys.downArrow);
    expect(item.render().attr('aria-activedescendant')).toEqual(`${id}-option-1`);
    item.simulate('keydown', keys.downArrow);
    expect(item.render().attr('aria-activedescendant')).toEqual(`${id}-option-0`);
    component.unmount();
  });

  test('should loop around selected items using up arrow', () => {
    const id = 'my-id';
    const component = mount(
      <Search accessibleId={id} autocompleteItems={[<MenuItem key="1" />, <MenuItem key="2" />]} />
    );
    const item = component.find('input');

    item.simulate('keydown', keys.upArrow);
    expect(item.render().attr('aria-activedescendant')).toEqual(`${id}-option-1`);
    item.simulate('keydown', keys.upArrow);
    expect(item.render().attr('aria-activedescendant')).toEqual(`${id}-option-0`);
    component.unmount();
  });

  test('should reset selectedAutocompleteIndex and activedescendant after typing more', () => {
    const id = 'my-id';
    const component = mount(
      <Search accessibleId={id} autocompleteItems={[<MenuItem key="1" />]} />
    );
    const item = component.find('input');

    expect(item.render().attr('aria-activedescendant')).toEqual('');
    expect(component.state('selectedAutocompleteIndex')).toBe(null);
    item.simulate('keydown', keys.downArrow);
    expect(item.render().attr('aria-activedescendant')).toEqual(`${id}-option-0`);
    expect(component.state('selectedAutocompleteIndex')).toBe(0);
    item.simulate('keydown', keys.b);
    expect(item.render().attr('aria-activedescendant')).toEqual('');
    expect(component.state('selectedAutocompleteIndex')).toBe(null);
    component.unmount();
  });

  test('escape should clear value', () => {
    const component = mount(<Search autocompleteItems={[<MenuItem key="1" />]} />);
    const item = component.find('input');

    item.simulate('change', {target: {value: keys.b.key}});
    expect(component.state('value')).toBe(keys.b.key);
    item.simulate('keydown', keys.escape);
    expect(component.state('value')).toBe('');
    component.unmount();
  });

  test('should hide autocomplete when clearing listbox items', () => {
    const component = mount(
      <Search autocompleteItems={[<MenuItem key="1" />, <MenuItem key="2" />]} />
    );

    expect(component.state('showingAutocomplete')).toBe(true);
    component.setProps({autocompleteItems: []});
    expect(component.state('showingAutocomplete')).toBe(false);
    component.unmount();
  });

  test('should call callback function when enter is pressed', () => {
    const component = mount(<Search autocompleteItems={[<MenuItem key="1" onClick={cb} />]} />);
    const item = component.find('input');

    item.simulate('keydown', keys.downArrow);
    item.simulate('keydown', keys.enter);
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should call callback function when list item is clicked', () => {
    const component = mount(<Search autocompleteItems={[<MenuItem key="1" onClick={cb} />]} />);
    const item = component.find('input');

    item.simulate('focus');
    component.find('li').simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should call callback function when responsive list item is clicked', () => {
    const component = mount(
      <Search collapse={true} autocompleteItems={[<MenuItem key="1" onClick={cb} />]} />
    );
    const openIcon = component.find('span'); // I was having trouble targeting svgs
    openIcon.simulate('click');

    const input = component.find('input');
    input.simulate('focus');
    component.find('li').simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should not call callback function when enter is pressed on disabled item', () => {
    const component = mount(
      <Search autocompleteItems={[<MenuItem key="1" isDisabled={true} onClick={cb} />]} />
    );
    const item = component.find('input');

    item.simulate('keydown', keys.downArrow);
    item.simulate('keydown', keys.enter);
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should not call callback function when meta key is pressed', () => {
    const component = mount(
      <Search autocompleteItems={[<MenuItem key="1" isDisabled={true} onClick={cb} />]} />
    );
    const item = component.find('input');

    item.simulate('keydown', keys.downArrow);
    item.simulate('keydown', {...keys.enter, metaKey: true});
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should call value change function when input value changes', () => {
    const component = mount(<Search onValueChange={cb} />);
    const item = component.find('input');

    item.simulate('change', {target: {value: keys.b.key}});
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });
});
