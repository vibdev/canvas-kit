import * as React from 'react';
import {cx, css} from 'emotion';
import styled from 'react-emotion';
import {type, spacing} from '@workday/canvas-kit-react-core';
import {DubLogoTitle, WorkdayLogoTitle} from './parts';
import {verticalCenterStyle} from './shared/styles';
import {themes} from './shared/themes';
import {HeaderTheme, HeaderVariant} from './shared/types';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {SystemIconProps} from '@workday/canvas-kit-react-icon/dist/types/lib/SystemIcon';

export enum HeaderHeight {
  Small = '64px',
  Large = '80px',
}

export interface HeaderProps {
  themeColor: HeaderTheme;
  variant: HeaderVariant;
  title?: string;
  brand?: React.ReactNode;
  brandUrl?: string;
  centeredNav?: boolean;
}

const HeaderShell = styled('div')<HeaderProps>(
  {
    label: 'header-style',
    ...verticalCenterStyle,
    boxSizing: 'border-box',
    ...type.body,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  (props: HeaderProps) => ({
    height: props.variant === HeaderVariant.Dub ? HeaderHeight.Small : HeaderHeight.Large,
    background: themes[props.themeColor].background,
    ...themes[props.themeColor].depth,
    color: themes[props.themeColor].color,
  })
);

export class Header extends React.Component<HeaderProps> {
  static Theme = HeaderTheme;
  static Variant = HeaderVariant;
  static defaultProps = {
    themeColor: HeaderTheme.White,
    variant: HeaderVariant.Dub,
  };

  /**
   * Helper that recursively maps ReactNodes to their theme-based equivalent.
   * Any children that are included in a Header may need to undergo transformation
   * before stamped out in render().
   *
   * E.g. <SystemIcon> components need to have the appropriate `color` and `colorHover`
   * props set based on the theme.cu
   *
   * @param children From props.children of a React component
   *
   * @returns {React.ReactNode} The child/children to be rendered
   */
  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      // We can take advantage of isValidElement's return type here, the rest of
      // the callback will infer child as a ReactElement if this check fails
      if (!React.isValidElement(child)) {
        return child;
      }

      type Props = {children: React.ReactNode};
      const propsChildren = (child as React.ReactElement<Props>).props.children;
      const hasChildren = React.Children.count(propsChildren) ? true : false;

      if (hasChildren) {
        return React.cloneElement(child as React.ReactElement<Props>, {
          children: this.renderChildren(propsChildren),
        });
      }

      if (child.type === SystemIcon) {
        return React.cloneElement(child as React.ReactElement<SystemIconProps>, {
          color: themes[this.props.themeColor].systemIcon.color,
          colorHover: themes[this.props.themeColor].systemIcon.colorHover,
        });
      }

      return child;
    });
  }

  private defaultBrand(): React.ReactNode {
    return (
      <span>
        {this.props.variant === HeaderVariant.Dub &&
          (this.props.brand || (
            <DubLogoTitle
              title={this.props.title ? this.props.title : ''}
              themeColor={this.props.themeColor}
            />
          ))}
        {this.props.variant === HeaderVariant.Full &&
          (this.props.brand || (
            <WorkdayLogoTitle title={this.props.title} themeColor={this.props.themeColor} />
          ))}
      </span>
    );
  }

  render() {
    const headerPadding = this.props.variant === HeaderVariant.Dub ? spacing.s : spacing.l;

    const brandSlot = css({
      label: 'brand-slot-style',
      height: '100%',
      flexGrow: this.props.centeredNav ? 'unset' : 1,
    });

    const childrenSlot = css({
      label: 'children-slot-style',
      ...verticalCenterStyle,
      flexGrow: this.props.centeredNav ? 1 : 'unset',
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

    const navStyle = css({
      nav: {
        flexGrow: 1,
        justifyContent: 'center',
        height: 'inherit',

        '& ul': {
          ...verticalCenterStyle,
          justifyContent: 'center',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          height: 'inherit',

          '& li': {
            ...verticalCenterStyle,
            margin: `0 ${spacing.s}`,
            fontSize: '14px',
            fontWeight: 700,
            height: 'inherit',
          },
          '& li:first-child': {
            marginLeft: 0,
          },
          '& li:last-child': {
            marginRight: 0,
          },

          '& li a': {
            boxSizing: 'border-box',
            ...verticalCenterStyle,
            color: 'inherit',
            textDecoration: 'none',
            height: 'inherit',
            padding: `0px ${spacing.xxs}`,
          },
        },
      },
    });

    return (
      <HeaderShell themeColor={this.props.themeColor} variant={this.props.variant}>
        <div className={brandSlot}>
          {this.props.brandUrl ? (
            <a className={brandAnchor} href={this.props.brandUrl}>
              {this.defaultBrand()}
            </a>
          ) : (
            this.defaultBrand()
          )}
        </div>
        <div className={cx(childrenSlot, navStyle)}>{this.renderChildren(this.props.children)}</div>
      </HeaderShell>
    );
  }
}
