import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import canvas, {
  iconColors,
  inputColors,
  commonColors,
  typeColors,
} from '@workday/canvas-kit-react-core';
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
const checkboxTapArea = 24;
const checkboxSpacingBottom = checkboxTapArea + 8;
const checkboxSpacingRight = 5;
const checkboxWidth = 18;
const rippleRadius = (40 - checkboxWidth) / 2;

const CheckboxContainer = styled('div')({
  display: 'block',
  height: checkboxSpacingBottom,
});

const CheckboxInputWrapper = styled('div')({
  display: 'inline-block',
  width: checkboxTapArea,
  '&::after': {
    borderRadius: 999,
    boxShadow: '0 0 0 0 ' + commonColors.backgroundAlt,
    content: '""',
    display: 'inline-block',
    height: checkboxHeight,
    transition: 'box-shadow 150ms ease-out',
    width: checkboxWidth,
    zIndex: 1,
  },
  '&:hover::after': {
    boxShadow: '0 0 0 ' + rippleRadius + 'px ' + commonColors.backgroundAlt,
  },
});

const CheckboxInput = styled('input')<CheckboxProps>(
  {
    display: 'inline-block',
    borderRadius: checkboxBorderRadius,
    height: checkboxTapArea,
    margin: 0,
    marginTop: '-3px',
    marginLeft: '-3px',
    position: 'absolute',
    opacity: 0,
    width: checkboxTapArea,
    '&:focus, &:active': {
      outline: 'none',
    },
    '&:focus, &:active, &focus:hover, &:active:hover': {
      '& ~ div:first-of-type': {
        ...focusRing(0, 0),
        borderColor: typeColors.link,
        borderWidth: '2px',
        zIndex: 2,
      },
      '&:checked ~ div:first-of-type': {
        ...focusRing(2, 2),
      },
    },
  },
  ({checked, disabled}) => ({
    '&:hover ~ div:first-of-type': {
      borderColor: checked ? typeColors.link : inputColors.hoverBorder,
    },
    '&:focus:hover ~ div:first-of-type': {
      borderColor: disabled ? inputColors.hoverBorder : typeColors.link,
    },
  })
);

const CheckboxBackground = styled('div')<CheckboxProps>(
  {
    alignItems: 'center',
    backgroundColor: commonColors.background,
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
    borderColor: checked ? typeColors.link : inputColors.border,
    backgroundColor: checked ? typeColors.link : disabled ? inputColors.disabled : 'white',
    '&:hover': {
      backgroundColor: checked ? typeColors.link : disabled ? inputColors.disabled : 'white',
      borderColor: checked ? typeColors.link : inputColors.border,
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
  ...canvas.type.body,
  display: 'inline-block',
  marginLeft: checkboxSpacingRight,
  verticalAlign: '3px',
});

// Show or hide the label component based on wheter or not a label is specified
export function CheckboxLabelComponent(props: {label: React.ReactNode; id: string | undefined}) {
  if (!props.label) {
    return null;
  }

  return <CheckboxLabel htmlFor={props.id}>{props.label}</CheckboxLabel>;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  public static defaultProps = {
    checked: false,
    label: '',
  };

  public render() {
    const {checked, disabled, id, inputRef, label, onChange, value, ...otherProps} = this.props;

    return (
      <CheckboxContainer>
        <CheckboxInputWrapper>
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
              <SystemIcon icon={checkSmallIcon} color={iconColors.inverse} />
            </CheckboxCheck>
          </CheckboxBackground>
        </CheckboxInputWrapper>
        <CheckboxLabelComponent id={id} label={label} />
      </CheckboxContainer>
    );
  }
}
