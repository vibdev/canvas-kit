import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, typeColors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import CanvasSpacing from '@workday/canvas-space-web';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  hasError?: boolean;
  hasAlert?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  message?: string;
}

const checkboxWidth = 18;
const checkboxHeight = 18;
const checkboxSpacing = 11;
const checkboxBorderRadius = 2;
const RippleRadius = 11;

const CheckboxContainer = styled('div')({
  marginBottom: checkboxSpacing,
});

const CheckboxInput = styled('input')<CheckboxProps>(
  {
    position: 'absolute',
    height: checkboxHeight,
    width: checkboxWidth,
    borderRadius: checkboxBorderRadius,
    margin: 0,
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
      display: 'block',
      content: '""',
      width: checkboxWidth,
      height: checkboxHeight,
      boxShadow: '0 0 0 0 ' + colors.soap200,
      transition: 'box-shadow 200ms ease-out',
      borderRadius: 999,
      zIndex: -999,
    },
    '&:hover::after': {
      boxShadow: '0 0 0 ' + RippleRadius + 'px ' + colors.soap200,
    },
  },
  ({checked}) => ({
    '&:hover ~ div:first-of-type': {
      borderColor: checked ? colors.blueberry400 : colors.licorice200,
    },
    '&:focus:hover ~ div:first-of-type': {
      borderColor: colors.blueberry400,
    },
  })
);

const CheckboxBackground = styled('div')<CheckboxProps>(
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
    borderStyle: 'solid',
    borderRadius: checkboxBorderRadius,
    padding: '0px 2px',
    transition: 'border 200ms ease, background 200ms',
  },
  ({checked, disabled, hasError, hasAlert}) => ({
    borderWidth: hasError ? '2px' : hasAlert ? '2px' : '1px',
    borderColor: checked
      ? colors.blueberry400
      : hasError
        ? colors.cinnamon500
        : hasAlert
          ? colors.cantaloupe400
          : colors.licorice100,
    backgroundColor: checked ? colors.blueberry400 : disabled ? colors.soap100 : 'white',
    '&:hover': {
      borderColor: checked ? colors.blueberry400 : colors.licorice100,
      backgroundColor: checked ? colors.blueberry400 : disabled ? colors.soap100 : 'white',
    },
  })
);

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

const CheckboxLabel = styled('label')({
  fontSize: '14px',
  fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
  color: typeColors.body,
  lineHeight: '20px',
  fontWeight: 500,
  marginLeft: checkboxWidth + checkboxSpacing,
  display: 'block',
});

const CheckboxMessage = styled('div')<Pick<CheckboxProps, 'message' | 'hasError' | 'hasAlert'>>(
  {
    fontSize: '13px',
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
    color: typeColors.body,
    lineHeight: '20px',
    fontWeight: 400,
    marginLeft: checkboxWidth + checkboxSpacing,
    display: 'block',
  },
  ({message, hasError, hasAlert}) => ({
    '&::before': {
      content: hasError ? '"Error: "' : hasAlert ? '"Alert: "' : '""',
      fontWeight: 500,
    },
    display: message === '' ? 'none' : hasError ? 'block' : hasAlert ? 'block' : 'none',
  })
);

export default class Checkbox extends React.Component<CheckboxProps> {
  public static defaultProps = {
    checked: false,
    hasError: false,
    hasAlert: false,
    message: '',
    label: '',
  };

  public render() {
    const {
      checked,
      hasError,
      hasAlert,
      disabled,
      id,
      inputRef,
      onChange,
      value,
      label,
      message,
      ...otherProps
    } = this.props;

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
        <CheckboxBackground
          checked={checked}
          disabled={disabled}
          hasError={hasError}
          hasAlert={hasAlert}
        >
          <CheckboxCheck checked={checked}>
            <SystemIcon icon={checkSmallIcon} color={colors.frenchVanilla100} />
          </CheckboxCheck>
        </CheckboxBackground>
        <CheckboxLabel for={id}>{label}</CheckboxLabel>
        <CheckboxMessage hasError={hasError} hasAlert={hasAlert} message={message}>
          {message}
        </CheckboxMessage>
      </CheckboxContainer>
    );
  }
}
