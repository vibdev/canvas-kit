import * as React from 'react';
import ColorInput from '@workday/canvas-kit-react-color-picker';
import styled from 'react-emotion';
import {inputColors, colors} from '@workday/canvas-kit-react-core';

export interface ColorPreviewProps {
  value: string;
}
const ColorPreviewContainer = styled('div')({
  span: {
    color: inputColors.text,
  },
});

const ColorPreviewComponent = styled(ColorInput)({
  pointerEvents: 'none',
  '&:disabled': {
    backgroundColor: colors.frenchVanilla100,
    borderColor: colors.frenchVanilla100,
    color: inputColors.text,
  },
  // This is necessary if the value prop is set to ""
  '&:disabled::placeholder': {
    color: inputColors.text,
  },
});

export default class ColorPreview extends React.Component<ColorPreviewProps> {
  static defaultProps = {
    value: 'FFFFFF',
  };

  public render() {
    return (
      <ColorPreviewContainer>
        <ColorPreviewComponent value={this.props.value} disabled={true} />
      </ColorPreviewContainer>
    );
  }
}
