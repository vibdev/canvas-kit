import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing, type, InputProvider} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor, stringByConvertingToValidHexValue} from './ColorUtils';

export interface ColorInputState {
  validHexValue: string;
}

export interface ColorInputProps {
  onChange: (color: string) => void;
  value: string;
  showSwatchTileCheckIcon?: boolean;
  onValidColorChange: (color: string) => void;
}

const swatchTileSpacing = spacing.xxs;
const swatchTileSize = 20;
const swatchCheckIconSpacing = 8;

const CustomHexInput = styled('input')({
  margin: spacing.zero,
  height: spacing.xl,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  borderColor: 'transparent',
  borderRadius: '4px',
  border: `1px solid ${colors.frenchVanilla500}`,
  boxSizing: 'border-box',
  paddingLeft: '46px',
  ...type.body,
  marginRight: spacing.xxs,
  [`[data-whatinput='mouse'] &:focus,
  [data-whatinput='keyboard'] &:focus,
  [data-whatinput='pointer'] &:focus`]: {
    outline: 'none',
    borderColor: 'transparent',
    ...focusRing(2, 0),
  },
});

const ColorInputContainer = styled('div')({
  display: 'flex',
  position: 'relative',
});

const PoundSignPrefix = styled('span')({
  position: 'absolute',
  left: 36,
  top: 10,
  ...type.body,
  color: colors.blackPepper100,
});

const SwatchTile = styled('div')({
  position: 'absolute',
  cursor: 'pointer',
  height: swatchTileSize,
  width: swatchTileSize,
  top: spacing.zero,
  bottom: spacing.zero,
  left: swatchTileSpacing,
  margin: 'auto',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
  pointerEvents: 'none',
  borderRadius: '2px',
});

const swatchCheckIcon = css({
  position: 'absolute',
  left: 6,
  top: swatchCheckIconSpacing,
});

export default class ColorInput extends React.Component<ColorInputProps, ColorInputState> {
  public constructor(props: ColorInputProps) {
    super(props);
    this.state = {
      validHexValue: '',
    };
  }

  public render() {
    const {showSwatchTileCheckIcon, value} = this.props;
    const validValue = value && value.slice(0, 1) === '#' ? value.substring(1) : value;

    return (
      <InputProvider>
        <ColorInputContainer>
          <PoundSignPrefix>#</PoundSignPrefix>
          <CustomHexInput
            onChange={this.onChange}
            type="text"
            placeholder="FFFFFF"
            value={validValue}
          />
          <SwatchTile style={{backgroundColor: `${this.state.validHexValue}`}} />
          {showSwatchTileCheckIcon && this.state.validHexValue ? (
            <SystemIcon
              fill={pickDarkOrLightColor(value)}
              fillHover={pickDarkOrLightColor(value)}
              className={swatchCheckIcon}
              icon={checkSmallIcon}
            />
          ) : null}
        </ColorInputContainer>
      </InputProvider>
    );
  }

  public componentDidUpdate(prevProps: ColorInputProps, prevState: ColorInputState) {
    if (prevState.validHexValue !== this.state.validHexValue) {
      this.props.onValidColorChange(this.state.validHexValue);
    }
  }

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const validInput = stringByConvertingToValidHexValue(evt.target.value, this.props.value);
    const _isValid = this.isValidHexValue(validInput);
    console.warn('validInput', validInput);
    const validHexValue = _isValid ? `#${validInput}` : '';

    this.setState({
      validHexValue,
    });

    this.props.onChange(validInput);
  };

  private isValidHexValue = (hexCode: string): boolean => {
    if (hexCode.length > 6) {
      return false;
    }
    if (hexCode.length === 4 || hexCode.length === 5) {
      console.warn('in if', hexCode);
      return this.isValidHexValue(hexCode.substring(0, 3));
    }
    return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(hexCode);
  };
}
