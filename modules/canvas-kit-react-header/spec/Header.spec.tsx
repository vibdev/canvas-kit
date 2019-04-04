import * as React from 'react';
import Header from '../lib/Header';
import {shallow, mount} from 'enzyme';
import {IconButton} from '@workday/canvas-kit-react-button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon, justifyIcon} from '@workday/canvas-system-icons-web';
import {themes} from '../lib/shared/themes';

declare global {
  interface Window {
    resizeBy: (x: number, y: number) => void;
  }
}
const map: {[key: string]: any} = {};
window.addEventListener = jest.fn((event, callback) => {
  map[event] = callback;
});
window.removeEventListener = jest.fn((event, callback) => {
  if (map[event] && map[event] === callback) {
    delete map[event];
  }
});
window.dispatchEvent = (event: Event) => {
  if (map[event.type]) {
    map[event.type]();
  }

  // TODO: not totally accurate
  return false;
};

window.resizeBy = (x: number, y: number) => {
  // @ts-ignore
  window.innerWidth = x;
  // @ts-ignore
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

// @ts-ignore
window.requestAnimationFrame = cbFn => cbFn();

describe('Header', () => {
  const cb = jest.fn();
  beforeEach(() => {
    window.resizeBy(1280, 1024);
  });

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
    const component = shallow<Header>(<Header />);
    expect(component.instance().getScreenSize(widths.sm, breakpoints)).toBe('sm');
    expect(component.instance().getScreenSize(widths.md, breakpoints)).toBe('md');
    expect(component.instance().getScreenSize(widths.lg, breakpoints)).toBe('lg');
  });

  test('resize eventlisteners are throttled', () => {
    const spy = jest.spyOn(Header.prototype, 'updateScreenSize');
    mount<Header>(<Header />);

    expect(spy).not.toHaveBeenCalled();

    window.resizeBy(319, 720);
    window.resizeBy(320, 720);
    window.resizeBy(321, 720);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('resize eventlisteners are correctly unmounted', () => {
    const spy = jest.spyOn(Header.prototype, 'updateScreenSize');
    const wrapper = mount<Header>(<Header />);

    expect(spy).not.toHaveBeenCalled();

    window.resizeBy(319, 720);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();

    wrapper.unmount();
    window.resizeBy(320, 720);
    expect(spy).not.toHaveBeenCalled();
  });

  describe('How Header children render', () => {
    const icon = <SystemIcon icon={activityStreamIcon} />;

    beforeEach(() => {
      window.resizeBy(1280, 1024);
    });

    test('Renders non-React child elements as is', () => {
      const text = 'not a react element';
      const wrapper = shallow<Header>(<Header>{text}</Header>);

      expect(wrapper.contains(text));
    });

    test('Renders a div element as is', () => {
      const wrapper = shallow<Header>(
        <Header>
          <div>Test</div>
        </Header>
      );
      expect(
        wrapper
          .find('div')
          .first()
          .contains('Test')
      ).toBeTruthy();
    });

    test('Automatically alters child SystemIcon color and colorHover', () => {
      const theme = Header.Theme.Blue;

      const expectedColors = {
        color: themes[theme].systemIcon.color,
        colorHover: themes[theme].systemIcon.colorHover,
      };

      const wrapper = mount<Header>(
        <Header themeColor={theme}>
          <a href="#">{icon}</a>
        </Header>
      );
      const renderedIcon = wrapper.find(SystemIcon).first();

      expect(wrapper.state().screenSize).toBe('lg');
      expect(wrapper.find(SystemIcon)).toHaveLength(1);
      expect(renderedIcon.props().color).toBe(expectedColors.color);
      expect(renderedIcon.props().colorHover).toBe(expectedColors.colorHover);
      expect(renderedIcon.props().icon).toBe(activityStreamIcon);
    });

    test('Renders a child hamburger menu (IconButton) when width is at "sm" breakpoint', () => {
      window.resizeBy(319, 768);

      const wrapper = mount<Header>(<Header>{icon}</Header>);
      const renderedIcon = wrapper.find(IconButton).first();

      expect(wrapper.state().screenSize).toBe('sm');
      expect(renderedIcon.props().icon).toBe(justifyIcon);
    });
  });
});
