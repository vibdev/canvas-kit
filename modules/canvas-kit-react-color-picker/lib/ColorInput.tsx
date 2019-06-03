import * as React from 'react';
import styled from 'react-emotion';
import {
  pickForegroundColor,
  expandHex,
  GrowthBehavior,
  ErrorType,
} from '@workday/canvas-kit-react-common';
import {colors, spacing, type, inputColors} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import TextInput, {TextInputProps} from '@workday/canvas-kit-react-text-input';

export interface ColorInputProps extends TextInputProps, GrowthBehavior {
  value: string;
  error?: ErrorType;
  inputRef?: React.Ref<HTMLInputElement>;
  showCheck?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValidColorChange?: (color: string) => void;
}

const swatchTileSpacing = spacing.xxs;
const swatchTileSize = 20;
const swatchCheckIconSpacing = 8;
const colorInputWidth = 116;
const colorInputErrorWidth = 144;

const CustomHexInput = styled(TextInput)<Pick<ColorInputProps, 'disabled' | 'error' | 'grow'>>(
  {
    boxSizing: 'border-box',
    paddingLeft: '46px',
    minWidth: colorInputWidth,
    width: colorInputWidth,
  },
  ({error}) =>
    typeof error !== 'undefined' && {
      width: colorInputErrorWidth,
    },
  ({grow}) =>
    grow && {
      minWidth: '100%',
      width: '100%',
    },
  ({disabled}) => ({
    backgroundColor: disabled ? colors.soap200 : '',
  })
);

const ColorInputContainer = styled('div')({
  position: 'relative',
});

const PoundSignPrefix = styled('span')<Pick<ColorInputProps, 'disabled'>>(
  {
    position: 'absolute',
    left: 36,
    top: 10,
    ...type.body,
    ...type.variant.hint,
  },
  ({disabled}) => ({
    color: disabled ? inputColors.disabled.text : undefined,
  })
);

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
  static defaultProps = {
    value: '',
  };

  public render() {
    const {
      showCheck,
      value,
      onChange,
      onValidColorChange,
      inputRef,
      disabled,
      ...otherProps
    } = this.props;
    const formattedValue = this.formatValue(value);

    return (
      <ColorInputContainer>
        <CustomHexInput
          innerRef={inputRef}
          onChange={this.handleChange}
          type="text"
          placeholder="FFFFFF"
          value={formattedValue}
          spellCheck={false}
          disabled={disabled}
          maxLength={7} // 7 to allow pasting with a hash
          {...otherProps}
        />
        <SwatchTile
          style={{
            backgroundColor: this.isValidHex(formattedValue) ? `#${formattedValue}` : '',
          }}
        />
        {showCheck && this.isValidHex(formattedValue) ? (
          <SystemIcon
            fill={pickForegroundColor(formattedValue)}
            fillHover={pickForegroundColor(formattedValue)}
            className={swatchCheckIcon}
            icon={checkSmallIcon}
          />
        ) : null}
        <PoundSignPrefix disabled={disabled}>#</PoundSignPrefix>
      </ColorInputContainer>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = this.formatValue(e.currentTarget.value);

    if (this.props.onChange) {
      this.props.onChange(e);
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
