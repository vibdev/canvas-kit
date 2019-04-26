import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {keyframes} from 'emotion';

export interface TooltipProps {
  transformOrigin: TransformOrigin;
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

const TooltipContainer = styled('div')<TooltipProps>(
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
  static defaultProps = {
    transformOrigin: {
      horizontal: 'center',
      vertical: 'bottom',
    },
  };

  public render() {
    return (
      <TooltipContainer {...this.props} role="tooltip">
        {this.props.children}
      </TooltipContainer>
    );
  }
}
