import * as React from 'react';
import {
  HeaderTheme,
  HeaderThemePropType,
  HeaderVariant,
  HeaderVariantType,
} from '@workday/canvas-kit-react-header/lib/shared/types';
import {cx, css} from 'emotion';
import {type, spacing} from '@workday/canvas-kit-react-core';
import {DubLogoTitle, WorkdayLogoTitle} from '@workday/canvas-kit-react-header/lib/parts';
import {verticalCenterStyle} from '@workday/canvas-kit-react-header/lib/shared/styles';
import {themes} from '@workday/canvas-kit-react-header/lib/shared/themes';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {SystemIconProps} from '@workday/canvas-kit-react-icon/dist/types/lib/SystemIcon';

export enum HeaderHeight {
  Small = '64px',
  Large = '80px',
}

export interface HeaderProps extends Partial<HeaderThemePropType> {
  variant: HeaderVariantType;
  title: string;
  brand?: React.ReactNode;
  brandUrl?: string;
  centeredNav?: boolean;
}

export class Header extends React.Component<HeaderProps> {
  static defaultProps: Partial<HeaderProps> = {
    theme: HeaderTheme.white,
    brandUrl: '#',
  };

  /**
   * Helper that recursively maps ReactNodes to their theme-based equivalent.
   * Any children that are included in a Header may need to undergo transformation
   * before stamped out in render().
   *
   * E.g. <SystemIcon> components need to have the appropriate `color` and `colorHover`
   * props set based on the theme.
   *
   * @param children From props.children of a React component
   *
   * @returns {React.ReactNode} The child/children to be rendered
   */
  renderChildren(children: React.ReactNode): React.ReactNode {
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
          color: themes[this.props.theme!].systemIcon.color,
          colorHover: themes[this.props.theme!].systemIcon.colorHover,
        });
      }

      return child;
    });
  }

  render() {
    const headerTheme = themes[this.props.theme!];
    const headerPadding = this.props.variant === HeaderVariant.dub ? spacing.s : spacing.l;
    const headerStyle = css({
      label: 'header-style',
      ...verticalCenterStyle,
      boxSizing: 'border-box',
      height: this.props.variant === HeaderVariant.dub ? HeaderHeight.Small : HeaderHeight.Large,
      // TODO: Type styles should probably be moved to something for all Canvas Kit React components
      ...type.body,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      background: headerTheme.background,
      ...headerTheme.depth,
      color: headerTheme.color,
    });

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
      <div className={cx(headerStyle)}>
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
        <div className={cx(childrenSlot, navStyle)}>{this.renderChildren(this.props.children)}</div>
      </div>
    );
  }
}
