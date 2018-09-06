import * as React from 'react';
import {css, cx} from 'emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import {
  logoTitleStyle,
  verticalCenterStyle,
} from '@workday/canvas-kit-react-header/lib/shared/styles';
import * as chroma from 'chroma-js';
import {dubLogoWhite, dubLogoBlue} from './_brand-assets';

export type DubTitleProps = {
  title: string;
  bgColor?: string;
} & Partial<HeaderThemePropType>;

export class DubLogoTitle extends React.Component<DubTitleProps> {
  static defaultProps = {
    theme: HeaderTheme.white,
  };

  render() {
    const logoStyle = css({
      padding: '0 16px',
      marginRight: '16px',
      borderRight: `1px solid ${
        this.props.theme === HeaderTheme.white
          ? colors.soap400
          : chroma(colors.frenchVanilla100)
              .alpha(0.3)
              .css()
      }`,
    });

    const titleColor = css({
      color: this.props.theme === HeaderTheme.white ? colors.blueberry500 : colors.frenchVanilla100,
    });

    const bgColor = css({
      background: this.props.bgColor ? this.props.bgColor : 'none',
    });

    return (
      <div className={cx(css({display: 'inline-block'}), bgColor)}>
        <div className={cx(verticalCenterStyle)}>
          <span
            className={logoStyle}
            dangerouslySetInnerHTML={{
              __html: this.props.theme === HeaderTheme.white ? dubLogoBlue : dubLogoWhite,
            }}
          />
          <h3 className={cx(logoTitleStyle, titleColor)}>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}
