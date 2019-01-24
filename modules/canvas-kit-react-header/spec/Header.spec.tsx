import * as React from 'react';
import Header from '../lib/Header';
import {shallow, mount} from 'enzyme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon, justifyIcon} from '@workday/canvas-system-icons-web';
import {themes} from '../lib/shared/themes';

declare global {
  interface Window {
    resizeBy: (x: number, y: number) => void;
  }
}

window.resizeBy = (x: number, y: number) => {
  // @ts-ignore
  window.innerWidth = x;
  // @ts-ignore
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

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

    test('Renders a child hamburger menu (SystemIcon) when width is at "sm" breakpoint', () => {
      window.resizeBy(319, 768);

      const wrapper = mount<Header>(<Header>{icon}</Header>);
      const renderedIcon = wrapper.find(SystemIcon).first();

      expect(wrapper.state().screenSize).toBe('sm');
      expect(renderedIcon.props().icon).toBe(justifyIcon);
    });
  });
});
