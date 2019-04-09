import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {keyframes} from 'emotion';

export interface TooltipOrigin {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}

export interface TooltipProps {
  transformOrigin?: TooltipOrigin;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const tooltipAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
  `;

const Tooltip = styled('div')<Pick<TooltipProps, 'transformOrigin'>>(
  {
    borderRadius: spacing.xxxs,
    padding: spacing.xxs,
    backgroundColor: 'rgb(0,0,0,.8)',
    animation: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    color: colors.frenchVanilla100,
    fontSize: 13,
    margin: 6,
    transitionDelay: '5s',
    a: {
      color: colors.frenchVanilla100,
      textDecoration: 'underline',
    },
  },
  ({transformOrigin}) => ({
    transformOrigin: transformOrigin
      ? `${transformOrigin.vertical} ${transformOrigin.horizontal}`
      : 'top center',
  })
);

export default class TooltipTest extends React.Component<TooltipProps, {}> {
  public render() {
    const {onMouseEnter, onMouseLeave, ...otherProps} = this.props;
    return (
      <Tooltip
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...otherProps}
        role="tooltip"
      >
        {this.props.children}
      </Tooltip>
    );
  }
}
