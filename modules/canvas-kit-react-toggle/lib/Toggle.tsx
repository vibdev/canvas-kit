import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, depth} from '@workday/canvas-kit-react-core';

export interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const circleSize = 12;
const toggleWidth = 32;
const toggleHeight = 16;
const translateLength = toggleWidth - toggleHeight;

const ToggleInput = styled('input')<ToggleProps>(({disabled}) => ({
  height: toggleHeight,
  width: toggleWidth,
  opacity: 0,
  position: 'absolute',
  margin: 0,
  borderRadius: 999,
  cursor: disabled ? 'not-allowed' : 'pointer',
}));

const ToggleBackground = styled('div')<ToggleProps>(({checked, disabled}) => ({
  width: toggleWidth,
  height: toggleHeight,
  backgroundColor: disabled ? colors.soap400 : checked ? colors.blueberry500 : colors.licorice200,
  borderRadius: 999,
  display: 'flex',
  alignItems: 'center',
  padding: '0px 2px',
  boxSizing: 'border-box',
  transition: 'background-color 200ms ease',
}));
const ToggleCircle = styled('div')<ToggleProps>(({checked}) => ({
  width: circleSize,
  height: circleSize,
  borderRadius: 100,
  boxShadow: depth[1].boxShadow,
  backgroundColor: colors.frenchVanilla100,
  transform: checked ? `translateX(${translateLength}px)` : 'translateX(0)',
  transition: 'transform 150ms ease',
}));

const ToggleContainer = styled('div')<ToggleProps>(({disabled}) => ({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: disabled ? 'not-allowed' : 'pointer',
  borderRadius: 999,
  '&:focus-within:not([disabled])': {
    outline: 'none',
    ...focusRing(2, 2),
  },
  '&:active:not([disabled])': {
    outline: 'none',
    ...focusRing(2, 2),
  },
}));

export default class ToggleSwitch extends React.Component<ToggleProps> {
  public static defaultProps = {
    checked: false,
  };
  public render() {
    const {onChange, checked, disabled, value, inputRef} = this.props;

    return (
      <ToggleContainer {...this.props}>
        <ToggleInput
          innerRef={inputRef}
          value={value}
          disabled={disabled}
          tabIndex={0}
          checked={checked}
          onChange={onChange}
          type="checkbox"
          role="checkbox"
        />
        <ToggleBackground disabled={disabled} checked={checked}>
          <ToggleCircle checked={checked} />
        </ToggleBackground>
      </ToggleContainer>
    );
  }
}
