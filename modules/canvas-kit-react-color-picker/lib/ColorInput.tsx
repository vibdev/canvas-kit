import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing, type, InputProvider} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor} from './ColorUtils';

export interface ColorInputState {
  isInputFocused: boolean;
  typedInHexValue: string;
}

export interface ColorInputProps {
  onEnterPress: (color: string) => void;
  selectedHexColor: string;
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
  border: `1px solid ${colors.frenchVanilla400}`,
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingLeft: '46px',
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
  top: 12,
  ...type.small,
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
      typedInHexValue: this.props.selectedHexColor,
      isInputFocused: false,
    };
  }

  public render() {
    const {selectedHexColor, showSwatchTileCheckIcon} = this.props;
    const {typedInHexValue, isInputFocused} = this.state;
    return (
      <InputProvider>
        <ColorInputContainer>
          <PoundSignPrefix>#</PoundSignPrefix>
          <CustomHexInput
            onKeyPress={this.onKeyPress}
            onChange={this.onChange}
            type="text"
            placeholder="FFFFFF"
            defaultValue={typedInHexValue}
          />
          <SwatchTile style={{backgroundColor: `${typedInHexValue || ''}`}} />
          {selectedHexColor && isInputFocused && showSwatchTileCheckIcon ? (
            <SystemIcon
              fill={pickDarkOrLightColor(selectedHexColor)}
              fillHover={pickDarkOrLightColor(selectedHexColor)}
              className={swatchCheckIcon}
              icon={checkSmallIcon}
            />
          ) : null}
        </ColorInputContainer>
      </InputProvider>
    );
  }

  private onKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const isValidHex = this.isValidHexValue(this.state.typedInHexValue);
    if (evt.key === 'Enter' && isValidHex) {
      this.handleSubmit();
    }
  };

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const isValidHex = this.isValidHexValue(evt.target.value);
    const newColorHexValue = isValidHex ? this.addPoundSign(evt.target.value) : '';
    this.setState({
      typedInHexValue: newColorHexValue,
      isInputFocused: false,
    });
  };

  private isValidHexValue = (hexCode: string): boolean => {
    return /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test(hexCode);
  };

  private addPoundSign = (hexCode: string): string => {
    return `#${hexCode}`;
  };

  private handleSubmit = (): void => {
    this.setState({
      isInputFocused: true,
    });
    this.props.onEnterPress(this.state.typedInHexValue);
  };
}
