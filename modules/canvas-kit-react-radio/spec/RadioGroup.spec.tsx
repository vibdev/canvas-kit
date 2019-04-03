import * as React from 'react';
import {mount} from 'enzyme';
import Radio from '../lib/Radio';
import RadioGroup from '../lib/RadioGroup';

describe('Radio', () => {
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

    const inputs = component.find('input');

    expect(inputs.length).toEqual(2);
    expect(inputs.get(0).props.name).toEqual('contact');
    expect(inputs.get(1).props.name).toEqual('contact');
  });

  test('can switch to a different radio', () => {
    const component = mount(
      <RadioGroup name="contact" onChange={cb}>
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );

    component
      .find('input')
      .at(1)
      .simulate('change');

    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe('phone');
  });

  test('renders two radios and one disabled as expected', () => {
    const component = mount(
      <RadioGroup name="contact" onChange={cb}>
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" disabled={true} />
        <Radio id="3" value="fax" label="Fax" />
      </RadioGroup>
    );

    const inputs = component.find('input');

    expect(inputs.length).toEqual(3);
    expect(inputs.get(1).props.disabled).toBe(true);
  });
});
