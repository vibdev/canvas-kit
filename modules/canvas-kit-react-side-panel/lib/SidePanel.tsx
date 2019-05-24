import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type, CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {arrowLeftIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

export interface SidePanelProps {
  open: boolean;
  onToggleClick?: () => void;
  title?: string | React.ReactNode;
  openRight?: boolean;
  openLeft?: boolean;
  padding?: CanvasSpacingValue;
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
  ({open, openRight, openLeft, padding}) => ({
    boxShadow: !open ? '0 8px 16px -8px rgba(0, 0, 0, 0.16)' : '',
    backgroundColor: open ? colors.soap100 : colors.frenchVanilla100,
    width: open ? openSidePanelWidth : spacing.xl,
    padding: open ? padding || spacing.m : spacing.zero,
    right: openRight && !openLeft ? spacing.zero : '',
    left: openLeft && !openRight ? spacing.zero : '',
    alignItems: open ? '' : 'center',
    [`${SidePanelToggleContainer}`]: {
      right: open && !openRight ? spacing.s : '',
      left: openRight && open ? spacing.s : '',
    },
  })
);

export default class MyComponent extends React.Component<SidePanelProps> {
  public render() {
    const {title, onToggleClick, open, openRight, openLeft, padding} = this.props;

    let toggleButtonDirection;
    if (!openRight) {
      toggleButtonDirection = open ? arrowLeftIcon : arrowRightIcon;
    } else {
      toggleButtonDirection = open ? arrowRightIcon : arrowLeftIcon;
    }
    return (
      <SidePanelContainer
        aria-expanded={open}
        aria-orientation="vertical"
        padding={padding}
        openLeft={openLeft}
        openRight={openRight}
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
