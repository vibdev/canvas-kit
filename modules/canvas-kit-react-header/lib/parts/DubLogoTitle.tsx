import * as React from 'react';
import {css, cx} from 'emotion';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {HeaderTheme} from '../shared/types';
import {logoTitleStyle, verticalCenterStyle} from '../shared/styles';
import * as chroma from 'chroma-js';
import {dubLogoWhite, dubLogoBlue} from './_brand-assets';
import {HeaderHeight} from '../Header';

export type DubTitleProps = {
  theme?: HeaderTheme;
  title: string;
  bgColor?: string;
};

export class DubLogoTitle extends React.Component<DubTitleProps> {
  static defaultProps: Partial<DubTitleProps> = {
    theme: HeaderTheme.White,
  };

  render() {
    const lockupContainerStyle = css({
      label: 'lockup-container',
      display: 'inline-block',
    });

    const lockupStyle = css({
      label: 'lockup-style',
      background: this.props.bgColor ? this.props.bgColor : 'none',
      height: HeaderHeight.Small,
    });

    const logoStyle = css({
      label: 'logo-style',
      padding: `0 ${spacing.s}`,
      marginRight: spacing.s,
      borderRight: `1px solid ${
        this.props.theme === HeaderTheme.White
          ? colors.soap400
          : chroma(colors.frenchVanilla100)
              .alpha(0.3)
              .css()
      }`,
    });

    const titleStyle = css({
      color: this.props.theme === HeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
    });

    return (
      <div className={lockupContainerStyle}>
        <div className={cx(lockupStyle, css(verticalCenterStyle))}>
          <span
            className={logoStyle}
            dangerouslySetInnerHTML={{
              __html: this.props.theme === HeaderTheme.White ? dubLogoBlue : dubLogoWhite,
            }}
          />
          <h3 className={cx(css(logoTitleStyle), titleStyle)}>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}
