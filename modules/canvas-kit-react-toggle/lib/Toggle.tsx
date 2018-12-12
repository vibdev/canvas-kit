import * as React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';

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
});

const ToggleBackground = styled('div')<ToggleProps>(({checked}) => ({
  width: toggleWidth,
  height: toggleHeight,
  backgroundColor: checked ? colors.blueberry500 : colors.soap400,
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
  boxShadow: '0 2px 4px 0 rgba(82, 97, 115, 0.14)',
  backgroundColor: colors.frenchVanilla100,
  transform: checked ? `translateX(${translateLength}px)` : 'translateX(0)',
  transition: 'transform 0.25s linear',
}));

const disabledToggle = css({
  backgroundColor: colors.soap200,
  cursor: 'not-allowed',
});

export default class ToggleSwitch extends React.Component<ToggleProps> {
  public render() {
    const {onChange, checked, disabled, value, inputRef, ...elemProps} = this.props;
    return (
      <div>
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
        <ToggleBackground className={disabled ? disabledToggle : ''} {...this.props}>
          <ToggleCircle {...this.props} />
        </ToggleBackground>
      </div>
    );
  }
}
