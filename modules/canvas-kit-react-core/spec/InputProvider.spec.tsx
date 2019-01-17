import * as React from 'react';
import InputProvider, {InputType, InputEventType, inputEventMap} from '../lib/InputProvider';
import {mount} from 'enzyme';

const testInput = (mockEvent: {type: string}, inputType: InputType) => {
  // https://github.com/airbnb/enzyme/issues/426#issuecomment-228601631
  const map: any = {};
  window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  const component = mount(<InputProvider />);
  const eventType = mockEvent.type!;
  map[eventType](mockEvent);

  expect(component.getDOMNode().getAttribute('data-whatinput')).toBe(inputType);
  expect(component.getDOMNode().getAttribute('data-whatintent')).toBe(inputType);
  component.unmount();
};

describe('InputProvider', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  const mockInputEvents: any = {
    [InputEventType.MouseDown]: {
      type: InputEventType.MouseDown,
      screenX: 1,
      screenY: 1,
    },
    [InputEventType.KeyDown]: {
      type: InputEventType.KeyDown,
      key: 'Tab',
      which: 9,
    },
  };

  // runs a test for each mocked input event type above (correlating to the events
  // supported by InputProvider (InputEventType))
  for (const eventType of Object.keys(mockInputEvents)) {
    const mockEvent = mockInputEvents[eventType];
    const expectedInputType = inputEventMap[eventType as InputEventType];
    test(`should change to ${expectedInputType}`, () => {
      testInput(mockEvent, expectedInputType);
    });
  }
});
