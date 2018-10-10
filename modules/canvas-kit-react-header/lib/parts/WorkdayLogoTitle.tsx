import * as React from 'react';
import {css, cx} from 'emotion';
import {HeaderTheme} from '../shared/types';
import {logoTitleStyle, verticalCenterStyle} from '../shared/styles';
import {wdayLogoWhite, wdayLogoBlue} from './_brand-assets';
import {HeaderHeight} from '../Header';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import * as chroma from 'chroma-js';

export type WorkdayLogoTitleProps = {
  themeColor: HeaderTheme;
  title: string;
};

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    title: '',
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
      marginRight: this.props.title && this.props.title.length ? spacing.m : '0px',
      borderRight:
        this.props.title && this.props.title.length
          ? `1px solid ${
              this.props.themeColor === HeaderTheme.White
                ? colors.soap400
                : chroma(colors.soap400)
                    .alpha(0.4)
                    .css()
            }`
          : 'none',
    });

    const titleStyle = css({
      display: this.props.title && this.props.title.length ? 'initial' : 'none',
      color:
        this.props.themeColor === HeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
    });

    return (
      <div className={lockupContainerStyle}>
        <div className={cx(lockupStyle, css(verticalCenterStyle))}>
          <span
            className={logoStyle}
            dangerouslySetInnerHTML={{
              __html: this.props.themeColor === HeaderTheme.White ? wdayLogoBlue : wdayLogoWhite,
            }}
          />
          <h3 className={cx(css(logoTitleStyle), titleStyle)}>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}
