import * as React from 'react';
import {css, cx} from 'emotion';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import {
  logoTitleStyle,
  verticalCenterStyle,
} from '@workday/canvas-kit-react-header/lib/shared/styles';
import {colors} from '@workday/canvas-kit-react-core';
import * as chroma from 'chroma-js';
import {wdayLogoWhite, wdayLogoBlue} from './_brand-assets';

export type WorkdayLogoTitleProps = {
  title: string;
} & Partial<HeaderThemePropType>;

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  static defaultProps = {
    mode: 'primary',
  };

  render() {
    const logoStyle = css({
      padding: '0 32px',
      marginRight: '24px',
      borderRight: this.props.title.length
        ? `1px solid ${
            this.props.theme === HeaderTheme.white
              ? colors.soap400
              : chroma(colors.soap400)
                  .alpha(0.4)
                  .css()
          }`
        : 'none',
    });

    const titleColor = css({
      color: this.props.theme === HeaderTheme.white ? colors.blueberry500 : colors.frenchVanilla100,
    });

    return (
      <span className={verticalCenterStyle}>
        <span
          className={logoStyle}
          dangerouslySetInnerHTML={{
            __html: this.props.theme === HeaderTheme.white ? wdayLogoBlue : wdayLogoWhite,
          }}
        />
        <h3 className={cx(logoTitleStyle, titleColor)}>{this.props.title}</h3>
      </span>
    );
  }
}
