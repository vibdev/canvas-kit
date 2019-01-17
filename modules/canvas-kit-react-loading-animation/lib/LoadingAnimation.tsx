import * as React from 'react';
import {keyframes} from 'emotion';
import styled from 'react-emotion';
import canvas from '@workday/canvas-kit-react-core';

/**
 * Keyframe for the dots loading animation.
 */
const keyframesLoading = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
}
  40% {
    transform: scale(1);
}`;

type LoadingDotProps = {
  /**
   * The animation-delay value, in ms, for the loading dots.
   */
  animationDelay: number;
};

/**
 * The actual loading dot div.
 */
const LoadingAnimationDot = styled('div')<LoadingDotProps>(
  {
    backgroundColor: canvas.colors.soap400,
    width: canvas.spacing.s,
    height: canvas.spacing.s,
    fontSize: '0px',
    borderRadius: '100%',
    transform: 'scale(0)',
    display: 'inline-block',
    marginRight: canvas.spacing.xxs,
    animationName: keyframesLoading,
    animationDuration: '1400ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'both',
  },
  ({animationDelay}) => ({
    animationDelay: animationDelay + 'ms',
  })
);

/**
 * A simple component that displays three horizontal dots, to be used when some data is loading.
 */
export default function LoadingAnimation() {
  return (
    <div>
      <LoadingAnimationDot animationDelay={0} />
      <LoadingAnimationDot animationDelay={160} />
      <LoadingAnimationDot animationDelay={320} />
    </div>
  );
}
