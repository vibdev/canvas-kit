import * as React from 'react';
import styled from 'react-emotion';
import throttle from 'lodash/throttle';

import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, spacing, type, CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {arrowLeftIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onToggleClick?: () => void;
  header?: string | React.ReactNode;
  openDirection?: SidePanelOpenDirection;
  onBreakpointChange?: (open: boolean) => void;
  padding?: CanvasSpacingValue;
  breakpoint?: number;
}

export interface SidePanelState {
  responsive: boolean;
  screenSize: number;
}

export enum SidePanelOpenDirection {
  Left,
  Right,
}

const openSidePanelWidth = 300;

const Header = styled('h2')({
  ...type.h2,
  marginTop: spacing.zero,
});

const SidePanelContainer = styled('div')<SidePanelProps>(({open, openDirection, padding}) => {
  return {
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 150ms ease-out 0s',
    position: 'absolute',
    right: openDirection === SidePanelOpenDirection.Right ? spacing.zero : '',
    left: openDirection === SidePanelOpenDirection.Left ? spacing.zero : '',
    alignItems: open ? '' : 'center',
    boxShadow: !open ? '0 8px 16px -8px rgba(0, 0, 0, 0.16)' : '',
    backgroundColor: open ? colors.soap100 : colors.frenchVanilla100,
    width: open ? openSidePanelWidth : spacing.xxl,
    padding: open ? padding || spacing.m : `${spacing.s} 0`,
  };
});

const ToggleButtonContainer = styled(IconButton)<Pick<SidePanelProps, 'openDirection'>>(
  {
    position: 'absolute',
    bottom: spacing.s,
  },
  ({openDirection}) => ({
    right: openDirection === SidePanelOpenDirection.Left ? spacing.s : '',
    left: openDirection === SidePanelOpenDirection.Right ? spacing.s : '',
  })
);

const SidePanelFooter = styled('div')<Pick<SidePanelProps, 'open'>>(
  {
    position: 'absolute',
    bottom: '0',
    width: openSidePanelWidth,
    height: 120,
    left: 0,
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)',
  },
  ({open}) => ({
    width: open ? openSidePanelWidth : spacing.xxl,
  })
);

export default class SidePanel extends React.Component<SidePanelProps, SidePanelState> {
  static OpenDirection = SidePanelOpenDirection;
  static defaultProps = {
    breakpoint: 834,
  };

  state = {
    screenSize: window.innerWidth,
    responsive: true,
  };

  public componentDidMount() {
    window.addEventListener('resize', throttle(this.handleResize, 150));
  }
  public componentWillUnmount() {
    window.addEventListener('resize', throttle(this.handleResize, 150));
  }

  public render() {
    const {
      header,
      onToggleClick,
      open,
      openDirection,
      padding,
      onBreakpointChange,
      ...otherProps
    } = this.props;

    return (
      <SidePanelContainer
        role="region"
        aria-orientation="vertical"
        padding={padding}
        onBreakpointChange={this.handleResize}
        openDirection={openDirection}
        open={open}
        {...otherProps}
      >
        {header && open ? <Header>{header}</Header> : null}
        {this.props.children}
        <SidePanelFooter open={open}>
          {onToggleClick && (
            <ToggleButtonContainer
              openDirection={openDirection}
              aria-label={`${open ? 'hide navigation' : 'show navigation'}`}
              toggled={false}
              buttonSize={ButtonSizes.Small}
              onClick={this.toggleClick}
              icon={this.toggleButtonDirection()}
              buttonType={IconButton.Types.Filled}
            />
          )}
        </SidePanelFooter>
      </SidePanelContainer>
    );
  }

  private handleResize = () => {
    if (!this.props.onBreakpointChange || !this.props.breakpoint) {
      return;
    }

    if (window.innerWidth > this.props.breakpoint && !this.props.open) {
      this.props.onBreakpointChange(true);
    }
    if (window.innerWidth <= this.props.breakpoint && this.props.open) {
      this.props.onBreakpointChange(false);
    }
  };

  private toggleClick = () => {
    if (!this.props.breakpoint) {
      return;
    }

    const threshold = window.innerWidth > this.props.breakpoint;
    const isResponsive = (threshold && !this.props.open) || (!threshold && this.props.open);
    this.setState({
      responsive: isResponsive,
    });
    if (this.props.onToggleClick) {
      this.props.onToggleClick();
    }
  };

  private toggleButtonDirection = (): CanvasSystemIcon => {
    if (this.props.openDirection !== SidePanelOpenDirection.Right) {
      return this.props.open ? arrowLeftIcon : arrowRightIcon;
    } else {
      return this.props.open ? arrowRightIcon : arrowLeftIcon;
    }
  };
}
