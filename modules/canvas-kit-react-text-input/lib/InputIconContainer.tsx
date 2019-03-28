import * as React from 'react';
import styled from 'react-emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {LabelPosition} from './types';

export interface InputIconContainerProps {
  icon?: React.ReactElement<SystemIcon>;
  labelPosition?: LabelPosition;
}

const InputContainer = styled('div')<InputIconContainerProps>(
  {
    display: 'inline-block',
    position: 'relative',
  },
  ({labelPosition}) => {
    if (labelPosition === LabelPosition.Left) {
      return {
        display: 'inline-block',
      };
    }

    return {};
  }
);

const IconContainer = styled('div')({
  position: 'absolute',
  top: spacing.xxs,
  right: spacing.xxs,
});

const InputIconContainer: React.SFC<InputIconContainerProps> = ({
  children,
  icon,
  labelPosition,
}) => (
  <InputContainer labelPosition={labelPosition}>
    {children}
    {icon && <IconContainer>{icon}</IconContainer>}
  </InputContainer>
);

export default InputIconContainer;
