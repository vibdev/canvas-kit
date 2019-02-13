import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {IconButton} from '@workday/canvas-kit-react-button';
import {checkIcon} from '@workday/canvas-system-icons-web';

interface CustomColorInputState {
  /**
   * The hex value entered by the user
   */
  colorHexValue: string;
}

interface CustomColorInputProps {
  onSubmit: (color: string) => void;
}

const CustomHexInput = styled('input')({
  margin: 0,
  height: 40,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  borderColor: 'transparent',
  borderRadius: '2px',
  border: `1px solid ${colors.frenchVanilla400}`,
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingLeft: '36px',
  marginRight: 8,
  '&:focus, &:active': {
    outline: 'none',
    ...focusRing(2, 0),
  },
});

const container = css({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
});

const SwatchTile = styled('div')({
  position: 'absolute',
  cursor: 'pointer',
  height: '20px',
  width: '20px',
  top: '0',
  bottom: 0,
  margin: 'auto',
  left: 8,
  border: '1px solid grey',
  pointerEvents: 'none',
  borderRadius: '3px',
});

const selectedCustomHex = css({
  ...focusRing(2, 2),
});

export default class CustomColorInput extends React.Component<
  CustomColorInputProps,
  CustomColorInputState
> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  public constructor(props: CustomColorInputProps) {
    super(props);
    this.state = {
      colorHexValue: '',
    };
  }
  public render() {
    return (
      <div className={container}>
        <CustomHexInput
          onKeyPress={this.onKeyPress}
          placeholder="eg. #FFFFFF"
          innerRef={this.inputRef}
          onChange={this.onCustomHexChange}
          type="text"
          defaultValue={this.state.colorHexValue}
        />
        <SwatchTile
          style={{backgroundColor: `${this.state.colorHexValue || ''}`}}
          role="button"
          className={
            this.isValidHexValue(this.state.colorHexValue) && this.state.colorHexValue
              ? css`
                  ${selectedCustomHex};
                `
              : ''
          }
        />
        <IconButton
          onClick={this.handleSubmit}
          buttonType={IconButton.Types.Filled}
          icon={checkIcon}
        />
      </div>
    );
  }

  /**
   * If the hex code is valid, user can press enter to submit their custom hex color
   */
  private onKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const isValidHex: boolean = this.isValidHexValue(this.state.colorHexValue);
    if (evt.key === 'Enter' && isValidHex) {
      this.setState({
        colorHexValue: this.state.colorHexValue,
      });
      this.props.onSubmit(this.state.colorHexValue);
    }
  };

  /**
   * On change, it checks if the hex code is valid and updates the custom hex swatch
   */
  private onCustomHexChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const isValidHex: boolean = this.isValidHexValue(evt.target.value);
    const newColorHexValue: string = isValidHex ? this.addPoundSign(evt.target.value) : '';
    this.setState({
      colorHexValue: newColorHexValue,
    });
  };

  /**
   * Checks if the hex code is valid and the right length
   */
  private isValidHexValue = (hexCode: string): boolean => {
    return /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test(hexCode);
  };

  /**
   * Adds pound sign to the hex code if necessary
   */
  private addPoundSign = (hexCode: string): string => {
    return hexCode.slice(0, 1) === '#' ? hexCode : `#${hexCode}`;
  };

  private handleSubmit = (): void => {
    console.warn('input submit');
    // this.setState({
    //   submitedColorValue: this.state.colorHexValue,
    // });
    this.props.onSubmit(this.state.colorHexValue);
  };
}
