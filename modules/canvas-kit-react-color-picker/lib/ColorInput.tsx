import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor} from './ColorUtils';

export interface ColorInputProps {
  value: string;
  showCheck?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onValidColorChange?: (color: string) => void;
}

const swatchTileSpacing = spacing.xxs;
const swatchTileSize = 20;
const swatchCheckIconSpacing = 8;
const colorInputWidth = 111;

const CustomHexInput = styled('input')<Pick<ColorInputProps, 'disabled'>>(
  {
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
    width: colorInputWidth,
    ...type.body,
    '&:not([disabled]):focus': {
      outline: 'none',
      borderColor: 'transparent',
      ...focusRing(2, 0, true, true),
    },
  },
  ({disabled}) => ({
    backgroundColor: disabled ? colors.soap200 : '',
    cursor: disabled ? 'not-allowed' : 'cursor',
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
  state = {
    lastValidHex: '',
  };
  public render() {
    const {disabled, showCheck, value} = this.props;
    const strippedHashValue = value.slice(0, 1) === '#' ? value.substring(1) : value;
    const setLimit = value.slice(0, 1) !== '#' ? 7 : 6;

    return (
      <ColorInputContainer>
        <PoundSignPrefix>#</PoundSignPrefix>
        <CustomHexInput
          onChange={this.handleChange}
          type="text"
          placeholder="FFFFFF"
          value={strippedHashValue}
          spellCheck={false}
          maxLength={setLimit}
          disabled={disabled}
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
    let value = e.currentTarget.value;
    if (value.slice(0, 1) === '#') {
      value = value.replace('#', '');
    }

    if (this.props.onChange) {
      this.props.onChange(value);
    }

    if (this.isValidHex(value)) {
      if (this.props.onValidColorChange) {
        this.props.onValidColorChange(`#${value}`);
      }
    }
  };

  private isValidHex = (value: string) => {
    return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
  };
}
