/**
 * BASED HEAVILY ON MATERIAL-UI's IMPLEMENTATION
 *
 * Helper component to allow attaching a ref to a
 * wrapped element to access the underlying DOM element.
 *
 * It's highly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801.
 */

import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface RootRefProps<T> {
  rootRef: ((ref: Element | Text | null) => void) | React.RefObject<T>;
}

export const setRef = <T extends {}>(
  ref: ((ref: Element | Text | null) => void) | React.RefObject<T>,
  element: Element | Text | null
) => {
  if (typeof ref === 'function') {
    ref(element);
  } else if (ref) {
    // at this point the ref is a React.createRef() object but they set current to readonly in ts to prevent shenanigans
    const readonlyOverride = ref as any;
    readonlyOverride.current = element;
  }
};

export default class RootRef<T> extends React.Component<RootRefProps<T>> {
  public ref: Element | Text | null = null;
  public componentDidMount() {
    this.ref = ReactDom.findDOMNode(this);
    setRef(this.props.rootRef, this.ref);
  }

  public componentDidUpdate(prevProps: RootRefProps<T>) {
    const ref = ReactDom.findDOMNode(this);

    if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
      if (prevProps.rootRef !== this.props.rootRef) {
        setRef(prevProps.rootRef, null);
      }

      this.ref = ref;
      setRef(this.props.rootRef, this.ref);
    }
  }

  public componentWillUnmount() {
    this.ref = null;
    setRef(this.props.rootRef, null);
  }

  public render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
