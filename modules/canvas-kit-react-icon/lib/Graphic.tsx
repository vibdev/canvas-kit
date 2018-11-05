import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import Svg from './Svg';
import {SpanProps} from './types';

export interface GraphicProps {
  src: CanvasGraphic;
}

export default class Graphic extends React.Component<SpanProps & GraphicProps> {
  render() {
    const {src, ...elemProps} = this.props;

    return <Svg src={src} styles={{}} type={CanvasIconTypes.Graphic} elemProps={elemProps} />;
  }
}
