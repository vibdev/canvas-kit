import * as React from 'react';
import {shallow, render} from 'enzyme';
import Icon from '../lib/Icon';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {createMatchers} from 'jest-emotion';
import * as emotion from 'emotion';

expect.extend(createMatchers(emotion)); // TODO: This syntax changes in jest-emotion 10

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = spyOn(global.console, 'error');
    const component = shallow(<Icon icon={shieldIcon} type={CanvasIconTypes.System} styles={{}} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(component.type()).toBeNull();
    component.unmount();
  });

  test('Sets size correctly', () => {
    const size = 14;
    const component = shallow(
      <Icon icon={shieldIcon} size={size} type={CanvasIconTypes.Accent} styles={{}} />
    );
    expect(component).toHaveStyleRule('height', size + 'px');
    expect(component).toHaveStyleRule('width', size + 'px');
    component.unmount();
  });

  test('SVG is set in innerHTML', () => {
    const component = render(<Icon icon={shieldIcon} type={CanvasIconTypes.Accent} styles={{}} />);
    expect(component.find('svg')).toHaveLength(1);
  });

  test('Custom className overrides base iconStyle class', () => {
    const customClassName = 'custom-class-name';
    const testProps = {
      className: customClassName,
    };
    const component = shallow(
      <Icon icon={shieldIcon} elemProps={testProps} type={CanvasIconTypes.Accent} styles={{}} />
    );
    const classNames = component.props().className.split(' ');

    expect(component.props().className.includes(customClassName));

    // The user defined class (customClassName), should always be last
    expect(classNames.pop()).toBe(customClassName);
    component.unmount();
  });
});
