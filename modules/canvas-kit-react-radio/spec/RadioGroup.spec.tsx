import * as React from 'react';
import {mount} from 'enzyme';
import Radio from '../lib/Radio';
import RadioGroup from '../lib/RadioGroup';

describe('Icon Button Toggle', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('renders two radios as expected', () => {
    const component = mount(
      <RadioGroup name="contact">
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );
    expect(component.find('input').length).toEqual(2);

    component
      .find('input')
      .at(0)
      .simulate('click');
  });

  test('renders two radios with disabled radio', () => {
    const component = mount(
      <RadioGroup name="contact">
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
        <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
        <span /> {/* ensure random elements don't break anything */}
      </RadioGroup>
    );

    expect(component.find('input').length).toEqual(3);

    // clicking on a disabled radio shouldn't trigger callback
    component
      .find('input')
      .at(1)
      .simulate('click');

    // clicking on an active radio should trigger callback
    component
      .find('input')
      .at(0)
      .simulate('click');
  });
});
