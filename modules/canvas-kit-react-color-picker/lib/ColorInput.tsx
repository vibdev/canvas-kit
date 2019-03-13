import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing, type, InputProvider} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor} from './ColorUtils';

export interface ColorInputProps {
  onChange: (color: string) => void;
  onValidColorChange: (color: string) => void;
  value: string;
  showSwatchTileCheckIcon?: boolean;
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
  ...type.variant.hint,
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

export default class ColorInput extends React.Component<ColorInputProps> {
  public render() {
    const {showSwatchTileCheckIcon, value} = this.props;
    const validValue = value.slice(0, 1) === '#' ? value.substring(1) : value;
    return (
      <InputProvider>
        <ColorInputContainer>
          <PoundSignPrefix>#</PoundSignPrefix>
          <CustomHexInput
            onChange={this.onChange}
            type="text"
            placeholder="FFFFFF"
            value={validValue}
            maxLength={6}
            spellCheck={false}
          />
          <SwatchTile
            style={{
              backgroundColor: `${this.isValidHex(value) ? value : ''}`,
            }}
          />
          {showSwatchTileCheckIcon && this.isValidHex(value) ? (
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

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    this.props.onChange(value);

    if (this.isValidHex(value) && value.slice(0, 1) !== '#') {
      this.props.onValidColorChange(`#${value}`);
    }
  };

  private isValidHex = (value: string) => {
    return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
  };
}
