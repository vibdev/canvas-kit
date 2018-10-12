import * as React from 'react';
import {css, cx} from 'react-emotion';
import {CSSProperties} from '@workday/canvas-kit-react-core';
import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {SpanProps} from './types';
import {validateIconType} from './utils';

export interface IconProps {
  icon: CanvasIcon;
  styles: CSSProperties;
  size?: number;
  elemProps?: SpanProps;
  type: CanvasIconTypes;
}

export default class Icon extends React.Component<IconProps> {
  static defaultProps = {
    elemProps: {},
  };

  public render() {
    const {icon, size, styles, type, elemProps} = this.props;

    // Validation for JS
    try {
      validateIconType(icon, type);
    } catch (e) {
      console.error(e);
      return null;
    }

    const iconStyles = [{display: 'inline-block', '& svg': {display: 'block'}}, styles];

    if (size) {
      iconStyles.push({
        '& svg': {
          width: size,
          height: size,
        },
      });
    }

    const iconStyle = css(iconStyles);

    return (
      <span
        {...elemProps}
        dangerouslySetInnerHTML={{__html: icon.svg}}
        // Need to combine iconStyle with the className prop, otherwise we'll clobber it
        // (we'll need to do something like this for each HTML <span> prop we explicitly set in this component)
        className={cx(iconStyle, elemProps!.className)}
      />
    );
  }
}
