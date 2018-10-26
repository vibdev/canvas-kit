import * as React from 'react';
import Button, {ButtonProps} from '../lib/Button';
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

describe('Button Focus', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  // expected usage to manage focus via innerRef
  class FocusableButton extends React.Component<ButtonProps> {
    public buttonRef: React.RefObject<HTMLButtonElement>;

    constructor(props: ButtonProps) {
      super(props);
      this.buttonRef = React.createRef<HTMLButtonElement>();
    }

    // focus on button in componentDidMount for purposes of tests
    componentDidMount() {
      if (!this.props.disabled && this.buttonRef && this.buttonRef.current) {
        this.buttonRef.current.focus();
      }
    }

    render() {
      return (
        <Button buttonType={Button.Types.Primary} innerRef={this.buttonRef} {...this.props}>
          {this.props.children}
        </Button>
      );
    }
  }

  test('button should not allow focus when disabled', () => {
    const component = mount(<FocusableButton disabled={true}>Button</FocusableButton>);
    const activeElement = document.activeElement;
    const buttonWrapper = component.find('button');
    expect(buttonWrapper.getDOMNode()).not.toEqual(activeElement);
  });

  test('button should allow focus', () => {
    const component = mount(<FocusableButton>Button</FocusableButton>);
    const activeElement = document.activeElement;
    const buttonWrapper = component.find('button');
    expect(buttonWrapper.getDOMNode()).toEqual(activeElement);
  });
});
