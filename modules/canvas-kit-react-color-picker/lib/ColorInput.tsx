import * as React from 'react';
import styled from 'react-emotion';
import {focusRing, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor, expandHex} from './ColorUtils';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ColorInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    GrowthBehavior {
  value: string;
  showCheck?: boolean;
  onChange?: (color: string) => void;
  onValidColorChange?: (color: string) => void;
}

const swatchTileSpacing = spacing.xxs;
const swatchTileSize = 20;
const swatchCheckIconSpacing = 8;
const colorInputWidth = 116;

const CustomHexInput = styled('input')<Pick<ColorInputProps, 'disabled' | 'grow'>>(
  ({grow}) => ({
    margin: spacing.zero,
    height: spacing.xl,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    borderColor: 'transparent',
    borderRadius: '4px',
    border: `1px solid ${colors.frenchVanilla500}`,
    boxSizing: 'border-box',
    paddingLeft: '46px',
    paddingRight: spacing.s,
    width: grow ? '100%' : colorInputWidth,
    ...type.body,
    '&:not([disabled]):focus': {
      outline: 'none',
      borderColor: 'transparent',
      ...focusRing(2, 0, true, true),
    },
  }),
  ({disabled}) => ({
    backgroundColor: disabled ? colors.soap200 : '',
  })
);

const ColorInputContainer = styled('div')({
  display: 'flex',
  position: 'relative',
});

const PoundSignPrefix = styled('span')({
  position: 'absolute',
  left: 36,
  top: 10,
  ...type.body,
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
    const {showCheck, value, onChange, onValidColorChange, ...otherProps} = this.props;

    return (
      <ColorInputContainer>
        <PoundSignPrefix>#</PoundSignPrefix>
        <CustomHexInput
          onChange={this.handleChange}
          type="text"
          placeholder="FFFFFF"
          value={this.formatValue(value)}
          spellCheck={false}
          maxLength={7} // 7 to allow pasting with a hash
          {...otherProps}
        />
        <SwatchTile
          style={{
            backgroundColor: `${this.isValidHex(value) ? value : ''}`,
          }}
        />
        {showCheck && this.isValidHex(value) ? (
          <SystemIcon
            fill={pickDarkOrLightColor(value)}
            fillHover={pickDarkOrLightColor(value)}
            className={swatchCheckIcon}
            icon={checkSmallIcon}
          />
        ) : null}
      </ColorInputContainer>
    );
  }

  private handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const value = this.formatValue(e.currentTarget.value);

    if (this.props.onChange) {
      this.props.onChange(value);
    }

    if (this.isValidHex(value) && this.props.onValidColorChange) {
      this.props.onValidColorChange(`#${expandHex(value)}`);
    }
  };

  private isValidHex = (value: string) => {
    return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
  };

  private formatValue = (value: string) => {
    return value.replace(/#/g, '').substring(0, 6);
  };
}
