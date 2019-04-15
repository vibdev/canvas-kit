import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {keyframes} from 'emotion';

export interface TooltipProps {
  transformOrigin?: TransformOrigin;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

const tooltipAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
  `;

const TooltipContainer = styled('div')<Pick<TooltipProps, 'transformOrigin'>>(
  {
    display: 'inline-flex',
    borderRadius: spacing.xxxs,
    padding: spacing.xxs,
    backgroundColor: 'rgba(0,0,0,.85)',
    animation: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    color: colors.frenchVanilla100,
    fontSize: 13,
    margin: spacing.xxxs,
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

export default class Tooltip extends React.Component<TooltipProps, {}> {
  public render() {
    const {onMouseEnter, onMouseLeave, ...otherProps} = this.props;
    return (
      <TooltipContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...otherProps}
        role="tooltip"
      >
        {this.props.children}
      </TooltipContainer>
    );
  }
}
