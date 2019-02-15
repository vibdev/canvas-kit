import * as React from 'react';

export interface InputProviderState {
  currentInput: InputType | 'initial';
  currentIntent: InputType | 'initial';
  supportsPassive: boolean;
  isBuffering: boolean;
  isScrolling: boolean;
  mousePosX: number | null;
  mousePosY: number | null;
}

export enum InputType {
  Keyboard = 'keyboard',
  Mouse = 'mouse',
  Pointer = 'pointer',
  Touch = 'touch',
}

export enum InputEventType {
  KeyDown = 'keydown',
  KeyUp = 'keyup',
  MouseDown = 'mousedown',
  MouseMove = 'mousemove',
  Wheel = 'wheel',
  MouseWheel = 'mousewheel',
  DOMMouseScroll = 'DOMMouseScroll',
  MSPointerDown = 'MSPointerDown',
  MSPointerMove = 'MSPointerMove',
  PointerDown = 'pointerdown',
  PointerMove = 'pointermove',
  TouchStart = 'touchstart',
}

type InputEvent =
  | Event
  | React.KeyboardEvent
  | React.MouseEvent
  | React.TouchEvent
  | React.PointerEvent;

// Extend the existing window and document interfaces to support event checks
declare global {
  interface Window {
    PointerEvent(): void;
    MSPointerEvent(): void;
  }
  interface Document {
    onmousewheel(): void;
  }
}

// form input types
const formInputs = ['input', 'select', 'textarea'];

// list of modifier keys commonly used with the mouse and
// can be safely ignored to prevent false keyboard detection
const ignoreMap = [
  16, // shift
  17, // control
  18, // alt
  91, // Windows key / left Apple cmd
  93, // Windows menu / right Apple cmd
];

// mapping of events to input types
export const inputEventMap = {
  [InputEventType.KeyDown]: InputType.Keyboard,
  [InputEventType.KeyUp]: InputType.Keyboard,
  [InputEventType.MouseDown]: InputType.Mouse,
  [InputEventType.MouseMove]: InputType.Mouse,
  [InputEventType.Wheel]: InputType.Mouse,
  [InputEventType.MouseWheel]: InputType.Mouse,
  [InputEventType.DOMMouseScroll]: InputType.Mouse,
  [InputEventType.MSPointerDown]: InputType.Pointer,
  [InputEventType.MSPointerMove]: InputType.Pointer,
  [InputEventType.PointerDown]: InputType.Pointer,
  [InputEventType.PointerMove]: InputType.Pointer,
  [InputEventType.TouchStart]: InputType.Touch,
};

// map of IE 10 pointer events
const pointerMap = {
  2: InputType.Touch,
  3: InputType.Touch, // treat pen like touch
  4: InputType.Mouse,
};

const getPointerType = (event: React.PointerEvent): InputType => {
  if (typeof event.pointerType === 'number') {
    return pointerMap[event.pointerType];
  } else if (event.pointerType === 'mouse') {
    return InputType.Mouse;
  } else {
    // treat pen like touch
    return InputType.Touch;
  }
};

// detect version of mouse wheel event to use
// via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
const detectWheel = () => {
  let wheelType;

  // Modern browsers support "wheel"
  if ('onwheel' in document.createElement('div')) {
    wheelType = 'wheel';
  } else {
    // Webkit and IE support at least "mousewheel"
    // or assume that remaining browsers are older Firefox
    wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
  }

  return wheelType;
};

/**
 * This component takes heavy inspiration from what-input (https://github.com/ten1seven/what-input)
 */
export default class InputProvider extends React.Component<{}, InputProviderState> {
  private eventTimer: number | undefined;

  constructor(props: any) {
    super(props);

    this.state = {
      currentInput: 'initial',
      currentIntent: 'initial',
      supportsPassive: false,
      isBuffering: false,
      isScrolling: false,
      mousePosX: null,
      mousePosY: null,
    };

    this.setInput = this.setInput.bind(this);
    this.setIntent = this.setIntent.bind(this);
    this.eventBuffer = this.eventBuffer.bind(this);
  }

