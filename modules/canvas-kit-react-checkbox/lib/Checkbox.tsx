import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, typeColors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
}

const checkboxBorderRadius = 2;
const checkboxHeight = 18;
const checkboxSpacing = 11;
const checkboxTapArea = 24;
const checkboxWidth = 18;
const rippleRadius = 11;

const CheckboxContainer = styled('div')({
  marginBottom: checkboxSpacing,
});

const CheckboxInput = styled('input')<CheckboxProps>(
  {
    borderRadius: checkboxBorderRadius,
    height: checkboxTapArea,
    margin: 0,
    marginTop: '-3px',
    position: 'absolute',
    width: checkboxTapArea,
    '&:focus, &:active': {
      outline: 'none',
    },
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
    '&::after': {
      borderRadius: 999,
      boxShadow: '0 0 0 0 ' + colors.soap200,
      content: '""',
      display: 'block',
      height: checkboxHeight,
      marginTop: '3px',
      transition: 'box-shadow 150ms ease-out',
      width: checkboxWidth,
      zIndex: -999,
    },
    '&:hover::after': {
      boxShadow: '0 0 0 ' + rippleRadius + 'px ' + colors.soap200,
    },
  },
  ({checked, disabled}) => ({
    '&:hover ~ div:first-of-type': {
      borderColor: checked ? colors.blueberry400 : colors.licorice200,
    },
    '&:focus:hover ~ div:first-of-type': {
      borderColor: disabled ? colors.licorice200 : colors.blueberry400,
    },
  })
);

const CheckboxBackground = styled('div')<CheckboxProps>(
  {
    alignItems: 'center',
    backgroundColor: colors.frenchVanilla100,
    borderRadius: checkboxBorderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    height: checkboxHeight,
    justifyContent: 'center',
    padding: '0px 2px',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: checkboxWidth,
  },
  ({checked, disabled}) => ({
    cursor: disabled ? undefined : 'pointer',
    borderColor: checked ? colors.blueberry400 : colors.licorice100,
    backgroundColor: checked ? colors.blueberry400 : disabled ? colors.soap100 : 'white',
    '&:hover': {
      backgroundColor: checked ? colors.blueberry400 : disabled ? colors.soap100 : 'white',
      borderColor: checked ? colors.blueberry400 : colors.licorice100,
    },
  })
);

const CheckboxCheck = styled('div')<Pick<CheckboxProps, 'checked'>>(
  {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'transform 200ms ease, opacity 200ms ease',
  },
  ({checked}) => ({
    opacity: checked ? 1 : 0,
    transform: checked ? 'scale(1)' : 'scale(0.5)',
  })
);

const CheckboxLabel = styled('label')({
  color: typeColors.body,
  fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  display: 'block',
  lineHeight: '20px',
  marginLeft: checkboxWidth + checkboxSpacing,
});

export default class Checkbox extends React.Component<CheckboxProps> {
  public static defaultProps = {
    checked: false,
    label: '',
  };

  public render() {
    const {checked, disabled, id, inputRef, label, onChange, value, ...otherProps} = this.props;

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
        <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
      </CheckboxContainer>
    );
  }
}
