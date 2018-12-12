import * as React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';

export interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  name?: string;
  value?: string;
}

const circleSize: number = 12;
const toggleWidth: number = 32;
const toggleHeight: number = 16;
const translateLength: number = toggleWidth - toggleHeight;

const labelCss = css({
  display: 'inline-block',
});

const ToggleInput = styled('input')<ToggleProps>({
  opacity: 0,
  position: 'absolute',
});

const ToggleBackground = styled('div')((props: ToggleProps) => {
  return {
    width: toggleWidth,
    height: toggleHeight,
    backgroundColor: props.checked ? colors.blueberry500 : colors.soap400,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.25s linear',
    padding: '0px 2px',
    boxSizing: 'border-box',
  };
});

const ToggleCircle = styled('div')((props: ToggleProps) => {
  const translate = props.checked ? `${translateLength}px` : '0';
  return {
    width: circleSize,
    height: circleSize,
    borderRadius: 100,
    boxShadow: '0 2px 4px 0 rgba(82, 97, 115, 0.14)',
    backgroundColor: colors.frenchVanilla100,
    transform: `translateX(${translate})`,
    transition: 'transform 0.25s linear',
  };
});

const disabledToggle = css({
  backgroundColor: colors.soap200,
  pointerEvents: 'none',
});

export default class ToggleSwitch extends React.Component<ToggleProps> {
  public render() {
    const {onChange, checked, disabled, name, value} = this.props;
    return (
      <label className={labelCss}>
        <ToggleInput
          name={name}
          value={value}
          disabled={disabled}
          tabIndex={0}
          checked={checked}
          onChange={onChange}
          type="checkbox"
        />
        <ToggleBackground className={disabled ? disabledToggle : ''} {...this.props}>
          <ToggleCircle {...this.props} />
        </ToggleBackground>
      </label>
    );
  }
}