  componentWillMount() {
    // check for sessionStorage support
    // then check for session variables and use if available
    try {
      const storedInput = window.sessionStorage.getItem('what-input') as InputType | 'initial';
      const storedIntent = window.sessionStorage.getItem('what-intent') as InputType | 'initial';

      this.setState({
        currentInput: storedInput || this.state.currentInput,
        currentIntent: storedIntent || this.state.currentIntent,
      });
    } catch (e) {
      console.warn('Failed to retrieve input status from session storage' + e);
    }

    // Check for passive event listener support
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          this.setState({supportsPassive: true});
        },
      });

      const stub = () => {
        return;
      };

      window.addEventListener('test', stub, opts);
      window.removeEventListener('test', stub, opts);
    } catch (e) {
      console.warn('Browser does not support passive event listeners');
    }

    this.enableListeners(true);
  }

  componentDidUpdate() {
    try {
      window.sessionStorage.setItem('what-input', this.state.currentInput);
      window.sessionStorage.setItem('what-intent', this.state.currentIntent);
    } catch (e) {
      console.warn('Failed to set input status in session storage' + e);
    }
  }

  componentWillUnmount() {
    this.enableListeners(false);
  }

  shouldComponentUpdate(nextProps: {}, nextState: InputProviderState) {
    if (
      nextProps !== this.props ||
      nextState.currentInput !== this.state.currentInput ||
      nextState.currentIntent !== this.state.currentIntent
    ) {
      return true;
    }
    return false;
  }

  enableListeners(enable: boolean) {
    if (typeof window === 'undefined') {
      return;
    }

    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
    // can only demonstrate potential, but not actual, interaction
    // and are treated separately
    const options = this.state.supportsPassive ? {passive: true} : false;

    const fn = enable ? window.addEventListener : window.removeEventListener;

    // pointer events (mouse, pen, touch)
    if (window.PointerEvent) {
      fn('pointerdown', this.setInput);
      fn('pointermove', this.setIntent);
    } else if (window.MSPointerEvent) {
      fn('MSPointerDown', this.setInput);
      fn('MSPointerMove', this.setIntent);
    } else {
      // mouse events
      fn('mousedown', this.setInput);
      fn('mousemove', this.setIntent);

      // touch events
      if ('ontouchstart' in window) {
        fn('touchstart', this.eventBuffer, options);
        fn('touchend', this.setInput);
      }
    }

    // mouse wheel
    fn(detectWheel(), this.setIntent, options);

    // keyboard events
    fn('keydown', this.eventBuffer);
    fn('keyup', this.eventBuffer);
  }

  setInput(event: InputEvent) {
    // only execute if the event buffer timer isn't running
    if (this.state.isBuffering) {
      return;
    }
    const eventKey = 'which' in event ? event.which : undefined;
    const eventType = event.type as keyof typeof inputEventMap;
    let value = inputEventMap[eventType];

    if (value === InputType.Pointer) {
      value = getPointerType(event as React.PointerEvent);
    }

    const ignoreMatch = eventKey ? ignoreMap.indexOf(eventKey) === -1 : undefined;

    const shouldUpdate =
      (value === InputType.Keyboard && eventKey && ignoreMatch) ||
      value === InputType.Mouse ||
      value === InputType.Touch;

    if (this.state.currentInput !== value && shouldUpdate) {
      this.setState({currentInput: value});
    }

    if (this.state.currentIntent !== value && shouldUpdate) {
      // preserve intent for keyboard typing in form fields
      const activeElem = document.activeElement;
      const notFormInput =
        activeElem &&
        activeElem.nodeName &&
        formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

      if (notFormInput) {
        this.setState({currentIntent: value});
      }
    }
  }

  // updates input intent for `mousemove` and `pointermove`
  setIntent(event: InputEvent) {
    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
    this.detectScrolling(event as React.MouseEvent);

    // only execute if the event buffer timer isn't running
    // or scrolling isn't happening
    if (!this.state.isBuffering && !this.state.isScrolling) {
      const eventType = event.type as keyof typeof inputEventMap;
      let value = inputEventMap[eventType];
      if (value === InputType.Pointer) {
        value = getPointerType(event as React.PointerEvent);
      }

      if (this.state.currentIntent !== value) {
        this.setState({currentIntent: value});
      }
    }
  }

  // buffers events that frequently also fire mouse events
  eventBuffer(event: Event) {
    // set the current input
    this.setInput(event);

    window.clearTimeout(this.eventTimer);

    this.setState({isBuffering: true});

    this.eventTimer = window.setTimeout(() => {
      this.setState({isBuffering: false});
    },                                  100);
  }

  detectScrolling(event: React.MouseEvent) {
    if (this.state.mousePosX !== event.screenX || this.state.mousePosY !== event.screenY) {
      this.setState({
        isScrolling: false,
        mousePosX: event.screenX,
        mousePosY: event.screenY,
      });
    } else {
      this.setState({isScrolling: true});
    }
  }

  render() {
    return (
      <div data-whatinput={this.state.currentInput} data-whatintent={this.state.currentIntent}>
        {this.props.children}
      </div>
    );
  }
}
