import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {IconButton} from '@workday/canvas-kit-react-button';
import {checkIcon, checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor} from './ColorUtils';

export interface ColorInputState {
  isInputFocused: boolean;
  typedInHexValue: string;
}

export interface ColorInputProps {
  onClick: (color: string) => void;
  selectedHexColor: string;
  showSwatchTileCheckIcon?: boolean;
  value?: string;
}

const swatchTileSpacing = spacing.xxs;
const swatchTileSize = 20;

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
  paddingLeft: '36px',
  marginRight: spacing.xxs,
  '&:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    ...focusRing(2, 0),
  },
});

const ColorInputContainer = styled('div')({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
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
  left: 5,
  top: 9,
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
      <ColorInputContainer>
        <CustomHexInput
          onKeyPress={this.onKeyPress}
          placeholder="eg. #FFFFFF"
          onChange={this.onChange}
          type="text"
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
        <IconButton
          disabled={!this.isValidHexValue(typedInHexValue)}
          onClick={this.handleSubmit}
          buttonType={IconButton.Types.Filled}
          icon={checkIcon}
        />
      </ColorInputContainer>
    );
  }

  private onKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const isValidHex: boolean = this.isValidHexValue(this.state.typedInHexValue);
    if (evt.key === 'Enter' && isValidHex) {
      this.handleSubmit();
    }
  };

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const isValidHex: boolean = this.isValidHexValue(evt.target.value);
    const newColorHexValue: string = isValidHex ? this.addPoundSign(evt.target.value) : '';
    this.setState({
      typedInHexValue: newColorHexValue,
      isInputFocused: false,
    });
  };

  private isValidHexValue = (hexCode: string): boolean => {
    return /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test(hexCode);
  };

  private addPoundSign = (hexCode: string): string => {
    return hexCode.slice(0, 1) === '#' ? hexCode : `#${hexCode}`;
  };

  private handleSubmit = (): void => {
    this.setState({
      isInputFocused: true,
    });
    this.props.onClick(this.state.typedInHexValue);
  };
}
