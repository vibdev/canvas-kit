import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import Icon from './Icon';
import {SpanProps} from './types';

export interface GraphicProps {
  icon: CanvasGraphic;
  size?: number;
}

export default class Graphic extends React.Component<SpanProps & GraphicProps> {
  render() {
    const {icon, size, ...elemProps} = this.props;

    return (
      <Icon
        icon={icon}
        styles={{}}
        type={CanvasIconTypes.Graphic}
        size={size}
        elemProps={elemProps}
      />
    );
  }
}
