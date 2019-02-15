import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {IconButton} from '@workday/canvas-kit-react-button';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

export interface CustomColorInputState {
  typedInHexValue: string;
  isInputFocused: boolean;
}

export interface CustomColorInputProps {
  onSubmit: (color: string) => void;
  selectedHexColor: string;
}

const swatchTileSpacing = 8;
const swatchTitleSize = 20;

const CustomHexInput = styled('input')({
  margin: 0,
  height: 40,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  borderColor: 'transparent',
  borderRadius: '4px',
  border: `1px solid ${colors.frenchVanilla400}`,
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingLeft: '36px',
  marginRight: 8,
  '&:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    ...focusRing(2, 0),
  },
});

const CustomColorInputContainer = styled('div')({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
});

const SwatchTile = styled('div')({
  position: 'absolute',
  cursor: 'pointer',
  height: swatchTitleSize,
  width: swatchTitleSize,
  top: 0,
  bottom: 0,
  left: swatchTileSpacing,
  margin: 'auto',
  border: `1px solid ${colors.soap600}`,
  pointerEvents: 'none',
  borderRadius: '2px',
});

const selectedCustomHex = css({
  ...focusRing(2, 2),
});

const swatchCheckIcon = css({
  position: 'absolute',
  left: swatchTileSpacing,
  top: swatchTileSpacing,
});

export default class CustomColorInput extends React.Component<
  CustomColorInputProps,
  CustomColorInputState
> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  public constructor(props: CustomColorInputProps) {
    super(props);
    this.state = {
      typedInHexValue: '',
      isInputFocused: false,
    };
  }
  public render() {
    const {selectedHexColor} = this.props;
    const {typedInHexValue, isInputFocused} = this.state;
    return (
      <CustomColorInputContainer>
        <CustomHexInput
          onKeyPress={this.onKeyPress}
          placeholder="eg. #FFFFFF"
          innerRef={this.inputRef}
          onChange={this.onCustomHexChange}
          type="text"
          defaultValue={typedInHexValue}
        />
        <SwatchTile
          style={{backgroundColor: `${typedInHexValue || ''}`}}
          className={
            selectedHexColor && isInputFocused
              ? css`
                  ${selectedCustomHex};
                `
              : ''
          }
        />
        {selectedHexColor ? (
          <SystemIcon fill="#fff" fillHover="#fff" className={swatchCheckIcon} icon={checkIcon} />
        ) : null}
        <IconButton
          disabled={!this.isValidHexValue(typedInHexValue)}
          onClick={this.handleSubmit}
          buttonType={IconButton.Types.Filled}
          icon={checkIcon}
        />
      </CustomColorInputContainer>
    );
  }

  private onKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const isValidHex: boolean = this.isValidHexValue(this.state.typedInHexValue);
    if (evt.key === 'Enter' && isValidHex) {
      this.handleSubmit();
    }
  };

  private onCustomHexChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
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
    this.props.onSubmit(this.state.typedInHexValue);
  };
}
