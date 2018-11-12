import * as React from 'react';
import * as ReactDom from 'react-dom';
import {cx, css} from 'emotion';

import RootRef from '../util/RootRef';
import {positionElements, Placement} from '../util/positioning';

interface TooltipState {
  /**
   * Determines if the tooltip or children element are being hovered
   */
  isHovering: boolean;
}

interface TooltipProps {
  /**
   * String that can be passed to show text
   */
  title?: string;
  /**
   * Allows for custom content in the tooltip
   */
  content?: JSX.Element;
  /**
   * Determines the position of the tooltip
   */
  tooltipPosition?: Placement;
  /**
   * Whether or not a triangle is shown with the tooltip
   */
  showTriangle?: boolean;
  /**
   * Optional class name
   */
  className?: string;
}

/**
 * Component CSS
 */
const tooltip = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '3px',
  padding: '8px',
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  pointerEvents: 'none',
  opacity: 0,
  transition: 'all .25s ease-in-out',
  fontSize: '12px',
  a: {
    color: '#fff',
  },
});
const tooltipOpen = css({
  pointerEvents: 'all',
  transition: 'all .25s ease-out',
  transitionDelay: '.300s',
  opacity: 1,
});
const tooltipWrapper = css({
  position: 'absolute',
  padding: '10px',
});
const baseTriangle = css({
  position: 'absolute',
  width: 0,
  height: 0,
  zIndex: 50,
});
const topBottomTriangles = css({
  left: '50%',
  marginLeft: '-6px',
  borderLeft: '6px solid transparent',
  borderRight: '6px solid transparent',
});
const triangleTop = css({
  top: '4px',
  borderBottom: '6px solid rgba(0, 0, 0, 0.8)',
});
const triangleBottom = css({
  bottom: '4px',
  borderTop: '6px solid rgba(0, 0, 0, 0.8)',
});
const sideTriangles = css({
  bottom: '50%',
  marginBottom: '-6px',
  borderBottom: '6px solid transparent',
  borderTop: '6px solid transparent',
});
const triangleRight = css({
  right: '4px',
  borderLeft: '6px solid rgba(0, 0, 0, 0.8)',
});
const triangleLeft = css({
  left: '4px',
  borderRight: '6px solid rgba(0, 0, 0, 0.8)',
});

/**
 * Renders a Tooltip component
 */
export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
  protected tooltipHover: boolean;
  private tooltipRef: React.RefObject<HTMLDivElement>;
  private childrenRef: HTMLElement | null = null;
  private timer: number | null;
  public constructor(props: TooltipProps) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.tooltipRef = React.createRef();
    this.timer = null;
    this.tooltipHover = false;
  }

  /**
   * Sets the position of the tooltip
   */
  public componentDidUpdate() {
    if (this.childrenRef && this.tooltipRef.current && this.state.isHovering === true) {
      const tooltipPositionDefined: Placement = this.props.tooltipPosition
        ? this.props.tooltipPosition
        : 'bottom';
      positionElements(this.childrenRef, this.tooltipRef.current, tooltipPositionDefined, true);
    }
  }

  public componentWillMount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  public render() {
    const {title, content, className, showTriangle} = this.props;
    return (
      <React.Fragment>
        <RootRef rootRef={this.bindChildrenRef}>{this.props.children}</RootRef>
        {ReactDom.createPortal(
          <div
            wd-automation-id="test"
            role="tooltip"
            ref={this.tooltipRef}
            className={cx(tooltipWrapper, className)}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <div
              className={
                this.state.isHovering
                  ? css`
                      ${tooltip} ${tooltipOpen};
                    `
                  : `${tooltip}`
              }
            >
              {showTriangle ? this.renderTriangle() : null}
              {title ? title : null}
              {content ? content : null}
            </div>
          </div>,
          document.body
        )}
      </React.Fragment>
    );
  }

  private bindChildrenRef = (ref: Element | Text | null) => {
    if (this.childrenRef) {
      this.childrenRef.removeEventListener('mouseleave', this.onMouseLeave);
      this.childrenRef.removeEventListener('mouseenter', this.onMouseEnter);
    }
    this.childrenRef = ref as HTMLElement;
    if (this.childrenRef) {
      this.childrenRef.addEventListener('mouseleave', this.onMouseLeave);
      this.childrenRef.addEventListener('mouseenter', this.onMouseEnter);
    }
  };

  /**
   * Handles rendering the triangle for the tooltop based on the position
   */
  private renderTriangle = () => {
    let triangleClassName;
    switch (this.props.tooltipPosition) {
      case 'top':
        triangleClassName = css`
          ${topBottomTriangles} ${triangleBottom};
        `;
        break;
      case 'bottom':
        triangleClassName = css`
          ${topBottomTriangles} ${triangleTop};
        `;
        break;
      case 'left':
        triangleClassName = css`
          ${sideTriangles} ${triangleRight};
        `;
        break;
      case 'right':
        triangleClassName = css`
          ${sideTriangles} ${triangleLeft};
        `;
        break;
      default:
        triangleClassName = css`
          ${topBottomTriangles} ${triangleTop};
        `;
        break;
    }
    return (
      <div
        className={css`
          ${baseTriangle} ${triangleClassName};
        `}
      />
    );
  };

  /**
   * Handles when mousing over the children element or the tooltip
   */
  private onMouseEnter = () => {
    this.tooltipHover = true;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      this.tooltipHover = false;
    }
    if (this.state.isHovering === false) {
      this.tooltipHover = false;
      this.setState({
        isHovering: true,
      });
    }
  };

  /**
   * Handles when the mouse leaves the children element or tooltip
   */
  private onMouseLeave = () => {
    if (!this.tooltipHover) {
      this.timer = window.setTimeout(() => {
        this.setState({
          isHovering: false,
        });
        /* tslint:disable */
      }, 150);
      /* tslint:enabled */
    }
    this.tooltipHover = false;
  };
}
