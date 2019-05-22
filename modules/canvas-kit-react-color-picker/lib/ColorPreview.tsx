import * as React from 'react';
import ColorInput from './ColorInput';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';

export interface ColorPreviewProps {
  value: string;
}

const ColorPreviewComponent = styled(ColorInput)({
  pointerEvents: 'none',
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.frenchVanilla100,
});

export default class ColorPreview extends React.Component<ColorPreviewProps> {
  public render() {
    return <ColorPreviewComponent value={this.props.value} readOnly={true} />;
  }
}
