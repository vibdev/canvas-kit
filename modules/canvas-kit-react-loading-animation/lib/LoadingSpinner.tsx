import * as React from 'react';
import {keyframes} from 'emotion';
import styled from 'react-emotion';

import {colors} from '@workday/canvas-kit-react-core';

interface LoadingSpinnerProps {
  /**
   * Optional loading spinner color.
   */
  color?: string;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Determines the scale of the spinner. Defaults to 36px by 36px
   */
  scale?: number;
}

const spinnerSize = 36;
const dotSize = 7;

const spinnerAnimation = keyframes`
  from, 0%, 20%, 80%, 100% to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`;
const Spinner = styled('div')<Pick<LoadingSpinnerProps, 'scale' | 'color'>>(({scale, color}) => ({
  display: 'inline=flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative' as 'relative',
  width: spinnerSize,
  height: spinnerSize,
  transform: `scale(${scale || '1'})`,
  div: {
    position: 'absolute',
    width: dotSize,
    height: dotSize,
    background: color || colors.blueberry600,
    borderRadius: '50%',
    animation: `.8s linear infinite ${spinnerAnimation}`,
  },
  'div:nth-child(1)': {
    animationDelay: '.3s',
    top: '14.7px',
    left: '0px',
  },
  'div:nth-child(2)': {
    animationDelay: '.4s',
    top: '4.306px',
    left: '4.306px',
  },
  'div:nth-child(3)': {
    animationDelay: '.5s',
    top: '0px',
    left: '14.7px',
  },
  'div:nth-child(4)': {
    animationDelay: '.6s',
    top: '4.306px',
    right: '4.306px',
  },
  'div:nth-child(5)': {
    animationDelay: '.7s',
    top: '14.7px',
    right: '0px',
  },
  'div:nth-child(6)': {
    animationDelay: '.8s',
    right: '4.306px',
    bottom: '4.306px',
  },
  'div:nth-child(7)': {
    animationDelay: '.9s',
    bottom: '0px',
    left: '14.7px',
  },
  'div:nth-child(8)': {
    animationDelay: '1s',
    bottom: '4.306px',
    left: '4.306px',
  },
}));

/**
 * Renders a Loading Spinner component
 */
export default class LoadingSpinner extends React.Component<LoadingSpinnerProps> {
  public render() {
    // Ignore className so that the container can be styled however the consumer wants
    const styledComponentProps = {...this.props, className: ''};
    return (
      <div className={this.props.className}>
        <Spinner role="alert" aria-busy="true" {...styledComponentProps}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Spinner>
      </div>
    );
  }
}
