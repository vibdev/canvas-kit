import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PopperJS from 'popper.js';

export type Placement = PopperJS.Placement;
export type PopperOptions = PopperJS.PopperOptions;

export interface PopperProps {
  anchorElement: Element;
  children: React.ReactNode;
  containerElement: Element;
  open: boolean;
  placement: Placement;
  popperOptions?: PopperOptions;
  portal: boolean;
}

export class Popper extends React.PureComponent<PopperProps> {
  private popper: PopperJS | null;

  static defaultProps = {
    containerElement: document.body,
    open: true,
    placement: 'bottom',
    portal: true,
  };

  public componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  }

  public render() {
    if (!this.props.open) {
      return null;
    }

    if (!this.props.portal) {
      return this.renderPopper();
    }

    return ReactDOM.createPortal(this.renderPopper(), this.props.containerElement);
  }

  public renderPopper() {
    return <div ref={this.openPopper}>{this.props.children}</div>;
  }

  private openPopper = (popperNode: HTMLDivElement) => {
    if (!popperNode) {
      return;
    }

    this.popper = new PopperJS(this.props.anchorElement, popperNode, {
      placement: this.props.placement,
      ...this.props.popperOptions,
    });
  };
}
