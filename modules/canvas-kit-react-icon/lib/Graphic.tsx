import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from 'create-emotion';
import Svg from './Svg';
import {SpanProps} from './types';

export interface GraphicStyles {
  width?: number;
  height?: number;
}

export interface GraphicProps extends GraphicStyles {
  src: CanvasGraphic;
}

export const graphicStyles = ({width, height}: GraphicStyles): CSSObject => {
  if (width) {
    return {
      '& svg': {
        width,
        height: '100%',
      },
    };
  } else if (height) {
    return {
      '& svg': {
        height,
        width: '100%',
      },
    };
  }

  return {};
};

export default class Graphic extends React.Component<SpanProps & GraphicProps> {
  render() {
    const {src, width, height, ...elemProps} = this.props;

    return (
      <Svg
        src={src}
        styles={graphicStyles({width, height})}
        type={CanvasIconTypes.Graphic}
        elemProps={elemProps}
      />
    );
  }
}
