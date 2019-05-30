import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type, CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {arrowLeftIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';
import throttle from 'lodash/throttle';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onToggleClick?: () => void;
  header?: string | React.ReactNode;
  openDirection?: SidePanelOpenDirection;
  breakpointChange?: (open: boolean) => void;
  padding?: CanvasSpacingValue;
  breakpoint: number;
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

const ToggleButtonContainer = styled(IconButton)({
  position: 'absolute',
  bottom: spacing.s,
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
    [`${ToggleButtonContainer}`]: {
      right: open && openDirection !== SidePanelOpenDirection.Right ? spacing.s : '',
      left: openDirection === SidePanelOpenDirection.Right && open ? spacing.s : '',
    },
  };
});

export default class SidePanel extends React.Component<SidePanelProps, SidePanelState> {
  static SidePanelOpenDirection = SidePanelOpenDirection;
  static defaultProps = {
    breakpoint: 924,
  };

  constructor(props: SidePanelProps) {
    super(props);

    this.state = {
      screenSize: window.innerWidth,
      responsive: true,
    };
  }

  public componentDidMount() {
    if (this.props.breakpointChange) {
      window.addEventListener('resize', throttle(this.handleResize, 150));
    }
  }
  public componentWillUnmount() {
    if (this.props.breakpointChange) {
      window.addEventListener('resize', throttle(this.handleResize, 150));
    }
  }

  public render() {
    const {header, onToggleClick, open, openDirection, padding, ...otherProps} = this.props;
    let toggleButtonDirection;

    if (openDirection !== SidePanelOpenDirection.Right) {
      toggleButtonDirection = open ? arrowLeftIcon : arrowRightIcon;
    } else {
      toggleButtonDirection = open ? arrowRightIcon : arrowLeftIcon;
    }

    return (
      <SidePanelContainer
        aria-expanded={open}
        aria-orientation="vertical"
        padding={padding}
        breakpointChange={this.props.breakpointChange}
        openDirection={openDirection}
        open={open}
        {...otherProps}
      >
        {header && open ? <Header>{header}</Header> : null}
        {this.props.children}
        {onToggleClick && (
          <ToggleButtonContainer
            toggled={false}
            buttonSize={ButtonSizes.Small}
            onClick={this.toggleClick}
            icon={toggleButtonDirection}
            buttonType={IconButton.Types.Filled}
          />
        )}
      </SidePanelContainer>
    );
  }

  private handleResize = () => {
    if (this.props.breakpointChange) {
      const threshold = window.innerWidth > this.props.breakpoint;
      if (this.state.responsive) {
        if (threshold && !this.props.open) {
          this.props.breakpointChange(true);
        }
        if (!threshold && this.props.open) {
          this.props.breakpointChange(false);
        }
      }
    }
  };

  private toggleClick = () => {
    const threshold = window.innerWidth > this.props.breakpoint;
    const isResponsive = (threshold && !this.props.open) || (!threshold && this.props.open);
    this.setState({
      responsive: isResponsive,
    });
    if (this.props.onToggleClick) {
      this.props.onToggleClick();
    }
  };
}
