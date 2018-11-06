import * as React from 'react';
import PageHeader from '../lib/PageHeader';
import {mount} from 'enzyme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react-core';

describe('Page Header', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should render a title', () => {
    const testTitle = 'Page Header Title';
    const component = mount(<PageHeader title={testTitle} />);
    expect(component.find('h2').contains(testTitle));
  });

  test('should alter SystemIcon components', () => {
    const testColors = {
      color: colors.blackberry100,
      colorHover: colors.cinnamon200,
    };
    const component = mount(
      <PageHeader title="Product Context">
        <a href="#">
          <SystemIcon
            className="icon1"
            icon={exportIcon}
            color={testColors.color}
            colorHover={testColors.colorHover}
          />
        </a>
        <a href="#">
          <SystemIcon className="icon2" icon={fullscreenIcon} />
        </a>
      </PageHeader>
    );
    expect(
      component
        .find(SystemIcon)
        .filter('.icon1')
        .props().color
    ).toBe(colors.frenchVanilla100);
    expect(
      component
        .find(SystemIcon)
        .filter('.icon1')
        .props().colorHover
    ).toBe(colors.blueberry200);
  });
});
