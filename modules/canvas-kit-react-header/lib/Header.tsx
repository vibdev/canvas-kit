import * as React from 'react';
import {
  HeaderTheme,
  HeaderThemePropType,
  HeaderVariant,
  HeaderVariantType,
} from '@workday/canvas-kit-react-header/lib/shared/types';
import {cx, css} from 'emotion';
import {colors, depth, type, spacing} from '@workday/canvas-kit-react-core';
import {DubLogoTitle, WorkdayLogoTitle} from '@workday/canvas-kit-react-header/lib/parts';

export interface HeaderProps extends Partial<HeaderThemePropType> {
  variant: HeaderVariantType;
  title: string;
  brand?: React.ReactNode;
  brandUrl?: string;
  centered?: boolean;
}

export enum HeaderHeight {
  Small = '64px',
  Large = '80px',
}

export class Header extends React.Component<HeaderProps> {
  static defaultProps = {
    type: HeaderVariant.dub,
    theme: HeaderTheme.white,
    brandUrl: '#',
    transparent: false,
  };

  private headerDepthMap = {
    [HeaderTheme.white]: depth['1'],
    [HeaderTheme.blue]: depth['3'],
  };

  // Figure out background object given prop variations
  private getBackgroundStyle(props: HeaderProps) {
    if (props.transparent) {
      return {background: 'rgba(0,0,0,0)'};
    } else {
      return {
        background:
          this.props.theme === HeaderTheme.white
            ? colors.frenchVanilla100
            : colors.gradients.blueberry,
      };
    }
  }

  render() {
    let headerDepth;
    const headerPadding = this.props.variant === HeaderVariant.dub ? spacing.s : spacing.l;
    const headerStyle = css({
      label: 'header-style',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      ...type.body,
      height: this.props.variant === HeaderVariant.dub ? HeaderHeight.Small : HeaderHeight.Large,
      color: this.props.theme === HeaderTheme.white ? colors.licorice400 : colors.frenchVanilla100,
      ...this.getBackgroundStyle(this.props),
    });

    const brandSlot = css({
      label: 'brand-slot-style',
      height: '100%',
      flexGrow: this.props.centered ? 'unset' : 1,
    });

    const childrenSlot = css({
      label: 'children-slot-style',
      display: 'flex',
      alignItems: 'center',
      flexGrow: this.props.centered ? 1 : 'unset',
      justifyContent: 'flex-end',
      height: '100%',
      '> *': {
        margin: `0 ${spacing.s}`,
      },
      '> *:last-child': {
        marginRight: headerPadding,
      },
    });

    const brandAnchor = css({
      label: 'brand-anchor-style',
      ...type.link,

      '&:hover': {
        textDecoration: 'none',
      },

      '&:focus': {
        textDecoration: 'none',
      },
    });

    // Only set the header depth if we are not transparent
    if (!this.props.transparent) {
      headerDepth = css(this.headerDepthMap[this.props.theme!]);
    } else {
      headerDepth = css({boxShadow: 'none'});
    }

    return (
      <div className={cx(headerStyle, headerDepth)}>
        <div className={brandSlot}>
          <a className={brandAnchor} href={this.props.brandUrl}>
            {this.props.variant === HeaderVariant.dub &&
              (this.props.brand || (
                <DubLogoTitle title={this.props.title} theme={this.props.theme} />
              ))}
            {this.props.variant === HeaderVariant.full &&
              (this.props.brand || (
                <WorkdayLogoTitle title={this.props.title} theme={this.props.theme} />
              ))}
          </a>
        </div>
        <div className={childrenSlot}>{this.props.children}</div>
      </div>
    );
  }
}
