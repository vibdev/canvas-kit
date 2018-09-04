import * as React from 'react';
import {css, cx} from 'emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import {
  logoTitleStyle,
  verticalCenterStyle,
} from '@workday/canvas-kit-react-header/lib/shared/styles';
import * as chroma from 'chroma-js';

export type DubTitleProps = {
  title: string;
  bgColor?: string;
} & Partial<HeaderThemePropType>;

export class DubLogoTitle extends React.Component<DubTitleProps> {
  static defaultProps = {
    theme: HeaderTheme.light,
  };

  render() {
    const logoStyle = css({
      padding: '0 16px',
      marginRight: '16px',
      borderRight: `1px solid ${
        this.props.theme === HeaderTheme.light
          ? colors.soap400
          : chroma(colors.frenchVanilla100)
              .alpha(0.3)
              .css()
      }`,
    });

    const titleColor = css({
      color: this.props.theme === HeaderTheme.light ? colors.blueberry500 : 'white',
    });

    const bgColor = css({
      background: this.props.bgColor ? this.props.bgColor : 'none',
    });

    return (
      <div className={cx(css({display: 'inline-block'}), bgColor)}>
        <div className={cx(verticalCenterStyle)}>
          <span className={logoStyle}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="The-Dub/Web/icon-32"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="The-Dub/Dub/White-2" transform="translate(5.000000, 2.000000)">
                  <path
                    d="M2.0492553,9.76449275 C1.92824717,9.76449275 1.80536295,9.74777333 1.68307567,9.71284637 C0.959244115,9.50556055 0.536099421,8.73506654 0.737779631,7.99179631 C0.767200211,7.88377659 0.798241055,7.77619455 0.830816886,7.66966294 C2.23012791,3.08223863 6.31805358,0 11.0030038,0 C15.6821553,0 19.7685459,3.07724906 21.1714386,7.65723279 C21.2023089,7.75789947 21.2321559,7.86022934 21.2604678,7.96308442 C21.4656444,8.70547929 21.0457402,9.47798663 20.3226762,9.68842376 C19.6002943,9.89903596 18.8475539,9.46774489 18.6425479,8.72535002 C18.6212286,8.64858074 18.5993124,8.57242421 18.576117,8.49670536 C17.5310469,5.08550553 14.4878503,2.79433193 11.0030038,2.79433193 C7.51389357,2.79433193 4.46950309,5.08918205 3.42750289,8.50493376 C3.40362531,8.58345377 3.38068579,8.66258654 3.3591107,8.74215698 C3.19137075,9.35990024 2.64457434,9.76449275 2.0492553,9.76449275"
                    id="Fill-1"
                    fill="#F38B00"
                  />
                  <path
                    d="M20.7399021,13.6005435 L18.8677779,13.6005435 C18.6025632,13.6005435 18.3721293,13.7835385 18.311457,14.0424726 L15.7948948,24.4756038 C15.7602865,24.4760348 13.0219209,14.0508337 13.0219209,14.0508337 C12.9522729,13.785521 12.7123455,13.6005435 12.4379824,13.6005435 L9.53796785,13.6005435 C9.27758621,13.6005435 9.04991409,13.7760394 8.98371829,14.0278192 L6.22541622,24.5202536 C6.12340392,24.4543133 3.68822709,14.0424726 3.68822709,14.0424726 C3.6274685,13.7835385 3.39712093,13.6005435 3.13190622,13.6005435 L1.26116292,13.6005435 C0.885736948,13.6005435 0.611546532,13.955328 0.70639553,14.3184736 L4.13882456,27.4704992 C4.20407101,27.7208137 4.42854985,27.8963096 4.68651495,27.8985507 L7.5177446,27.8940685 C7.77752211,27.8936375 8.00407227,27.7204689 8.07061329,27.4693786 C8.55443811,25.6466687 10.9397308,16.4285626 10.9397308,16.4285626 C10.9397308,16.4285626 13.445246,25.6464101 13.9289845,27.4693786 C13.9956119,27.7204689 14.222162,27.8936375 14.4818532,27.8940685 L17.3131692,27.8985507 C17.5711343,27.8963096 17.7956131,27.7208137 17.8609459,27.4704992 L21.2936338,14.3170945 C21.3883102,13.9545523 21.1147239,13.6005435 20.7399021,13.6005435"
                    id="Fill-4"
                    fill={this.props.theme === HeaderTheme.light ? colors.blueberry500 : 'white'}
                  />
                </g>
              </g>
            </svg>
          </span>
          <h3 className={cx(logoTitleStyle, titleColor)}>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}
