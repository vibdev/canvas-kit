import * as React from 'react';
import {css, cx} from 'emotion';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import {
  logoTitleStyle,
  verticalCenterStyle,
} from '@workday/canvas-kit-react-header/lib/shared/styles';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import * as chroma from 'chroma-js';
import {wdayLogoWhite, wdayLogoBlue} from './_brand-assets';
import {HeaderHeight} from '../Header';

export type WorkdayLogoTitleProps = {
  title: string;
} & Partial<HeaderThemePropType>;

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  static defaultProps = {
    mode: 'primary',
  };

  render() {
    const lockupContainerStyle = css({
      label: 'lockup-container',
      display: 'inline-block',
    });

    const lockupStyle = css({
      display: 'inline-block',
      height: HeaderHeight.Large,
    });

    const logoStyle = css({
      padding: `0 ${spacing.l}`,
      marginRight: this.props.title.length ? spacing.m : '0px',
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

    const titleStyle = css({
      display: this.props.title.length ? 'initial' : 'none',
      color: this.props.theme === HeaderTheme.white ? colors.blueberry500 : colors.frenchVanilla100,
    });

    return (
      <div className={lockupContainerStyle}>
        <div className={cx(lockupStyle, css(verticalCenterStyle))}>
          <span
            className={logoStyle}
            dangerouslySetInnerHTML={{
              __html: this.props.theme === HeaderTheme.white ? wdayLogoBlue : wdayLogoWhite,
            }}
          />
          <h3 className={cx(css(logoTitleStyle), titleStyle)}>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}
