import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, depth} from '@workday/canvas-kit-react-core';

export interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const circleSize: number = 12;
const toggleWidth: number = 32;
const toggleHeight: number = 16;
const translateLength: number = toggleWidth - toggleHeight;

const ToggleInput = styled('input')({
  height: toggleHeight,
  width: toggleWidth,
  opacity: 0,
  position: 'absolute',
  margin: 0,
  borderRadius: 100,
});

const ToggleBackground = styled('div')<ToggleProps>(({checked, disabled}) => ({
  width: toggleWidth,
  height: toggleHeight,
  backgroundColor: disabled ? colors.soap200 : checked ? colors.blueberry500 : colors.soap400,
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 0.25s linear',
  padding: '0px 2px',
  boxSizing: 'border-box',
}));
const ToggleCircle = styled('div')<ToggleProps>(({checked}) => ({
  width: circleSize,
  height: circleSize,
  borderRadius: 100,
  boxShadow: depth[1].boxShadow,
  backgroundColor: colors.frenchVanilla100,
  transform: checked ? `translateX(${translateLength}px)` : 'translateX(0)',
  transition: 'transform 0.25s linear',
}));

const ToggleContainer = styled('div')<ToggleProps>({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '999px',
  '&:not([disabled])': {
    '&:focus': {
      outline: 'none',
      ...focusRing(2, 2),
    },
  },
});

export default class ToggleSwitch extends React.Component<ToggleProps> {
  public static defaultProps = {
    checked: true,
  };
  public render() {
    const {onChange, checked, disabled, value, inputRef, ...elemProps} = this.props;
    return (
      <ToggleContainer tabIndex={0} {...this.props}>
        <ToggleInput
          innerRef={inputRef}
          value={value}
          disabled={disabled}
          tabIndex={0}
          checked={checked}
          onChange={onChange}
          type="checkbox"
          {...elemProps}
        />
        <ToggleBackground {...this.props}>
          <ToggleCircle {...this.props} />
        </ToggleBackground>
      </ToggleContainer>
    );
  }
}
