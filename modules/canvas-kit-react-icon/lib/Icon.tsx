import * as React from 'react';
import styled from 'react-emotion';
import {CSSProperties} from '@workday/canvas-kit-react-core';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {SpanProps} from './types';
import {validateIconType} from './utils';

export type CSSPropertiesFunction = (...args: any[]) => CSSProperties;

export interface IconProps {
  icon: CanvasIcon;
  styles: CSSProperties | CSSPropertiesFunction;
  size?: number;
  elemProps?: SpanProps;
  type: CanvasIconTypes;
}

export default class Icon extends React.Component<IconProps> {
  public render() {
    // Validation for JS
    try {
      validateIconType(this.props.icon, this.props.type);
    } catch (e) {
      console.error(e);
      return null;
    }

    const styles = [this.props.styles];

    if (this.props.size) {
      styles.push({
        '& svg': {
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
        },
      });
    }

    const IconContainer = styled('span')(styles);

    return (
      <span {...this.props.elemProps}>
        <IconContainer dangerouslySetInnerHTML={{__html: this.props.icon.svg}} />
      </span>
    );
  }
}
