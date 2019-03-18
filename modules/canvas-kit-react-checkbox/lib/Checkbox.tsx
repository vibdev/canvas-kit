import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {blockchainIcon} from '@workday/canvas-accent-icons-web';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const checkboxWidth = 18;
const checkboxHeight = 18;
const checkboxSpacing = 11;
const checkboxBorderRadius = 2;
const RippleRadius = 11;

const CheckboxContainer = styled('div')({
  position: 'relative',
  height: checkboxHeight,
  width: checkboxWidth,
  marginBottom: checkboxSpacing,
});

const CheckboxInput = styled('input')<CheckboxProps>(
  {
    position: 'absolute',
    height: checkboxHeight,
    width: checkboxWidth,
    borderRadius: checkboxBorderRadius,
    margin: 0,
    opacity: 0,
    '&:focus, &:active': {
      outline: 'none',
    },
    // I wonder if this should be replaced by a event where we look at if the Input is on focus/hover and then use these as props
    '&:focus, &:active, &focus:hover, &:active:hover': {
      '& ~ div:first-of-type': {
        ...focusRing(0, 0),
        borderColor: colors.blueberry400,
        borderWidth: '2px',
      },
      '&:checked ~ div:first-of-type': {
        ...focusRing(2, 2),
      },
    },
    '&:hover ~ div:nth-of-type(2)': {
      boxShadow: '0 0 0 ' + RippleRadius + 'px ' + colors.soap200,
    },
  },
  ({disabled, checked}) => ({
    '&:hover ~ div:first-of-type': {
      borderColor: checked ? colors.blueberry400 : colors.licorice200,
    },
  })
);

const CheckboxBackground = styled('div')<Pick<CheckboxProps, 'checked' | 'disabled'>>(
  {
    backgroundColor: colors.frenchVanilla100,
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: checkboxWidth,
    height: checkboxHeight,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: checkboxBorderRadius,
    padding: '0px 2px',
    transition: 'border 200ms ease, background 200ms',
  },
  ({checked, disabled}) => ({
    borderColor: checked ? colors.blueberry400 : colors.licorice100,
    backgroundColor: checked ? colors.blueberry400 : disabled ? colors.soap100 : 'white',
    '&:hover': {
      borderColor: checked ? colors.blueberry400 : colors.licorice100,
      backgroundColor: checked ? colors.blueberry400 : disabled ? colors.soap100 : 'white',
    },
  })
);

// This should live somewhere else, maybe in canvas-kit-react-common
const Ripple = styled('div')({
  position: 'absolute',
  width: checkboxWidth,
  height: checkboxHeight,
  boxShadow: '0 0 0 0 ' + colors.soap200,
  transition: 'box-shadow 200ms ease-out',
  borderRadius: 999,
  zIndex: -999,
});

const CheckboxCheck = styled('div')<Pick<CheckboxProps, 'checked'>>(
  {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 200ms ease, opacity 200ms ease',
    pointerEvents: 'none',
  },
  ({checked}) => ({
    opacity: checked ? 1 : 0,
    transform: checked ? 'scale(1)' : 'scale(0.5)',
  })
);

export default class ToggleSwitch extends React.Component<CheckboxProps> {
  public static defaultProps = {
    checked: false,
  };

  public render() {
    const {checked, disabled, id, inputRef, onChange, value, ...otherProps} = this.props;

    return (
      <CheckboxContainer>
        <CheckboxInput
          checked={checked}
          disabled={disabled}
          id={id}
          innerRef={inputRef}
          onChange={onChange}
          role="checkbox"
          tabIndex={0}
          type="checkbox"
          value={value}
          {...otherProps}
        />
        <CheckboxBackground checked={checked} disabled={disabled}>
          <CheckboxCheck checked={checked}>
            <SystemIcon icon={checkSmallIcon} color={colors.frenchVanilla100} />
          </CheckboxCheck>
        </CheckboxBackground>
        <Ripple />
      </CheckboxContainer>
    );
  }
}
