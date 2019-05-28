import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type, CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {arrowLeftIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

export interface SidePanelProps {
  open: boolean;
  onToggleClick?: () => void;
  title?: string | React.ReactNode;
  openDirection?: SidePanelOpenDirection;
  padding?: CanvasSpacingValue;
}

export enum SidePanelOpenDirection {
  Left,
  Right,
}

const openSidePanelWidth = 300;

const Title = styled('h2')({
  ...type.h2,
  marginTop: spacing.zero,
});

const SidePanelToggleContainer = styled('div')({
  position: 'absolute',
  bottom: spacing.s,
});

const SidePanelContainer = styled('div')<SidePanelProps>(
  {
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 150ms ease-out 0s',
    position: 'absolute',
  },
  ({open, openDirection, padding}) => ({
    boxShadow: !open ? '0 8px 16px -8px rgba(0, 0, 0, 0.16)' : '',
    backgroundColor: open ? colors.soap100 : colors.frenchVanilla100,
    width: open ? openSidePanelWidth : spacing.xl,
    padding: open ? padding || spacing.m : spacing.zero,
    right:
      openDirection === SidePanelOpenDirection.Right && !SidePanelOpenDirection.Left
        ? spacing.zero
        : '',
    left:
      openDirection === SidePanelOpenDirection.Left && !SidePanelOpenDirection.Right
        ? spacing.zero
        : '',
    alignItems: open ? '' : 'center',
    [`${SidePanelToggleContainer}`]: {
      right: open && !SidePanelOpenDirection.Right ? spacing.s : '',
      left: openDirection === SidePanelOpenDirection.Right && open ? spacing.s : '',
    },
  })
);

export default class MyComponent extends React.Component<SidePanelProps> {
  static SidePanelOpenDirection = SidePanelOpenDirection;
  public render() {
    const {title, onToggleClick, open, openDirection, padding} = this.props;

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
        openDirection={openDirection}
        open={open}
      >
        {title && open ? <Title>{title}</Title> : null}
        {this.props.children}
        {onToggleClick && (
          <SidePanelToggleContainer>
            <IconButton
              buttonSize={ButtonSizes.Small}
              onClick={onToggleClick}
              icon={toggleButtonDirection}
              buttonType={IconButton.Types.Filled}
            />
          </SidePanelToggleContainer>
        )}
      </SidePanelContainer>
    );
  }
}
